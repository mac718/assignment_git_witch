const CommandRunner = require('../src/CommandRunner');

describe("CommandRunner", () => {
  beforeEach(() => {
    this.username = 'Griselda';
    this.subject = 'repos';
    this.countQuery = 'count';
    this.detailsQuery = 'details';
    this.gitHub = { pullData() {
      let response = {};

      response.results = [{name: 'Code-Coven', description: 'A version control system for weird sisters'}];
      return Promise.resolve(response);
      // if(command == 'details'){
      //   return `${response[0].name} - ${response[0].description}`
      // } else {
      //   return response.length;
      // }
    }};

    this.runner = new CommandRunner(this.gitHub)
  })
  

  it("returns a 'count' response object for count queries", () => {
    this.query = 'count';
    this.runner.run(this.username, this.subject, this.countQuery).then(result => {
      expect(result.results).toBe(1);
    })
  })
 
  it("returns a 'details' response object for details queries", () => {
    this.runner.run(this.username, this.subject, this.detailsQuery).then(result => {
      expect(result.results).toBe("Code-Coven - A version control system for weird sisters");
    })
  })
})