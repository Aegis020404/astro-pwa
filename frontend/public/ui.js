


// ---------------------- LOGIN ----------------------
if (document.querySelector('#loginForm'))
    document.querySelector('#loginForm').onsubmit = function (e) {
        console.log(e.target.elements[0].value)
        console.log(e.target.elements[1].value)
        fetch('http://localhost:1337/api/auth/local/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identifier: e.target.elements[0].value,
                password: e.target.elements[1].value
            })
        }).then((e) => {
            const result = e.json()
            if (e.status !== 200) {

            } else {
                btnLogin.innerHTML = 'Successed'
                setTimeout(() => {
                    btnLogin.innerHTML = 'Login'
                }, 3000)
            }
            return result
        }).then((result) => {

            if (result.jwt) document.cookie = "jwt=" + result.jwt;
        })

        return false
    }
// ---------------------- LOGIN ----------------------

// ---------------------- REGISTER ----------------------
if (document.querySelector('#RegisterForm'))
    document.querySelector('#RegisterForm').onsubmit = function (e) {
        fetch('http://localhost:1337/api/auth/local/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: e.target.elements[0].value,
                email: e.target.elements[1].value,
                password: e.target.elements[2].value
            })
        }).then((e) => {
            if (e.status !== 200) {
                console.log(e)
                buttonRegister.innerHTML = 'Email already taken'
                buttonRegister.style.background = 'red !important'
                buttonRegister.classList.add('btn-danger')
                buttonRegister.classList.remove('btn-success')
                setTimeout(() => {
                    buttonRegister.classList.remove('btn-danger')
                    buttonRegister.classList.add('btn-success')
                    buttonRegister.innerHTML = 'Register'
                }, 3000)
            } else {
                if (e.jwt) document.cookie = "jwt=" + e.jwt;
                buttonRegister.innerHTML = 'authorized'

            }
        })

        return false
    }
    // ---------------------- REGISTER ----------------------