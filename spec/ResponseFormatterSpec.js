const ResponseFormatter = require('../src/ResponseFormatter');

describe('ResponseFormatter', () => {
  beforeEach(() => {
    this.formatter = new ResponseFormatter();
  })

  it("returns a 'count' response for 'count' queries", () => {
    let response = {
      username: 'Griselda',
      subject: 'repos',
      query: 'count',
      results: 2
    }
    expect(this.formatter.format(response)).toContain('has');
  })

  it("returns a 'details' response for 'details' queries", () => {
    let response = {
      username: 'Griselda',
      subject: 'repos',
      query: 'details',
      results: [{name: 'Code-Coven', description: 'A version control system for weird sisters'}]
    }
    expect(this.formatter.format(response)).toContain('Code-Coven - A version control system for weird sisters');
  })
})