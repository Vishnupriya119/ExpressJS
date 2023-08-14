const {Router}=require("express");
const router=Router();


const percentage = [
    {
        Reg_num: 61,
        Marks: 98
    },
    {
        Reg_num: 62,
        Marks: 100
    },
    {
        Reg_num: 63,
        Marks: 95
    },
    {
        Reg_num: 64,
        Marks: 93
    },

]

router.get("/percentage",(req,res)=>{
    res.send(percentage)
});
router.post("/percentage",(req,res)=>{
    console.log(req.body);
    percentage.push(req.body);
    res.send(201);
});

module.exports = router;