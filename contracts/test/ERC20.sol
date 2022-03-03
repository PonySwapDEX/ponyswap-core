pragma solidity ^0.8.0;

import '../PonyERC20.sol';

contract ERC20 is PonyERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
