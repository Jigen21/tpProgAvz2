import axios from 'axios'

export const all = () => {
    return axios
    .get('marcas/all', {
    })
    .then(res => {

        return res.data
    })

}