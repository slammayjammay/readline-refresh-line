const { Interface } = require('readline');
const refreshLine = require('./index');

Interface.prototype._refreshLine = refreshLine;
