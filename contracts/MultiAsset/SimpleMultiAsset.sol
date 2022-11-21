// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import "@rmrk-team/evm-contracts/contracts/implementations/RMRKMultiAssetImpl.sol";

contract SimpleMultiAsset is RMRKMultiAssetImpl {
    constructor(uint256 maxSupply, uint256 pricePerMint)
        RMRKMultiAssetImpl(
            "SimpleMultiAsset",
            "SMA",
            maxSupply,
            pricePerMint,
            "ipfs://meta",
            "ipfs://tokenMeta",
            msg.sender,
            10
        )
    {}
}
