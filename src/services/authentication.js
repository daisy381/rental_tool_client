export const authenticationService = { signIn };


function signIn (email,password) {

    return fetch(
        `http://localhost:5000/auth/login`,
        {
            method:'POST',
            headers:{
                'content-type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
            },
            body: JSON.stringify({email, password}),
        }
    ).then((response) => response.json());
}