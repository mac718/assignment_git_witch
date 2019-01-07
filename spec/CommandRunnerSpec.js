const CommandRunner = require('../src/CommandRunner');

describe("CommandRunner", () => {
  beforeEach(() => {
    this.username = 'Griselda';
    this.subject = 'repos';
    this.gitHub = { pullData(command) {
      let response = [{name: 'Code-Coven', description: 'A version control system for weird sisters'}];
      if(command == 'details'){
        return `${response[0].name} - ${response[0].description}`
      } else {
        return response.length;
      }
    }};

    this.runner = new CommandRunner(this.gitHub)
  })
  

  it("returns a 'count' response object for count queries", () => {
    expect(this.runner.run('count').results).toBe(1);
  })
 
  it("returns a 'details' response object for details queries", () => {
    //this.query = 'details';
    console.log(this.query);
    expect(this.runner.run('details').results).toBe("Code-Coven - A version control system for weird sisters");
  })
})