class ResponseFormatter {

  format(response) {
    let output;
    if(response.query == 'count'){
      output = `${response.username} has ${response.results} ${response.subject}(s)`;
      console.log(output);
    } else {
      output = `${response.username}'s ${response.subject}`
      console.log(output);
      response.results.forEach(repo => {
        console.log(`${repo.name} - ${repo.description}`);
      })
    }
    
  }
}

module.exports = ResponseFormatter;