// SPDX-License-Identifier: MIT
pragma solidity  >= 0.4.17;

contract Inbox {
    string public message;

    function Inbox(string memory newMessge) public {
        message = newMessge;
    }
    function setString(string memory m1) public{
        message = m1;
    }

}
