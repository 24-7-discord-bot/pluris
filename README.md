Pluris
======

Extra prototypes and utilities for the [Eris](https://npmjs.com/package/eris) Discord API Library

## About this fork
This fork has the following changes:
- Changed some logging to only log if environment variable "plurisDebug" is a positive value
- Addded support for a stop reason in awaitMessages (see [awaitMessages docs](https://github.com/24-7-discord-bot/pluris/blob/master/docs/awaitMessages.md#stop-1))

---
Installation and Usage
----------------------
You will need to have at least Eris v0.15.0 installed. Previous versions of Eris may work but will not be tested for compatibility with the current version of Pluris. You must also make sure that other packages do not conflict with Pluris.

This fork:
```
npm i github:24-7-discord-bot/pluris
```

Or the original package:

```
$ npm i pluris
```
After installing Pluris, make sure you initialize Eris with Pluris.\
for this fork:
```js
const Eris = require('eris');
require('@24-7-discord-bot/pluris')(Eris);
```
for the original package:
```js
const Eris = require('eris');
require('pluris')(Eris);
```
You will only need to do this once, preferably in your main bot file. To disable specific plugins, supply an object in the second parameter with the plugin name set to false. See below for a list of available plugins.\
For this fork:
```js
const Eris = require('eris');
require('@24-7-discord-bot/pluris')(Eris, { awaitMessages: false });
```
For the original package:
```js
const Eris = require('eris');
require('pluris')(Eris, { awaitMessages: false });
```
Setting the plugin to `true` will keep the plugin enabled

Plugins
-------
- [awaitMessages](docs/awaitMessages.md)
- [awaitReactions](docs/awaitReactions.md)
- [createDMMessage](docs/createDMMessage.md)
- [embed](docs/embed.md)
- [endpoints](docs/endpoints.md)
- [messageGuild](docs/messageGuild.md)
- [roleList](docs/roleList.md)
- [webhooks](docs/webhooks.md)

(In case I've missed some plugins from this list, you can see the [docs](docs/) folder for available plugins)

TypeScript
----------
This package includes some documentation updates for Eris. I have tried to overwrite the typings as best as I can, however if there are any errors or issues, please let me know.

Need some help?
---------------
Feel free to contact me by joining either servers:
- [Axon Labs](https://discord.gg/QZ6B5US) (preferred) in the #other-support channel
- [Dyno](https://discord.gg/dyno) (most active) in the #code-dev channel, by running `?rank Code` in #commands when joining the server
- I kindly ask you not to use the #js_eris channel in Discord API so that the channel can be focused on Eris itself

License
-------
Please see the [license](LICENSE) file. 
