import axios from 'axios'


export const allCategorias = () => {
    return axios
    .get('categorias/all', {
    })
    .then(res => {

        return res.data
    })

}