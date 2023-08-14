const {Router}=require("express");
const router=Router();


const subjects = [
    {
        id: "01",
        sname:"Computer Architecture"
    },
    {
        id: "02",
        sname: "Operating Systems"
    },
    {
        id: "03",
        sname: "Data Structures"
    },
    {
        id: "04",
        sname: "Digital Design"
    },

];

router.get("/subjects",(req,res)=>{
    res.send(subjects)
});
router.post("/subjects",(req,res)=>{
    console.log(req.body);
    subjects.push(req.body);
    res.send(201);
});

module.exports = router;