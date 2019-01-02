//const parser = require('./QuestionParser');
class Gitwitch {
  constructor({parser, runner, formatter}) {
    this.parser = parser;
    this.runner = runner;
    this.formatter = formatter;
  }

  process(input) {
    return new Promise(resolve => {
      this.parser.parse(input);
      this.runner.run('command');
      this.formatter.format('response');
      resolve('output');
    })
  }
}

module.exports = Gitwitch;