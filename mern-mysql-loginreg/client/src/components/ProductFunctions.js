import axios from 'axios'

export const all = () => {
    return axios
    .get('products/all', {
    })
    .then(res => {

        return res.data
    })

}


export const register = newProduct => {
    return axios
    .post('products/register', {
        nombre: newProduct.nombre,
        descripcion: newProduct.descripcion,
        precio:newProduct.precio,
        stock:newProduct.stock,
        num_reposicion:newProduct.num_reposicion,
        imagen:newProduct.imagen,
        id_categoria:newProduct.id_categoria,
        id_marca:newProduct.id_marca,
        fecha_ingreso:newProduct.fecha_ingreso
    })
    .then(res => {
        console.log("Agregado")
    })
}


export const borrar = id => {
    debugger;
    return axios
    .post('products/borrar', {
        id:id
    })
    .then(res => {

        return res.data
    })

}
