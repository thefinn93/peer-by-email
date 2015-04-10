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


var smtpTransport = require('nodemailer-smtp-transport');

exports.imap = {
 host: 'imap.seattlemesh.net',
 port: 993,
 secure: true,
 options: {
   secureConnection: true,
   auth: {
     user: 'join@hyperboria.network',
     pass: 'hunter12'
   }
 }
};

// Lots of transport options, see https://github.com/andris9/Nodemailer for info
exports.outbound = {
  transport: smtpTransport({
    host: 'mail.seattlemesh.net',
    port: 587,
    secure: true,
    auth: {
      user: 'join@hyperboria.network',
      pass: 'hunter12'
    }
  }),
  options: {
    from: 'join@hyperboria.network',
    template: 'default',
    subject: 'Hyperboria Peering Information',
    vars: {
      ipport: '74.221.208.153:25521',
      UDPPeer: {  // password gets added when it is generated
        publicKey: '8hgr62ylugxjyyhxkz254qtz60p781kbswmhhywtbb5rpzc5lxj0.k',
        hostname: 'seanode.meshwith.me',
        contact: 'peering@meshwith.me'
      }
    }
  }
};
