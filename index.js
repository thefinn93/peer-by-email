#!/usr/bin/env node

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
