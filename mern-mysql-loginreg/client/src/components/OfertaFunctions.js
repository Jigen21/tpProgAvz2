import axios from 'axios'


export const all = () => {
    return axios
    .get('ofertas/all', {
    })
    .then(res => {

        return res.data
    })

}