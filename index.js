const Web3 = require('web3');

const web3 = new Web3('http://127.0.0.1:7545');

const contractABI = [
    [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "getBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ]
];

const contractAddress = "0xb16C5453ca664fc079F980D33CBBf4380c33F417"; // Адрес контракта

const contract = new web3.eth.Contract(contractABI, contractAddress);

(async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Аккаунты:", accounts);

    const balance = await contract.methods.getBalance().call();
    console.log("Баланс контракта:", balance);

    await contract.methods.withdraw().send({ from: accounts[0] });
    console.log("Средства успешно выведены");
})();
