'use strict'

import { userData } from './model.js';
import { createTransactionHTMLTable } from '../Helper/helper.js';

const accountViewDiv = document.querySelector('.accountview-div');
const transactiontable = document.querySelector('#transactiontable');
const pageheading = document.querySelector('#page-heading');

export class accountView {
    render() {
        transactiontable.innerText = "";
        accountViewDiv.innerText = "";
        pageheading.innerText = "Account Page";

        let htmlData = `
        <div>First Name : ${userData.firstName}</div>
        <div>Last Name : ${userData.lastName}</div>
        <div>User Name : ${userData.userName}</div>
        <div>Account Number : ${userData.accountNumber}</div>
        <div>Open Date : ${userData.openDate}</div>
        <div>Customer Id : ${userData.customerId}</div>
        <div>Account Type : ${userData.accountType}</div>
        <div>Status : ${userData.status}</div>
        <div>IFSC : ${userData.ifsc}</div>
        <div>DOB : ${userData.dob}</div>
        <div>Phone Number : ${userData.phoneNumber}</div>
        `;

        accountViewDiv.insertAdjacentHTML("afterbegin",htmlData);
        const htmlTransactionTable = createTransactionHTMLTable('accountpage');
        transactiontable.insertAdjacentHTML('afterbegin', htmlTransactionTable);
    }
}