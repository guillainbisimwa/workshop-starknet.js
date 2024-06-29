# 

python3.11 -m venv ~/cairo_venv

source ~/cairo_venv/bin/activate
pip3 install ecdsa fastecdsa sympy
sudo apt install -y libgmp3-dev

pip3 install cairo-lang
pip3 install contextvars

Deploy the Smart Contract:
You need to deploy the smart contract to the StarkNet testnet or mainnet using StarkNet CLI or other tools.


starknet-compile global.cairo --output global_compiled.json --abi global_abi.json
starknet deploy --contract global_compiled.json

cairo-compile global.cairo --output global_compiled.json --abi global_abi.json


#

scarb init

scarb build
<!-- 
starkli declare target/dev/<NAME>.json --network=sepolia --compiler-version=2.1.0

starkli declare --account 0x01b59c846797b12b359c3F0338c71fED14C9CdA218de3E2623ec503490FD95eB --network=sepolia --compiler-version=2.6.2 target/dev/smart_global.starknet_artifacts.json 


Usage: starkli declare --account 0x01b59c846797b12b359c3F0338c71fED14C9CdA218de3E2623ec503490FD95eB --rpc "https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/_ZTHHL8iJ0QQRO5URgXujnJH19TLIP3t" target/dev/smart_global.starknet_artifacts.json



    starkli account fetch 0x01b59c846797b12b359c3F0338c71fED14C9CdA218de3E2623ec503490FD95eB --output ~/.starkli-wallets/deployer/my_account_1.json
 -->

## Creating a Signer
    mkdir ~/.starkli-wallets/deployer -p

        starkli signer keystore from-key ~/.starkli-wallets/deployer/my_keystore_1.json

       Private key:  0x0397980bf3f0ea1672a8a3a42fb01bd94457bc8b65fbe85515edf3bd27ad11b3

        Account Guy1: 0x01b59c846797b12b359c3F0338c71fED14C9CdA218de3E2623ec503490FD95eB

        Public key: 0x03826e1865ee97b931af0e5554cb659ff09e3e19bc0298898f61453d682062a6

## Choosing an RPC Provider
    export STARKNET_RPC="https://starknet-goerli.g.alchemy.com/v2/<API_KEY>"
    export STARKNET_RPC="https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/_ZTHHL8iJ0QQRO5URgXujnJH19TLIP3t"

## Declaring Your Contract
 <!-- Run this command to declare your contract using the default Starknet Sequencer’s Gateway:

 starkli declare --account acc.json --network=sepolia --compiler-version=2.6.2 --keystore key.json target/dev/smart_global_HelloStarknet.contract_class.json 

WARNING: the --rpc option and the STARKNET_RPC environment variable take precedence over the --network option and the STARKNET_NETWORK environment variable. See https://book.starkli.rs/providers for more details.
Enter keystore password:

Declaring Cairo 1 class: 0x05e5afa7bebd442299ae68bae237ae1032f414472ff1f54b0c12a89e5475c4a6
Compiling Sierra class to CASM with compiler version 2.6.2...
CASM class hash: 0x023faf8f195a6a9ec59ef14cb76207558575df6add15f91044e2900d8b3e0ea3
Contract declaration transaction: 0x03245b29cae71c4e6f12b5cbdb52c034a80979c937f6332990424a078cb564c0
Class hash declared:
0x05e5afa7bebd442299ae68bae237ae1032f414472ff1f54b0c12a89e5475c4a6
 -->


## Setting up Environment Variables
<!-- To simplify Starkli commands, you can set environment variables. Two key variables are crucial: one for the Signer’s keystore file location and another for the Account Descriptor file.

    export STARKNET_ACCOUNT=~/.starkli-wallets/deployer/my_account_1.json
    export STARKNET_KEYSTORE=~/.starkli-wallets/deployer/my_keystore_1.json
Setting these variables makes running Starkli commands easier and more efficient.

        

76901

starkli declare --account acc.json --network=sepolia --compiler-version=2.6.2 --keystore key.json target/dev/smart_global_HelloStarknet.contract_class.json 

https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/_ZTHHL8iJ0QQRO5URgXujnJH19TLIP3t

export STARKNET_RPC="https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/N2CFF8nXco1J10aEfYs9sd2YMeKNNvdQ"



starkli deploy 0x05e5afa7bebd442299ae68bae237ae1032f414472ff1f54b0c12a89e5475c4a6  --account acc.json  --network=sepolia --keystore key.json

Deploying class 0x05e5afa7bebd442299ae68bae237ae1032f414472ff1f54b0c12a89e5475c4a6 with salt 0x03449d8f326d72dd5490fd90d7958f5df047bed984acc209b585157599f53dc8...
The contract will be deployed at address 0x01f20430044b95fb355d9d2a744c0dfad938774ae9c06512064f16c0ea9b932e
Contract deployment transaction: 0x06d2f65b4db01d3c41573ee8b565998a5c4ebc3f5851a7537debe6b76324902f
Contract deployed:
0x01f20430044b95fb355d9d2a744c0dfad938774ae9c06512064f16c0ea9b932e



class : 0x045947f0df497619825b410c4c95a0f3a01d337a3df5aa4c999ed07237d27081

starkli call 0x01f20430044b95fb355d9d2a744c0dfad938774ae9c06512064f16c0ea9b932e get_balance --network=sepolia -->



starkli declare --account acc.json --network=sepolia --compiler-version=2.6.2 --keystore key.json target/dev/src.sierra.json 


starkli call  0x056231f2130bf84464176441826bf8f6f480afeaee01c48792d7e47b63cc22a0  get_balance --network=sepolia

starkli invoke 0x056231f2130bf84464176441826bf8f6f480afeaee01c48792d7e47b63cc22a0 save_maize 1 2 3 --account acc.json --keystore key.json --network=sepolia

starkli invoke 0x056231f2130bf84464176441826bf8f6f480afeaee01c48792d7e47b63cc22a0 buy_maize 0x0061846dFea34312c274Ee9b06887e1ae9A9401D0A83D2ECa477B2EdD5D6b614 0x01b59c846797b12b359c3F0338c71fED14C9CdA218de3E2623ec503490FD95eB 0.03 37 --account acc.json --keystore key.json --network=sepolia





starkli deploy 0x071d5e0eb5c99726b72bf8ea9a08622a1ec9291cd240de32a54107d447d45695 0x071d5e0eb5c99726b72bf8ea9a08622a1ec9291cd240de32a54107d447d45695  --account acc.json  --network=sepolia --keystore key.json