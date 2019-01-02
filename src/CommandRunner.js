const gitHub = require('./GitHub');

class CommandRunner {
  constructor(command, infoGrabber = gitHub){
    this.username = command.username;
    this.query = command.query;
    this.subject = command.subject;
    this.infoGrabber = infoGrabber;
  }
  getInfo() {
    this.response = this.infoGrabber.pullData(this);
    return this.response;
  }
}

module.exports = CommandRunner;