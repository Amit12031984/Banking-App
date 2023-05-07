'use strict'

export let userData = {};

export const allAccountsData = [
    {
        "firstName": "Emma",
        "lastName": "Williams",
        "userName": "Emma",
        "accountNumber": 1678336952990,
        "openDate": 1678336952990,
        "customerId": 882243,
        "accountType": "Savings",
        "status": "Active",
        "ifsc": "BLUE0000042",
        "dob": "2000-09-22",
        "password": "password456",
        "phoneNumber": "9997773056",
        "transactions": [
            {
                "serialNo": 1,
                "dateTime": "2023-03-01 10:00:00",
                "description": "Initial Deposit",
                "debit": "",
                "credit": 5000,
                "balance": 5000
            },
            {
                "serialNo": 2,
                "dateTime": "2023-03-03 14:30:00",
                "description": "Grocery Shopping",
                "debit": 1000,
                "credit": "",
                "balance": 4000
            },
            {
                "serialNo": 3,
                "dateTime": "2023-03-05 12:15:00",
                "description": "Salary Credit",
                "debit": "",
                "credit": 10000,
                "balance": 14000
            }
        ]
    },
    {
        "firstName": "Amit",
        "lastName": "Bhadula",
        "userName": "Amit",
        "accountNumber": 1678336952991,
        "openDate": 1678336952990,
        "customerId": 882244,
        "accountType": "Savings",
        "status": "Active",
        "ifsc": "BLUE0000042",
        "dob": "2000-09-22",
        "password": "password456",
        "phoneNumber": "9997773056",
        "transactions": [
            {
                "serialNo": 1,
                "dateTime": "2023-03-01 10:00:00",
                "description": "Initial Deposit",
                "debit": "",
                "credit": 5000,
                "balance": 5000
            },
            {
                "serialNo": 2,
                "dateTime": "2023-03-03 14:30:00",
                "description": "Grocery Shopping",
                "debit": 1000,
                "credit": "",
                "balance": 4000
            },
            {
                "serialNo": 3,
                "dateTime": "2023-03-05 12:15:00",
                "description": "Salary Credit",
                "debit": "",
                "credit": 10000,
                "balance": 14000
            },
            {
                "serialNo": 4,
                "dateTime": "2023-03-03 14:30:00",
                "description": "Electonics Shopping",
                "debit": 5000,
                "credit": "",
                "balance": 9000
            }
        ]
    }
];

export const getUser = (username, password) => {
    allAccountsData.forEach((user) => {
        if (username === user.userName && password === user.password) {
            userData = user;
        }
    });
    return userData;
}

export const getUserDataByUsername = (username) => {
    allAccountsData.forEach((user) => {
        if (username === user.userName) {
            userData = user;
        }
    });
}