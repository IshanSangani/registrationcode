const app = require("./app");
// const UserModel = require('./models/user.model')
const db = require('./config/db')

// Use the PORT environment variable if it's available, otherwise default to 3000
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);
})
