import { auth } from '../firebase';

export const register = (user) => {
    return (dispatch) => {
        auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(user => {
            console.log(user)
        })
        .catch(error => {
            console.log('get some error:', error)
        })
    }
}