#! /usr/local/bin/node

// Settings - TODO Read these from command line as params
const SIZES = [
    2560,
    1024,
    800,
    640,
    320
];

const DIR = './images';
// End Settings

const fs = require('fs');
const Jimp = require('jimp');

const searchDir = DIR || '.';

const files = fs.readdirSync(searchDir).filter(filename => filename.indexOf('.jpg') > -1);

console.log(`JPG files detected:  ${files}`); // eslint-disable-line

files.forEach((file) => {

    SIZES.forEach((fileSize) => {

        Jimp.read(`${searchDir}/${file}`, (err, image) => {

            if (err) throw err;

            console.log(`Generating ${file} in ${fileSize}...`); // eslint-disable-line

            image
                .resize(fileSize, Jimp.AUTO)
                .write(`${searchDir}/${file.split('.jpg')[0]}_${fileSize}.jpg`);

        });

    });

});
