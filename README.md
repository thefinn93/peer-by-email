# Peer By Email
This doesn't work at the moment. I'll try to update this a when that's no longer the case.

# Running
Copy the `config.example.js` to `config.js`. Edit as needed (see [configuration](#Configuration) for
more info). Run `npm install` to install the depends, then start it up with `node index.js`

# Configuration
Copy `config.example.js` to `config.js`, and edit that. There are 3 possible sections at the moment:

## IMAP
The value for `options` and be changed quite a bit to include things like OAuth. For more info about
setting that up, check out the IMAP library's
[README](https://github.com/pipedrive/inbox#create-new-imap-connection) file.

## Outbound
I'm using [Nodemailer](https://github.com/andris9/Nodemailer) to send email. If you read their docs,
there are lots of different configuration options to choose from. `config.example.js` shows how to
do a standard SMTP server, but
[the Nodemailer docs](https://github.com/andris9/Nodemailer#available-transports) explain how to use
a number of different transports.
The other outbound options are pretty self-explanatory. `template` defines the template to use from
the `templates/` directory. I plan to expand this eventually, but right now it's just a boring,
mostly text-based template. `from` is the address that the mail comes from, `subject` is the
subject of course, and `vars` is the connection info sent to the user (`password` is added when it
is generated).

## SentryDSN
If you define `exports.sentryDSN`, any errors will be sent to that Sentry DSN. For more info about
Sentry, see [getsentry.com](https://getsentry.com). If you leave this value out, errors will still
be printed to the console, they just wont be sent anywhere else.

# Contributing
Pull requests and bug reports are always nice. I make no promises about actually fixing reported
bugs, but if you make a pull request I'll definitely try to look over it.
