# Peer By Email
This doesn't work at the moment. I'll try to update this a when that's no longer the case.

# Running
Copy the `config.example.js` to `config.js`. Edit as needed (see [configuration](#Configuration) for
more info). Run `npm install` to install the depends, then start it up with `node index.js`

# Configuration
Copy `config.example.js` to `config.js`, and edit that. Currently, there's only a section for IMAP,
and most of the stuff is self-explanatory. The value for `options` and be changed quite a bit to
include things like OAuth. For more info about setting that up, check out the IMAP library's
[README](https://github.com/pipedrive/inbox#create-new-imap-connection) file. As more configuration
options arise, I will attempt to document them here.

# Contributing
Pull requests and bug reports are always nice. I make no promises about actually fixing reported
bugs, but if you make a pull request I'll definitely try to look over it.
