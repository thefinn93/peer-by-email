#!/usr/bin/env node

/*
 * This file is part of Peer By Email
 *
 * Peer By Email is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Peer By Email is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Peer By Email.  If not, see <http://www.gnu.org/licenses/>.
 */

var path  = require('path'),
    nodemailer = require('nodemailer'),
    emailTemplates = require('email-templates');

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}


module.exports = function(to, password, options, handleError) {
  var transport = nodemailer.createTransport(options.transport);
  emailTemplates(path.join(__dirname, 'templates'), function(err, template) {
    if (err) {
      handleError(err);
    } else {
      var locals = options.vars;
      locals.UDPPeer.password = password;
      locals.prettyJSON = syntaxHighlight(JSON.stringify(locals.UDPPeer, null, 2));
      template(options.template, locals, function(err, html, text) {
        if (err) {
          handleError(err);
        } else {
          transport.sendMail({
            from: options.from,
            to: to,
            subject: options.subject,
            html: html,
            text: text
          }, function(err, responseStatus) {
            if(err) {
              handleError(err);
            }
          });
        }
      });
    }
  });
};
