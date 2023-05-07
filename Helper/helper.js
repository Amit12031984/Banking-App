'use strict'

import { userData } from '../MVC/model.js';

export const createTransactionHTMLTable = (page)=>
{
    if(page==='transactionpage')
    {
        let htmlHeading = `<tr>
        <th>serialNo</th>
        <th>Credit</th>
        <th>Debit</th>
        <th>Balance</th></tr>`;

        let htmlRow = ``;

        userData.transactions.forEach((transaction) => {
            htmlRow = htmlRow + `<tr>
            <td>${transaction?.serialNo}</td>
            <td>${transaction?.credit}</td>
            <td>${transaction?.debit}</td>
            <td>${transaction?.balance}</td>
        </tr>`
        })

        let htmlText = htmlHeading + htmlRow;
        return htmlText;
    }
    else if(page==='accountpage')
    {
        let htmlHeading = `<tr>
        <th>serialNo</th>
        <th>DateTime</th>
        <th>Description</th>
        <th>Credit</th>
        <th>Debit</th>
        <th>Balance</th></tr>`;

        let htmlRow = ``;

        userData.transactions.forEach((transaction) => {
            htmlRow = htmlRow + `<tr>
            <td>${transaction?.serialNo}</td>
            <td>${transaction?.dateTime}</td>
            <td>${transaction?.description}</td>
            <td>${transaction?.credit}</td>
            <td>${transaction?.debit}</td>
            <td>${transaction?.balance}</td>
        </tr>`
        })

        let htmlText = htmlHeading + htmlRow;
        return htmlText;
    }
}