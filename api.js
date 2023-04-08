// rest api


//RE - representational , S is state, T is transfer
// representing data by sharing after processing

const express = require("express");

//initial express
const noddy = express();

noddy.use(express.json());


//HTTPS methods = GET POST PUT DELETE

//GET -  to retrieve any data
//post - to send a data to server
//put - to update existing data
// delete - to dlt an existing data

noddy.get("/",(request,response)=>{
return response.json({data: "hello "})});

noddy.get("/b",(request,response)=>{
    return response.json({data: "hello b"})});


noddy.get("/c/:id" ,(req,res) => {
    const students = [
        { id:1,
        name:"student1"},

          { id:2,
            name:"student2"},

            { id:3,
                name:"student3"},

                { id:4,
                    name:"student4"},

                    { id:5,
                        name:"student5"}
     ]

     const studentid =req.params.id; // check parameters
     console.log(studentid);
     const getstudent = students.filter((student)=> student.id === parseInt(studentid));
     return res.json({data:getstudent});
});


noddy.listen(3000, () => {
    console.log("yo");
});