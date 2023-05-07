'use strict'

import { userData } from './model.js';
import { getUserDataByUsername } from './model.js';
import { transactionView } from './transactionView.js';
import {accountView} from './accountView.js';

const username = document.querySelector('#username');
const currentdatetime = document.querySelector('#currentdatetime');

username.innerText = localStorage.getItem('username');

setInterval(() => {
    let date = new Date().toJSON();
    let formatDate = `${date.slice(0,10)} ${date.slice(12,19)}`;
    currentdatetime.innerText = formatDate;
}, 1000);

const loadPage = () => {
    getUserDataByUsername(localStorage.getItem('username'));
    const hashId = window.location.hash.slice(1);
    if (hashId == "transactionpage") {
        const tv = new transactionView();
        tv.render();
    }
    else if (hashId == "accountpage") {
        const av = new accountView();
        av.render();
    }
}

window.addEventListener('hashchange', loadPage);


