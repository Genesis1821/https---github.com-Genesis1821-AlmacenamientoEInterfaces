const { equipoFicticio } = require("./equipoDataFicticia")



const listarEquipo = (req, res) =>{
    return res.status(200).json({
        exito:true,
        data: equipoFicticio
    })
}

const detallesEquipoId = (req, res) =>{
    const idEquipo = req.params.id //serial del equipo solicitado
    if(!idEquipo) return res.status(401).json({
        exito: false,
        data: null,
        msg:"id invalido"
    }) 

    const detallesEquipo = equipoFicticio.find((equipo)=> equipo.serial === idEquipo)
    if (detallesEquipo){
         res.status(200).json({
            exito:true,
            data: detallesEquipo
    })
    }
    else{
        res.status(400).json({
            exito: false,
            data: null,
            msg:"equipo no encontrado"
    })
    }
}


const agregarEquipo = (req, res) =>{
    const equipoNuevo = req.body
    equipoFicticio.push(equipoNuevo)
    return res.status(200).json({
        exito:true,
        data: equipoFicticio, 
        equipoNuevo
    })
}

const borrarEquipo = (req, res) =>{
    const idEquipo = req.params.id //serial del equipo solicitado
    if(!idEquipo) return res.status(401).json({
        exito: false,
        data: null,
        msg:"id invalido"
    }) 
    const data = equipoFicticio.filter((equipo)=> equipo.serial !== idEquipo)
    return res.status(200).json({
        exito:true,
        data 
    })
}


const actualizarEquipo = (req, res) =>{
    const idEquipo = req.params.id //serial del equipo solicitad
    const newData = req.body

    if(!idEquipo) return res.status(401).json({
        exito: false,
        data: null,
        msg:"id invalido"
    }) 

    equipoFicticio.map((equipo)=> equipo.serial === idEquipo ? newData : equipo)
    return res.status(200).json({
        exito:true,
        data: equipoFicticio, 
        newData
    })
}





module.exports = {
    listarEquipo,
    detallesEquipoId,
    agregarEquipo,
    borrarEquipo,
    actualizarEquipo
}