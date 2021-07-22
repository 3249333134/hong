const path = require('path');
var from = path.resolve('/c/Users/ssyp/AppData/Roaming/npm/lerna').replace(/\\/g,'/');
var CHAR_FORWARD_SLASH = '/'.charCodeAt();
var nm = 'node_modules';
var nmlen = nm.length;
var nmChars = [110, 111, 100, 101, 95, 109, 111, 100, 117, 108, 101, 115];
var p = 0;
var last = from.length;
const paths = [];
for (var i = from.length - 1; i >= 0; i--) {
	const code = from.charCodeAt(i);
	if(code === CHAR_FORWARD_SLASH) {
		if(p !== nmlen) {
			paths.push(from.slice(0,last) + '/node_modules')
			last = i;
			p = 0;
		}else if(p !== -1) {
			if(nmChars[p] === code) {
				++p
			}else {
				p = -1;
			}
		}
	}
}
console.log(paths);
