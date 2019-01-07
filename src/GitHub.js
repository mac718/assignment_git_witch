const octokit = require('@octokit/rest')();

const GitHub = {
  pullData: (commandHash) => {
    return octokit.repos.listForUser({username: commandHash.username}) 
  }
}

module.exports = GitHub;