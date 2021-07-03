const renderLayout = require('../layouts/main')
const { render } = require('ejs')

const template = `
<h1>Index Page</h1>
<p>Hello from Index Page!</p>`

module.exports = async function(req, res) {
  const content = await render(template)
  res.send(await renderLayout({
    title : 'Index',
    page  : content
  }))
}