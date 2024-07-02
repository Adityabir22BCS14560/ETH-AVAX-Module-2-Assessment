// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleCalculator{
    uint256 public value1;
    uint256 public value2;
    uint256 public total;

    event ValueUpdated(uint256 indexed value);

    function setValue1(uint256 _newValue) public {
        value1 = _newValue;
        emit ValueUpdated(_newValue);
    }

    function setValue2(uint256 _newValue) public {
        value2 = _newValue;
        emit ValueUpdated(_newValue);
    }

    function Addition() public {
        total = value1+value2;
    }

    function Subtraction() public {
        total = value1-value2;
    }

    function Muliplication() public {
        total = value1*value2;
    }

    function Division() public {
        total = value1/value2;
    }

    function getValue1() public view returns (uint256) {
        return value1;
    }

    function getValue2() public view returns (uint256) {
        return value2;
    }
}