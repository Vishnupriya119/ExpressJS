const { Router } =require("express");
const router =Router();

const names = [
    {
        Divya: "/students/Divya"
    },
    {
        Anu: "/students/Anu"
    },
    {
        Shreya: "/students/shreya"
    },
    {
        Ravi: "/students/Ravi"
    },
];

const stu_info ={
  Divya:[
    {
        Reg_num: 61,
        Name : "Divya",
        Place: "Coimbatore"
    }
],
  Anu:[
    {
        Reg_num: 62,
        Name: "Anu",
        Place: "Bangalore"

    }
],
shreya:[
    {
        Reg_num: 63,
        Name: "Shreya",
        Place: "Trichy"
    }
],
Ravi:[
    {
        Reg_num: 64,
        Name: "Ravi",
        Place: "Chennai"
    }
]
};
router.get("/students",(req,res)=> {res.send(names);

});



router.get("/students/:Name",(req,res)=>{
    const {Name} =req.params;    
    res.send(stu_info[Name]);
});

router.post("/students",(req,res)=>{
    console.log(req.body);
    names.push(req.body);
    res.send(201);
});

module.exports=router;
