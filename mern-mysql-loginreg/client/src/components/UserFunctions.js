import axios from 'axios'

export const register = newUser => {
    return axios
    .post('users/register', {
        nombre: newUser.nombre,
        apellido: newUser.apellido,
        email: newUser.email,
        clave: newUser.clave
    })
    .then(res => {
        //console.log("Registered")
        return res.data;
    })
    .catch(err => {
        return err.data;
    })
}

export const login = user => {
    return axios
    .post('users/login', {
        email:user.email,
        clave: user.clave
    })
    .then(res => {
        //localStorage.setItem('usertoken' , res.data)
        //localStorage.setItem('Usuario' , res.data)
        localStorage.setItem('Usuario' , JSON.stringify(res.data))
        return res.data
    })
    .catch(err => {
        //console.log(err)
        return err.data
    })
}

export const all = () => {
    return axios
    .get('users/all', {
    })
    .then(res => {

        return res.data
    })

}