class Gitwitch {
  constructor({parser, runner, formatter}) {
    this.parser = parser;
    this.runner = runner;
    this.formatter = formatter;
  }

  process(input) {
    return new Promise(resolve => {
      let command = this.parser.parse(input);
      
      let response = this.runner.run(command).then(result => {
        resolve(this.formatter.format(result));
      })
    })
  }
}

module.exports = Gitwitch;