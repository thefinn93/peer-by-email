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


var inbox = require("inbox");
try {
  var config = require("./config");
} catch(e) {
  console.log(e.stack || e);
  console.log("Please copy config.example.js to config.js and edit as needed.");
  process.exit(1);
}

var mailclient = inbox.createConnection(config.imap.port, config.imap.host, config.imap.options);

var handleMail = function(message) {
  var from = message.from.name + " <" + message.from.address + ">";
  console.log("Handling message from", from);
  // console.log(message);
};

mailclient.on('connect', function() {
  console.log("Successfully connected to server");
  mailclient.openMailbox('INBOX', function(err, info) {
    if(err) {
      throw err;
    } else {
      console.log(info);
      mailclient.listMessages(-100, function(err, messages) {
        messages.forEach(handleMail);
      });
    }
  });
});

mailclient.on('disconnect', function() {
  console.log("Disconnected from server");
});

mailclient.on('new', function(message) {
  handleMail(message);
});

mailclient.connect();
console.log("Connecting to", config.imap.host);
