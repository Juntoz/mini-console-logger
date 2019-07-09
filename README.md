# mini-console-logger

Just very simple logger to use and configure

## Usage

Add dependency to project
`npm i @juntoz/mini-console-logger`

Use in your code
```
const logger = require('@juntoz/mini-console-logger');
logger.level = logger.consts.INFO;

// ...

logger.debug('My debug');
logger.info('My info');
logger.warn('My warn');
logger.error('My error');

// based on the current level, it will show
My info
My warn
My error
```

## Colors
Uses the `colors` library

error: red
warn: yellow
info: (no color assigned)
debug: grey