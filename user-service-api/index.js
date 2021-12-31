const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send([{
      name:'abhilash gd',
      email:'abhilash@testmail.com'

  },
  {
    name:'abhi2',
    email:'abhi2@testmail.com'

},
{
  name:'abhi3',
  email:'abhi3@testmail.com'

},
{
  name:'abhi4',
  email:'abhi4@testmail.com'

}
])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})