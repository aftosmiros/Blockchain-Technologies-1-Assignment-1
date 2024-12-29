# Blockchain-Technologies-1-Assignment-1
Assignment 1 of the Blockchain Technologies 1 discipline at Astana IT University

## Overview
This project demonstrates the creation of a basic Ethereum smart contract using Solidity. The smart contract allows receiving and withdrawing Ether and provides functionality to check the contract's balance. It integrates with a web3.js environment and can be deployed on both Ganache and public testnets.

---

## Features
1. **Receive Ether:** The contract can accept Ether payments.
2. **Withdraw Ether:** Only the owner can withdraw all Ether from the contract.
3. **Check Balance:** Provides a method to view the current balance of the contract.

---

## Installation and Setup

### Prerequisites
- **Node.js** and **npm** installed on your system.
- **Ganache** installed and running for local blockchain testing.
- **Metamask** browser extension.

### Steps

#### 1. Clone the repository
```bash
git clone <repository-url>
cd <repository-folder>
```

#### 2. Install dependencies
```bash
npm install
```

#### 3. Start Ganache
Ensure Ganache is running on `http://127.0.0.1:7545`.

#### 4. Deploy the contract
1. Open **Remix IDE** and import the `contracts/MySmartContract.sol` file.
2. Compile the contract using Remix.
3. Deploy it using **Injected Web3** and the Ganache network.
4. Copy the contract address and ABI for the next step.

#### 5. Configure `index.js`
Update the `index.js` file with:
- Your contract's ABI.
- Your contract's deployed address.

#### 6. Run the script
```bash
node index.js
```

---

## Testing with Metamask
1. Add Ganache to Metamask as a custom RPC network:
   - RPC URL: `http://127.0.0.1:7545`
   - Chain ID: `1337`

2. Import one of Ganache's private keys into Metamask for testing.

---

## Deployment to Public Testnet
1. Update the RPC URL in `index.js` to match your testnet (e.g., Ropsten, Goerli).
2. Use a testnet faucet to obtain test Ether.
3. Deploy the contract using Remix or a script.

---

## Repository Structure
```
project-directory/
├── contracts/
│   ├── MySmartContract.sol
├── index.js
├── README.md
├── package.json
├── node_modules/
```

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Screenshots
(Add screenshots or GIFs here showing contract deployment, Ganache, and web3.js interactions.)
