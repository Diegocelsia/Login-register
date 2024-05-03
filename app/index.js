const express = require("express")


//server
const app = express()

app.listen(4000, () => {
    console.log('Escuchando servidor el puerto ', 'http://localhost:' + 4000)
})


//configuracion Css - Enlace de Files
app.use(express.static(__dirname + "/public"))
app.use("/images", express.static("images"))



//Rutas
app.get("/", (req, res) => res.sendFile(__dirname + "/pages/login.html"))//Ruta de Login
app.get("/register", (req, res) => res.sendFile(__dirname + "/pages/register.html"))//Ruta de registro

