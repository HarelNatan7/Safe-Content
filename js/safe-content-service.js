'use strict'

const STORAGE_KEY = 'users'

var gUsers = [
    {
        id: 'u101',
        username: 'harel',
        password: 'java',
        lastLoginTime: null,
        isAdmin: true
    },

     { id: 'u102',
    username: 'puki',
    password: 'script',
    lastLoginTime: null,
    isAdmin: false }
]


function prevent(e) {
    e.preventDefault()
}

