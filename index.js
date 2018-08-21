#! /usr/local/bin/node

const SIZES = [
    558,
    512,
    310,
    270,
    228,
    196,
    192,
    180,
    150,
    144,
    128,
    120,
    96,
    76,
    72,
    70,
    48,
    36,
    32,
    16
];

const DIR = './images';
// End Settings

const fs = require('fs');
const Jimp = require('jimp');

const searchDir = DIR || '.';

const files = fs.readdirSync(searchDir).filter(filename => filename.indexOf('.png') > -1);

console.log(`JPG files detected:  ${files}`); // eslint-disable-line

files.forEach((file) => {

    SIZES.forEach((fileSize) => {

        Jimp.read(`${searchDir}/${file}`, (err, image) => {

            if (err) throw err;

            console.log(`Generating ${file} in ${fileSize}...`); // eslint-disable-line

            image
                .resize(fileSize, Jimp.AUTO)
                .write(`${searchDir}/${file.split('.png')[0]}-${fileSize}.png`);

        });

    });

});
