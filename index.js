const express = require('express')
const app = express()
app.disable('x-powered-by')

app.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.send('Esta es la primera app de samu')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`el servidor escucha en el puerto ${PORT}, http://localhost:${PORT}`))
 