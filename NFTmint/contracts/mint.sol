// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DriverNFT is ERC721, Ownable {

    mapping (string => uint256) public licenseToTokenId;
    address public immutable MINT_ADDRESS;

    constructor(address _mintAddress) ERC721("DriverNFT", "DNFT") {
        MINT_ADDRESS = _mintAddress;
    }

    function mint(address to, string memory _license, uint256 _tokenId) public {
        require(msg.sender == MINT_ADDRESS, "Only mint address can mint");
        require(licenseToTokenId[_license] == 0, "Number already exists");
        _safeMint(to, _tokenId);
        licenseToTokenId[_license] = _tokenId;
    }
    function tokenOfLicense(string memory _license) public view returns (uint256) {
        return licenseToTokenId[_license];
    }
}