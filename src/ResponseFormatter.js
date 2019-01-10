class ResponseFormatter {

  format(response) {
    let output;
    if(response.query == 'count'){
      output = `${response.username} has ${response.results} ${response.subject}(s)`;
      return output;
    } else {
      output = `${response.username}'s ${response.subject}`
      console.log(output);
      response.results.forEach(repo => {
        return `${repo.name} - ${repo.description}`;
      })
    }
    
  }
}

module.exports = ResponseFormatter;