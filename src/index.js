const express=require("express");
const students =require("./routes/students")
const percentage = require("./routes/percentage")
const subjects = require("./routes/subjects")

const app =express();
const PORT =3001;

app.use(express.json());
app.use(students);
app.use(percentage);
app.use(subjects);

app.use((req,res,next)=>{
    console.log("Middleware testing");
    next();
},);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`);
});


app.get("/",(req,res,next)=>{
    res.send("<h1>HOME PAGE</h1>");
next();
},
(req,res)=>{
    console.log("HomePage");
}
);


