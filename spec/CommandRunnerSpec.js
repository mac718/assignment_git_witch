const CommandRunner = require('../src/CommandRunner');

describe("CommandRunner", () => {
  beforeEach(() => {
    this.username = 'Griselda';
    this.subject = 'repos';
  })
  

  it("returns a number for 'count' queries", () => {
    let gitHub = { pullData(response = {}) {
      response.query = 'count';
      response.subject = 'repos';


      response.data = [{name: 'Code-Coven', description: 'A version control system for weird sisters'}];

      return Promise.resolve(response);
    }};

    this.runner = new CommandRunner(gitHub)

    this.runner.run(this.username, this.subject, this.countQuery).then(result => {
      expect(result.results).toBe(1)
    })
  })
 
  it("returns an object for 'details' queries", () => {
    let gitHub = { pullData(response = {}) {
      response.query = 'details';
      response.subject = 'repos';


      response.data = [{name: 'Code-Coven', description: 'A version control system for weird sisters'}];

      return Promise.resolve(response);
    }};

    this.runner = new CommandRunner(gitHub)
    this.runner.run(this.username, this.subject, this.detailsQuery).then(result => {
      expect(typeof(result.results)).toBe('object');
    })
  })
})