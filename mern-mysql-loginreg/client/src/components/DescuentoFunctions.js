import axios from 'axios'


export const all = () => {
    return axios
    .get('descuentos/all', {
    })
    .then(res => {

        return res.data
    })

}


export const agregarDescuento = nuevoDescuento => {
    return axios
    .post('descuentos/agregarDescuento', {
        codigoDescuento: nuevoDescuento.codigoDescuento,
        porcentajeDescuento: nuevoDescuento.porcentajeDescuento,
        fechaInicio:nuevoDescuento.fechaInicio,
        fechaFin:nuevoDescuento.fechaFin
        
    })
    .then(res => {
        console.log("Agregado")
    })
}


export const borrar = id => {
    debugger;
    return axios
    .post('descuentos/borrar', {
        id:id
    })
    .then(res => {

        return res.data
    })

}



