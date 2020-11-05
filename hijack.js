const { Interface } = require('readline');
const refreshLine = require('./refresh-line');

Interface.prototype._refreshLine = refreshLine;
