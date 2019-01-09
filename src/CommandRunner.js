const gitHub = require('./GitHub');

class CommandRunner {
  constructor(infoGrabber = gitHub){
    this.infoGrabber = infoGrabber;
  }
  run(username, subject, query) {
    return new Promise((resolve, reject) => {
      let response = {
        username: username,
        subject: subject,
        query: query,
      };
      this.infoGrabber.pullData(response).then(result => {
        if(response.query == 'count' && response.subject == 'repos'){
          response.results = result.data.length;
        } else if(response.query == 'details' && response.subject == 'repos') {
          response.results = result.data;
        } else if(response.query == 'details' && response.subject == 'starred repos') {
          response.results = result.data.filter(repo => {
            return repo.stargazers_count > 0;
          });
        } else {
          response.results = result.data.filter(repo => {
            return repo.stargazers_count > 0;
          }).length;
        }
        resolve(response);
      })
    })
    
  }
}

module.exports = CommandRunner;