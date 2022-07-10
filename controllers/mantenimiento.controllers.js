const { mantenimientoFicticio } = require("../batabaseFicticia/mantenimiento")
const {equipoFicticio} = require("./mantenimientoDataFicticia")

const listarMantenimiento = (req, res) =>{
    return res.status(200).json({
        exito:true,
        data: mantenimientoFicticio
    })
}


const listarTipoMantenimiento = (req, res) =>{
    const tipo = req.params.tipo
    const data = mantenimientoFicticio.filter((mantenimiento)=>mantenimiento.tipoMantenimiento === tipo )
    return res.status(200).json({
        exito:true,
        data
    })
}


const agregarMantenimiento = (req, res) =>{
    const newMantenimiento = req.body
    mantenimientoFicticio.push(newMantenimiento)
    const equipos = equipoFicticio.map((equipo)=> equipo.serial === newMantenimiento.id_equipo ? {...equipo, ultima_fecha_mantenimiento: newMantenimiento.fecha_final_mantenimiento} : equipo)
    return res.status(200).json({
        exito:true,
        mantenimientoFicticio,
        equipos
        
    })
}

const borrarMantenimiento = (req, res) =>{
    const idMantenimiento = req.params.id //serial del equipo solicitado
    if(!idMantenimiento) return res.status(401).json({
        exito: false,
        data: null,
        msg:"id invalido"
    }) 
    const data = mantenimientoFicticio.filter((manenimiento)=> manenimiento.id_mantenimiento !== idMantenimiento)
    return res.status(200).json({
        exito:true,
        data 
    })
}


const actualizarMantenimiento = (req, res) =>{
    const idMantenimiento = req.params.id //serial del equipo solicitad
    const newData = req.body

    if(!idMantenimiento) return res.status(401).json({
        exito: false,
        data: null,
        msg:"id invalido"
    }) 

    const data = mantenimientoFicticio.map((manenimiento)=> manenimiento.id_mantenimiento === idMantenimiento ? newData : manenimiento)
    return res.status(200).json({
        exito:true,
        data
    })
}


module.exports = {
    listarMantenimiento,
    listarTipoMantenimiento,
    agregarMantenimiento,
    borrarMantenimiento,
    actualizarMantenimiento
}