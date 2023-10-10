const app = require("../lib/app.js")
describe('Express App', () => {
  it('should listen on port 3000', async () => {
    const server = app.listen(3000)
    expect(server.address().port).toBe(3000)
    server.close()
  })
})