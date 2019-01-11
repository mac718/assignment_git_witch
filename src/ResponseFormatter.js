class ResponseFormatter {

  format(response) {
    let output;
    if(response.query == 'count'){
      if(response.subject == 'repos'){
        output = `${response.username} has ${response.results} public ${response.subject}`;
      } else {
        output = `${response.username} has ${response.results} ${response.subject}(s)`;
      };
      return output;
    } else {
      output = `${response.username}'s ${response.subject}`
      response.results.forEach(repo => {
        output += `\n${repo.name} - ${repo.description}`;
      })
      return output;
    }
    
  }
}

module.exports = ResponseFormatter;