require('colors');

var consts = {
    DEBUG: 2, INFO: 3, WARN: 4, ERROR: 5
};

var level = consts.INFO;

module.exports = {
    consts: consts,
    get level() { return level; },
    set level(value) { level = value; },
    error: (msg) => level <= consts.ERROR ? console.error(msg.red) : () => {},
    warn: (msg) => level <= consts.WARN ? console.warn(msg.yellow) : () => {},
    info: (msg) => level <= consts.INFO ? console.info(msg) : () => {},
    debug: (msg) => level <= consts.DEBUG ? console.debug(msg.grey) : () => {},
};
