import axios from 'axios'


export const all = () => {
    return axios
    .get('bancos/all', {
    })
    .then(res => {

        return res.data
    })

}