import axios from 'axios'


export const all = () => {
    return axios
    .get('tarjetas/all', {
    })
    .then(res => {

        return res.data
    })

}