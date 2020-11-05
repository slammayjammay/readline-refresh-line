// https://github.com/sindresorhus/ansi-escapes
const ESC = '\u001B[';

const escapes = {
	eraseLine: ESC + '2K',
	cursorLeft: ESC + 'G',
	cursorPrevLine: ESC + 'F',
	cursorNextLine: ESC + 'E',
	cursorTo: (x, y) => {
		if (typeof x !== 'number') {
			throw new TypeError('The `x` argument is required');
		}

		if (typeof y !== 'number') {
			return ESC + (x + 1) + 'G';
		}

		return ESC + (y + 1) + ';' + (x + 1) + 'H';
	}
};

// instance of readline.Interface
module.exports = function _refreshLine() {
	const line = this._prompt + this.line;
	const { cols, rows } = this._getDisplayPos(line);
	const cursorPos = this.getCursorPos();

	this._writeToOutput(
		new Array((this.prevRows || 0) + 1)
			.fill(escapes.eraseLine + escapes.cursorPrevLine).join('') +
		escapes.cursorLeft + escapes.cursorNextLine +
		line +
		(cols === 0 ? ' ' : '') +
		escapes.cursorTo(cursorPos.cols)
	);

	this.prevRows = cursorPos.rows;
};
