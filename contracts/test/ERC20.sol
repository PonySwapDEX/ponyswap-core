pragma solidity =0.5.16;

import '../PonyERC20.sol';

contract ERC20 is PonyERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}