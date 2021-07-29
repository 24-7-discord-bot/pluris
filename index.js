const readdir = require('util').promisify(require('fs').readdir);

let plugins;

/**
 * @param {import('eris')} Eris
 * @param {Object.<string, Boolean>} options
 */
module.exports = async (Eris, options = {}) => {
  plugins = Object.fromEntries((await readdir(`${__dirname}/src`)).map((p) => [p, true]));
  const selectedPlugins = Object.keys(options);
  selectedPlugins.forEach((k) => {
    if (typeof plugins[k] === 'undefined') return console.error(`Unknown option: ${k}`);
    if (typeof options[k] !== 'boolean') throw new TypeError(`Expecting type boolean for option ${k}. Received type ${typeof options[k]}.`);
    plugins[k] = options[k];
  });

  let count = 0;
  Object.keys(plugins).forEach((k) => {
    if (plugins[k] === false) return;
    const plugin = require(`./src/${k}`);

    plugin.init(Eris, plugins);
    delete plugin.init;
    if (process.env.plurisDebug) {
      console.log('[pluris]', `Loaded plugin: ${k}`);
    }
    count += 1;
  });

  console.log('[pluris]', `Loaded ${count} pluris plugins`);
};
