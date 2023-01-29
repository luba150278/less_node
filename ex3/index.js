import { readFileSync, writeFileSync } from 'node:fs';
let text=''
text = readFileSync('./files/info.txt', "utf8");
console.log(text)


writeFileSync('./files/info.txt', text+"DDDDMMM", 'utf8');

text = readFileSync('./files/info.txt', "utf8");

console.log(text);