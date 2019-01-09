class Gitwitch {
  constructor({parser, runner, formatter}) {
    this.parser = parser;
    this.runner = runner;
    this.formatter = formatter;
  }

  process(input) {
    return new Promise(resolve => {
      let command = this.parser.parse(input);
      console.log(command);
      let response = this.runner.run(command.username, command.subject, command.query).then(result => {
        this.formatter.format(result)
        resolve();
      })
    })
  }
}

module.exports = Gitwitch;