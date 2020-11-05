# readline-refresh-line

Node's `readline.Interface#_refreshLine` unnecessarily clears [entire screen down](https://github.com/nodejs/node/blob/1387f4b938ae7ab2f934d29e5a01b074e52bdf6f/lib/readline.js#L395) when printing user input. This is a patch to only clear lines that user input is printed on.

```sh
$ npm install https://github.com/slammayjammay/readline-refresh-line
```

```js
/* your js file */
require('readline-refresh-line/hijack')
```
