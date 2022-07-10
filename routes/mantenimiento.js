const express = require("express")
const route = express.Router()



route.get("listar-mantenimientos", "");
route.get("filtrar-por-tipo-mantenimiento/:tipo", "");
route.post("agregar-mantenimiento", "");
route.put("actualizar-fecha/:id","")
route.put("actualizar-mantenimiento/:id","")
route.delete("eliminar-mantenimiento/:id",)

module.exports = route