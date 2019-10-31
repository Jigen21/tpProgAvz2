import axios from 'axios'

export const all = () => {
    return axios
    .get('proveedores/all', {
    })
    .then(res => {

        return res.data
    })

}

export const agregarProveedor = nuevoProveedor => {
    return axios
    .post('proveedores/agregarProveedor', {
        nombre: nuevoProveedor.nombre,
        telefono: nuevoProveedor.telefono,
        email:nuevoProveedor.email,
        
    })
    .then(res => {
        console.log("Agregado")
    })
}


export const borrar = id => {
    debugger;
    return axios
    .post('proveedores/borrar', {
        id:id
    })
    .then(res => {

        return res.data
    })

}