class QuestionParser {
  constructor() {}
  parse(input){
    console.log(input);
    let query, subject;

    let splitInput = input.toLowerCase().split(' ');

    console.log(splitInput);
    
    if(splitInput[0] == 'what') {
      query = 'details';
    } else {
      query = 'count';
    };

    if(splitInput.includes('many')){
      subject = /(?<=many\s).*(?=\sdoes)/.exec(input)[0];
    } else {
      subject = /(?<=what\s).*(?=\sdoes)/.exec(input)[0];
    };

    return {
      'username': /(?<=does\s)\w+/.exec(input)[0],
      'subject': subject,
      'query': query
    };
  }
}

module.exports = QuestionParser;