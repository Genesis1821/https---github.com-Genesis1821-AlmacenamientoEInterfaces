const express = require("express")
const { json } = require("express/lib/response")
const app = express()
const equipoRoute = require("./routes/equipo")
const mantenimientoRoute = require("./routes/mantenimiento")


app.use(express.json())
app.use("/api", equipoRoute)
app.use("/api", mantenimientoRoute)

app.listen("4000", console.log("esta corriendo en el puerto 4000"))