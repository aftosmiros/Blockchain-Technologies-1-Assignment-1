// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MySmartContract {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Function to check contract balance
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    // Function to withdraw Ether
    function withdraw() public {
        require(msg.sender == owner, "Only the owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}
