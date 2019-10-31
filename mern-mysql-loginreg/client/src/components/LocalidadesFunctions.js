import axios from 'axios'

export const all = () => {
    return axios
    .get('localidades/all', {
    })
    .then(res => {

        return res.data
    })

}