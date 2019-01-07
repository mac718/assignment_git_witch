const parser = require('./QuestionParser');
const gitWitch = require('./GitWitch');
const runner = require('./CommandRunner');
const formatter = require('./ResponseFormatter');

const input = process.argv.slice(2).join(' ');

const commObj = {
  parser: new parser(),
  runner: new runner(),
  formatter: new formatter()
}

const witch = new gitWitch(commObj)
witch.process(input);
// .then(result => {
//   console.log(result);
// });

// const qParser = new parser();

// const command = qParser.parse(input);

module.exports = input;

