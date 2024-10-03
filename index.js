import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 3000;


// Part 1: Routes, Templates, and Views

// setup template/ engine using what is familiar so pug engine
app.set('view engine', 'pug');
// setuping up folder for views that pug will assist with
app.set("views", "./views");






// Part 2: Middleware

// middleware setup and css 
app.use(express.static('public'));

// logger middleware

app.use(morgan('dev'));



// Part 1: Routes, Templates, and Views

// routes

app.get('/', (req, res) => {
    // all checks so going to render the home page now confirmed sent
    // res.send('home');
    res.render('lair');
})

// setting up other 2 pages index then creating the accompanying files

app.get("/accomplices", (req, res) => {
    res.render('accomplices');
})

app.get("/misdeeds", (req, res) => {
    res.render("misdeeds");
})

// Part 3 Exploring Response Options to download the img create a relative path in 1 of teh views  in this case a(href="/downloadImg") then place the image source in this case  img(src="/world.jpg") then use the get method and res.download below to create the download ability
                
app.get("/downloadImg", (req, res) =>{
    res.download("./public/world.jpg")
})


//checking port 
app.listen(PORT, ()=> console.log(`Server is up at port: ${PORT}`));