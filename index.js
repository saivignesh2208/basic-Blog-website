import express from 'express';
import ejs from "ejs";

const app = express();
const port = 3000;
let post =[];

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get("/",(req,res)=>{
    res.render("index.ejs",{post});
});

app.get("/new",(req,res)=>{
    res.render("post.ejs");
});

app.post('/new', (req, res) => {
    const { title, content } = req.body;
    const newPost = { title, content };
    post.push(newPost);
    res.redirect('/');
});

app.listen(port ,()=>{
    console.log(`listening on port ${port}`);
});