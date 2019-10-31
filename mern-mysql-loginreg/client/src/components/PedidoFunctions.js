import axios from 'axios'

export const guardarPedido = newPedido => {
    return axios
    .post('pedidos/guardarPedido', {
        fecha: newPedido.fecha,
        importeTotal: newPedido.importeTotal,
        direccion: newPedido.direccion,
        envio:newPedido.envio,
        codigoPostal:newPedido.codigoPostal,
        idLocalidad:newPedido.idLocalidad,
        idCliente:newPedido.idCliente,
        idEstado:newPedido.idEstado,
        idDescuento:newPedido.idDescuento,
        importeDescuento:newPedido.importeDescuento
    })
    .then(res => {
        //console.log("Registered")
        debugger;
        console.log("bien")
        return res.data;
    })
    .catch(err => {
        debugger;
        console.log(err.response)
        return err.data;
    })
}


export const pedidosCliente = idCliente => {
    return axios
    .post('pedidos/pedidosCliente', {
        idCliente:idCliente
    })
    .then(res => {

        return res.data
    })

}


export const all = () => {
    return axios
    .get('pedidos/all', {
    })
    .then(res => {

        return res.data
    })

}
