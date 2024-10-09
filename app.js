const Username = process.env.USER

console.log("HACIENDO LA PETICION A LA API")
fetch(`https://api.github.com/users/${Username}/events`)
.then(res=>res.json())
.then(data =>{
    console.log("RESULTADO:")
    console.log(data)
}).catch(err=>{
    console.log(err)
})
