class ResponseFormatter {

  format(response) {
    let output;
    if(response.query == 'count'){
      output = `${response.username} has ${response.results} ${response.subject}(s)`;
    } else {
      output = "Hello";
    }
    console.log(output);
  }
}

module.exports = ResponseFormatter;