// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.6.12;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MintableNFT is ERC721 {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    uint256 public maxSupply = 1000;

    mapping(address => uint8) public hasMinted;

    constructor() public ERC721("Mintable NFT", "MTNFT") {}

    function createToken(address recipient, string memory tokenURI) public returns (uint256) {
        require(hasMinted[recipient] != 1, "Recipient Exists!");

        hasMinted[recipient] = 1;
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        require(newItemId <= maxSupply, "Max supply is exceeding!");

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }
}