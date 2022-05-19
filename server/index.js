const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const PORT = 7564;
app.use(bodyParser.urlencoded({extended: true}))
// Setting the EJS for template rendering
app.set('view engine', 'ejs'); 
app.set('views', path.join('/', __dirname, '../html'));
app.use(express.static(path.join(__dirname, './public/'))); 



app.get('/',(req,res)=>{
    res.render('proiect');
}); 
console.log(__dirname)
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})
