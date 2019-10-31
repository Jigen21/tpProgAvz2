import axios from 'axios'


export const all = () => {
    return axios
    .get('estados/all', {
    })
    .then(res => {

        return res.data
    })

}