export const baseURl = 'http://127.0.0.1:8000';

export const getUser = () => { 
    return fetch(`http://127.0.0.1:8000/profile`, {
        method: 'GET',
        credentials: 'include',
        })
}

export const signupAPI = (body: FormData) => {
    return fetch(`${baseURl}/signup`, {
        method: 'POST',
        credentials: 'include',
        body
    })
}
