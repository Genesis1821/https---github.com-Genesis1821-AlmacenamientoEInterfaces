const express = require("express");
const { listarEquipo, detallesEquipoId } = require("../controllers/equipo.controllers");
const route = express.Router()


route.get("listar-equipos", listarEquipo);
route.get("detalles-equipo/:id", detallesEquipoId);
route.post("agregar-equipo", "");
route.put("actualizar-equipo/:id","")
route.delete("eliminar-equipo/:id",)

module.exports = route