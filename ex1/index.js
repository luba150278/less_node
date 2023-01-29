// import { argv } from 'node:process'; // import process from "node:process"
// import word from "./app/app.js.js";

// console.log(Number(argv[2])+Number(argv[3]))
// console.log(word);
import { readFile, writeFile } from 'node:fs';

readFile('./files/info.txt', "utf8", (err, data) => {
    if (err) throw err;
    const text = data + "gffgfg";

    writeFile('./files/info.txt', text, 'utf8', (err) => {
        if (err) throw err;
        readFile('./files/info.txt', "utf8", (err, data) => {
            if (err) throw err;
            console.log(data)
        });
    });
});



