const CommandRunner = require('../src/CommandRunner');

describe("CommandRunner", () => {
  beforeEach(() => {
    this.username = 'Griselda';
    this.subject = 'repos';
    this.gitHub = { pullData(type) {
      let response = [{name: 'Code-Coven', description: 'A version control system for weird sisters'}];
      if(type == 'details'){
        return `${response[0].name} - ${response[0].description}`
      } else {
        return response.length;
      }
    }};

    this.runner = new CommandRunner(this, this.gitHub)
  })
  

  it("returns a 'count' response object for count queries", () => {
    expect(this.runner.getInfo('count')).toBe(1);
  })
 
  it("returns a 'details' response object for details queries", () => {
    //this.query = 'details';
    console.log(this.query);
    expect(this.runner.getInfo('details')).toBe("Code-Coven - A version control system for weird sisters");
  })
})