'use strict'

function checkSuccessfulLogin() {
    const elUserName = document.querySelector('input[name="username"]')
    const username = elUserName.value
    const elPassword = document.querySelector('input[name="password"]')
    const password = elPassword.value
    saveToStorage(STORAGE_KEY, gUsers)

    if (username === 'harel' && password === 'java') renderSecret(username)
    if (username === 'puki' && password === 'script') renderSecret(username)
    else return alert('Wrong Details! Try Again')
}



function renderSecret(user) {
    const elLogin = document.querySelector('.login-container')
    elLogin.style.display = 'none'

    console.log('gUsers:', gUsers)
    var strHTML =
        `<h1>Welcome Back ${user}! Here's The Secret:</h1>
        <img src="img/the-secret.jpg" alt="">
        <div class="btn-container">
        <button class="logout-btn" onclick="logout()">Logout</button>
        </div>`
    const currUser = gUsers.find(logUser => logUser.username === user)
    if (currUser.isAdmin) strHTML =
        `<h1>Welcome Back ${user}! Here's The Secret:</h1>
        <img src="img/the-secret.jpg" alt="">
        <div class="btn-container">
        <button class="admin-btn" onclick="admin()">-Admin-</button>
        <button class="logout-btn" onclick="logout()">Logout</button>
        </div>`

    const elSecret = document.querySelector('.secret-container')
    elSecret.innerHTML = strHTML
    elSecret.style.display = 'flex'
}

function logout() {
    const elLogin = document.querySelector('.login-container')
    elLogin.style.display = 'flex'
    const elSecret = document.querySelector('.secret-container')
    elSecret.style.display = 'none'
    saveToStorage(STORAGE_KEY, gUsers)
}