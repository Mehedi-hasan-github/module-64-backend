const express = require("express");
const cors=require("cors");
// const res = require("express/lib/response");
const app = express();
const port=process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send('Hello my first node')
});
const users=[
{id:"1",name:"Sabana",email:"sabana@gmail.com",phone:'01758585585'},
{id:"2",name:"Rubina",email:"rubina@gmail.com",phone:'01758535255'},
{id:"3",name:"Jorina",email:"jorina@gmail.com",phone:'01888585585'},
{id:"4",name:"Jorina",email:"jorina@gmail.com",phone:'01888585585'},
{id:"5",name:"Khabona",email:"khabona@gmail.com",phone:'01999585585'}
];
app.get("/users",(req,res)=>{
    // console.log('query', req.query);
    if(req.query.name){
          const search= req.query.name.toLowerCase();
          const mached=users.filter(user=> user.name.toLowerCase().includes(search))
          res.send(mached);
    }
    else{
        res.send(users);
    }
    res.send(users)
});
app.get('/user/:id',(req,res)=>{
    console.log('req.params');
    const id= req.params.id;
    const user= users.find(u =>u.id==id);
    res.send(user)
})
app.post('/user',(req,res)=>{
    console.log('request',req.body);
    const user = req.body;
    user.id =users.length +1;
    users.push(user)
    res.send(user)
})

app.listen(port,()=>{
    console.log('listenint to the port',port);
});