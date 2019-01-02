'use-strict';
const parser = require('./QuestionParser');

const input = process.argv.slice(2).join(' ');

const qParser = new parser();

console.log(qParser.parse(input));

