'use strict'

import { createTransactionHTMLTable } from '../Helper/helper.js';

const transactiontable = document.querySelector('#transactiontable');
const accountViewDiv = document.querySelector('.accountview-div');
const pageheading = document.querySelector('#page-heading');


export class transactionView {
    render() {
        transactiontable.innerText = "";
        accountViewDiv.innerText = "";
        pageheading.innerText = "Transaction Page";

        const htmlText = createTransactionHTMLTable('transactionpage');
        transactiontable.insertAdjacentHTML('afterbegin', htmlText);
    }
}