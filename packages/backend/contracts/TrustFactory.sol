//SPDX-License-Identifier: MIT
// Contract Address: 0x8Af2FB1384DD075898341980Fc3Ba3e1b7bF9181

pragma solidity ^0.8.14;

import "./Trust.sol";

contract TrustFactory {
    // factory contract onwer
    address private immutable trustFactoryOwner;

    // struct to store all the data of trust and trust factory contract
    struct trustFactoryStruct {
        uint256 trustIndex;
        uint256 percentage;
        uint256 gigCount;
        address trustContractAddress;
        address owner;
        address platformAddress;
    }

    // searching the struct data of trust and trust factory using owner/junior address
    mapping(address => trustFactoryStruct) public allTrustContracts;

    // owner address, onwer address will be used to search the user profile.
    mapping(address => address) public searchByAddress;

    // number of TrustContracts created
    uint256 public numOfTrustContracts;

    constructor(address _trustFactoryOwner) {
        trustFactoryOwner = _trustFactoryOwner;
    }

    function createTrustContract(uint256 _percentage, uint256 _gigCount)
        public
    {
        // Create a new trust contract
        Trust trust = new Trust(
            _percentage,
            msg.sender,
            _gigCount,
            address(this)
        );

        // Increment the number of Trust contracts
        numOfTrustContracts++;

        // Add the new trust contract to the mapping
        allTrustContracts[msg.sender] = (
            trustFactoryStruct(
                numOfTrustContracts,
                _percentage,
                _gigCount,
                address(trust),
                msg.sender,
                address(this)
            )
        );

        // search the profile by using owner address
        searchByAddress[msg.sender] = address(trust);
    }

    // get the balance of the contract
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // get the address of the contract
    function getAddressOfContract() public view returns (address) {
        return address(this);
    }

    // get the address of trustFactory contract owner
    function getAddressOfTrustFactoryOnwer() public view returns (address) {
        return trustFactoryOwner;
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

    // function to withdraw the fund from contract factory
    function withdraw(uint256 amount) external payable {
        if (msg.sender != trustFactoryOwner) {
            revert ONLY_ONWER_CAN_CALL_FUNCTION();
        }
        // sending money to contract owner
        (bool success, ) = trustFactoryOwner.call{value: amount}("");
        if (!success) {
            revert TRANSFER_FAILED();
        }
    }
}
