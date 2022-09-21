//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Trust.sol";

contract TrustFactory{

     struct trustFactoryStruct {
        uint256 trustIndex;
        uint256 percentage;
        uint256 profileID;
        uint256 gigCount;
        address trustContractAddress;
        address owner;
        address platformAddress;
    }


    mapping(uint256 => trustFactoryStruct) public allTrustContracts;

    // profile ID, profile ID will be given to junior when he creates the ID on our platform.
    mapping(uint256 => address) public searchProfileID;


    // number of TrustContracts created
    uint256 public numOfTrustContracts;

    function createTrustContract(uint256 _profileID, uint256 _percentage, uint256 _gigCount) public {
        // Create a new trust contract
        Trust trust = new Trust(_profileID, _percentage, msg.sender, _gigCount, address(this));

        // Add the new trust contract to the mapping
        allTrustContracts[numOfTrustContracts] = (
            trustFactoryStruct(
                numOfTrustContracts,
                _percentage,
                _profileID,
                _gigCount,
                address(trust),
                msg.sender,
                address(this)
            )
        );

        searchProfileID[_profileID] = address(trust);

        // Increment the number of Trust contracts
        numOfTrustContracts++;
    }

     // get the balance 
    function getContractBalance() public view returns(uint256){
        return address(this).balance;
    }

    function getAddressOfContract() public view returns(address){
        return address(this);
    }


    // Function to receive Ether. msg.data must be empty
      receive() external payable {}

    // Fallback function is called when msg.data is not empty
      fallback() external payable {}


}

