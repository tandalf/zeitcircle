const express = require('express')

app = express()
app.get('/', (req, res) => res.send('Hello User!'))


const PORT = 3111
app.listen(PORT, function(){
  console.log(`Server started. Visit http://localhost:${PORT}/`)
})
