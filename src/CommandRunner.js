const gitHub = require('./GitHub');

class CommandRunner {
  constructor(infoGrabber = gitHub){
    this.infoGrabber = infoGrabber;
  }
  run(command) {
    return new Promise((resolve, reject) => {
      let response = {
        username: command.username,
        subject: command.subject,
        query: command.query,
      };
      this.infoGrabber.pullData(command).then(result => {
        if(response.query == 'count'){
          response.results = result.data.length;
        } else {
          response.results = JSON.stringify(result.data);
        }
        
        resolve(response);
      })
    })
    
  }
}

module.exports = CommandRunner;