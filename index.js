const app = require("./app");
const db = require('./config/db')

// Use the PORT environment variable provided by Railway, default to 3000 if not available
const port = process.env.PORT || 3000;
// Use the HOST environment variable, default to localhost if not available
const host = process.env.HOST || 'localhost';

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(port, host, ()=>{
    console.log(`Server Listening on http://${host}:${port}`);
})
