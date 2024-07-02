# ETH-AVAX-Module-2-Assessment
This assessment is for showing smart contract management with 2-3 functions. Then show the values of those functions in frontend of the application.

## Solidity Code Explanation
### SPDX License Identifier
#### // SPDX-License-Identifier: MIT
* This specifies the license under which the code is released. In this case, it's the MIT license.
  
### Pragma Directive
#### pragma solidity ^0.8.0;
* This specifies the version of the Solidity compiler to be used. Here, the code is compatible with any version of Solidity 0.8.0 or later.
  
### Contract Definition
#### contract SimpleCalculator 
* This starts the definition of the SimpleCalculator contract.

### State Variables
    uint256 public value1;
    uint256 public value2;
    uint256 public total;
* value1, value2, and total are state variables of type uint256 (unsigned 256-bit integer). They are marked as public, meaning getter functions are automatically created for them.
  
### Event Declaration
    event ValueUpdated(uint256 indexed value);
* This declares an event called ValueUpdated which logs when a value is updated. The indexed keyword allows filtering logs by this parameter.
  
### Functions to Set Values
    function setValue1(uint256 _newValue) public {
        value1 = _newValue;
        emit ValueUpdated(_newValue);
    }

    function setValue2(uint256 _newValue) public {
        value2 = _newValue;
        emit ValueUpdated(_newValue);
    }
* setValue1 and setValue2 are functions that allow updating value1 and value2 respectively. Each function emits the ValueUpdated event when a new value is set.
  
### Arithmetic Functions
    function Addition() public {
        total = value1 + value2;
    }

    function Subtraction() public {
        total = value1 - value2;
    }

    function Muliplication() public {
        total = value1 * value2;
    }

    function Division() public {
        total = value1 / value2;
    }
    
* These functions perform basic arithmetic operations on value1 and value2, storing the result in the total variable:
1. Addition: Adds value1 and value2.
2. Subtraction: Subtracts value2 from value1.
3. Multiplication: Multiplies value1 by value2.
4. Division: Divides value1 by value2 (note that this will throw an error if value2 is 0).
   
### Getter Functions
    function getValue1() public view returns (uint256) {
        return value1;
    }

    function getValue2() public view returns (uint256) {
        return value2;
    }
}
* These functions return the current values of value1 and value2. They are marked as view because they do not modify the state.

### How to run
Get the starter template for index.js: [**starter-template**](https://github.com/MetacrafterChris/SCM-Starter/tree/main)

Get the template here: [TEMPLATE HERE](https://github.com/MetacrafterChris/SCM-Starter)
After cloning the github, you will want to do the following to get the code running on your computer.

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.

After this, the project will be running on your localhost. 
Typically at http://localhost:3000/
