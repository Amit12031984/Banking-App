'use strict'
import { getUser } from './MVC/model.js';

const username = document.querySelector('#username');
const password = document.querySelector('#password');
const login_btn = document.querySelector('#login_btn');
const loginError = document.querySelector('.login-error');


login_btn.addEventListener('click', (e) => {
    e.preventDefault();
    validateUser();
});

const validateUser = () => {
    if (username.value === "" || password.value === "") {
        loginError.innerText = "Please enter user name and password";
        return;
    }
    const userData = getUser(username.value, password.value);
    console.log(userData);
    if (userData.userName != null && userData.userName != undefined) {
        localStorage.setItem('username', userData.userName);
        window.location.href = "./navigation.html";
        console.log('logged In');
    }
    else {
        loginError.innerText = "Invalid User";
    }
}