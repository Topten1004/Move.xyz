---
title: 'Smart Contracts'
---

:::info
While we have developed within the Tribute DAO Framework, and deployed on Rinkeby and Mainnet, we are not yet active within this framework for a number of reasons including waiting for the conclusion of the current Tribute-contracts security audit.
:::

Below you will find each of the contract addresses under their respective network. The contracts were also verified on Etherscan. A log of the deployment and the verification is also provided.

### Rinkeby

The following DAO contract addresses are provided for development and test interaction purposes. Active development is currently underway to widen the types of token voting and staking economics we would like to support. Deployment and verification log.

#### Deployment output

```
Compiling 148 files with 0.8.4
Compilation finished successfully

 ·--------------------------------|-------------·
 |  Contract Name                 ·  Size (KB)  │
 ·································|··············
 |  Address                       ·      0.086  │
 ·································|··············
 |  AddressUpgradeable            ·      0.086  │
 ·································|··············
 |  Arrays                        ·      0.086  │
 ·································|··············
 |  BancorFormula                 ·      3.858  │
 ·································|··············
 |  BankAdapterContract           ·      2.948  │
 ·································|··············
 |  BankExtension                 ·     12.719  │
 ·································|··············
 |  BankFactory                   ·      1.630  │
 ·································|··············
 |  BatchVotingContract           ·     11.841  │
 ·································|··············
 |  BondingCurve                  ·     24.048  │
 ·································|··············
 |  BondingCurveFactory           ·      1.466  │
 ·································|··············
 |  BondingCurveToken             ·      1.449  │
 ·································|··············
 |  BondingCurveVault             ·      3.207  │
 ·································|··············
 |  CloneFactory                  ·      0.063  │
 ·································|··············
 |  ConfigurationContract         ·      5.548  │
 ·································|··············
 |  Counters                      ·      0.086  │
 ·································|··············
 |  CouponOnboardingContract      ·      7.588  │
 ·································|··············
 |  DaoArtifacts                  ·      2.397  │
 ·································|··············
 |  DaoFactory                    ·     17.329  │
 ·································|··············
 |  DaoHelper                     ·      0.086  │
 ·································|··············
 |  DaoRegistry                   ·     23.162  │
 ·································|··············
 |  DaoRegistryAdapterContract    ·      2.567  │
 ·································|··············
 |  DistributeContract            ·     10.293  │
 ·································|··············
 |  ECDSA                         ·      0.086  │
 ·································|··············
 |  Endowment                     ·      9.816  │
 ·································|··············
 |  EnumerableSet                 ·      0.086  │
 ·································|··············
 |  ERC1155                       ·      5.505  │
 ·································|··············
 |  ERC1155AdapterContract        ·      1.944  │
 ·································|··············
 |  ERC1155TestToken              ·      9.512  │
 ·································|··············
 |  ERC1155TokenExtension         ·      7.940  │
 ·································|··············
 |  ERC1155TokenExtensionFactory  ·      1.192  │
 ·································|··············
 |  ERC1271Extension              ·      2.920  │
 ·································|··············
 |  ERC1271ExtensionFactory       ·      1.192  │
 ·································|··············
 |  ERC20                         ·      2.438  │
 ·································|··············
 |  ERC20Extension                ·     10.629  │
 ·································|··············
 |  ERC20MinterContract           ·      2.373  │
 ·································|··············
 |  ERC20TokenExtensionFactory    ·      2.227  │
 ·································|··············
 |  ERC721                        ·      5.168  │
 ·································|··············
 |  ExecutorExtension             ·      2.453  │
 ·································|··············
 |  ExecutorExtensionFactory      ·      1.192  │
 ·································|··············
 |  FairShareHelper               ·      0.086  │
 ·································|··············
 |  FinancingContract             ·      5.885  │
 ·································|··············
 |  GuildKickContract             ·     10.036  │
 ·································|··············
 |  GuildKickHelper               ·      0.086  │
 ·································|··············
 |  IntiativeAdapter              ·      7.132  │
 ·································|··············
 |  KickBadReporterAdapter        ·      6.793  │
 ·································|··············
 |  ManagingContract              ·      8.386  │
 ·································|··············
 |  MerkleProof                   ·      0.086  │
 ·································|··············
 |  Migrations                    ·      0.293  │
 ·································|··············
 |  MovementAdapter               ·      8.846  │
 ·································|··············
 |  Multicall                     ·      1.338  │
 ·································|··············
 |  NFTAdapterContract            ·      2.715  │
 ·································|··············
 |  NFTCollectionFactory          ·      1.192  │
 ·································|··············
 |  NFTExtension                  ·      6.043  │
 ·································|··············
 |  OffchainVotingContract        ·     22.309  │
 ·································|··············
 |  OffchainVotingHashContract    ·      6.418  │
 ·································|··············
 |  OLToken                       ·      2.438  │
 ·································|··············
 |  OnboardingContract            ·     12.676  │
 ·································|··············
 |  PixelNFT                      ·      6.470  │
 ·································|··············
 |  Power                         ·      0.441  │
 ·································|··············
 |  ProxTokenContract             ·      2.798  │
 ·································|··············
 |  RagequitContract              ·      4.842  │
 ·································|··············
 |  SafeERC20                     ·      0.086  │
 ·································|··············
 |  SafeMath                      ·      0.086  │
 ·································|··············
 |  ServiceProviderAdapter        ·      5.270  │
 ·································|··············
 |  SignatureChecker              ·      0.086  │
 ·································|··············
 |  SignaturesContract            ·      5.184  │
 ·································|··············
 |  SnapshotProposalContract      ·      4.250  │
 ·································|··············
 |  Strings                       ·      0.086  │
 ·································|··············
 |  SushiswapAddPoolAdapter       ·      7.654  │
 ·································|··············
 |  SushiswapSubPoolAdapter       ·      8.468  │
 ·································|··············
 |  TestFairShareCalc             ·      0.568  │
 ·································|··············
 |  TestToken1                    ·      2.438  │
 ·································|··············
 |  TestToken2                    ·      2.438  │
 ·································|··············
 |  TributeContract               ·      9.465  │
 ·································|··············
 |  TributeNFTContract            ·     10.776  │
 ·································|··············
 |  UnagiiVaultDepositAdapter     ·      8.399  │
 ·································|··············
 |  UnagiiVaultWithdrawAdapter    ·      7.252  │
 ·································|··············
 |  UniswapAddPoolAdapter         ·      7.654  │
 ·································|··············
 |  UniswapSubPoolAdapter         ·      8.468  │
 ·································|··············
 |  UniswapV3AddPoolAdapter       ·      6.686  │
 ·································|··············
 |  UniswapV3SubPoolAdapter       ·      6.331  │
 ·································|··············
 |  VetoerAdapter                 ·      5.270  │
 ·································|··············
 |  VotingContract                ·      7.080  │
 ·--------------------------------|-------------·

Deployment started at: 2022-01-09T09:29:47.980Z
Deploying tribute-contracts to rinkeby network
Creating new DaoArtifacts contract
DaoArtifacts: 0x898ce5557AB7a1811eaB70da7B1Eb4F47cEa8Bf1

      Deploying 'DaoRegistry'
      --------------------------
      > transaction hash:    0xd0279cf85794f5b481a74b8647381bdb118c8143558e9f71371bc49c1ca5a0a6
      > contract address:    0x26F53353E1FD3Bc6A6f35ac67C059F3e831e1261
      > block number:        9960527
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            5050648


      Deploying 'DaoFactory'
      --------------------------
      > transaction hash:    0x72226735c2957f3a764f9c11734ccb7fb11e1234213d10219d1aa57ffb76f8ce
      > contract address:    0xe1A3f648c35774c603b8ea5932F3A5Bfc5Cfa933
      > block number:        9960528
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            3811033

DaoFactory:1:1.0.0:0xe1A3f648c35774c603b8ea5932F3A5Bfc5Cfa933 added to DaoArtifacts
deploying or reusing 3 factories...

      Deploying 'BankExtension'
      --------------------------
      > transaction hash:    0x091fc2ac1dacfcb06caf04d6da47162447cc830fef599e5dccd76aaf22501771
      > contract address:    0x3a43aD3BbbB6Ab640eB62B4BE8E1DD5D76432352
      > block number:        9960530
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            2797366


      Deploying 'BankFactory'
      --------------------------
      > transaction hash:    0xb05aa54f72efdd73e056308fa5b9c4d7824518c8863d3ffbe295c302c73e80e5
      > contract address:    0xb649CC4426FE89dB904c8Af4e6686c01a9BC9ABd
      > block number:        9960531
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            428247

BankFactory:1:1.0.0:0xb649CC4426FE89dB904c8Af4e6686c01a9BC9ABd added to DaoArtifacts

      Deploying 'ERC20Extension'
      --------------------------
      > transaction hash:    0x1e7b89f8e2f656b99af312497719b9596da950fd4339d85bc5a2cda33af3ef80
      > contract address:    0x2112e2c17405CE62D9DE51F86bB84EEdFe9890c6
      > block number:        9960533
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            2346477


      Deploying 'ERC20TokenExtensionFactory'
      --------------------------
      > transaction hash:    0x87f0d2b32ce63ff2606a7d59f2cda05edb2432dcce8911c940c3236df8bc98da
      > contract address:    0xD4e68Ac0a2485f5f83F7Bb470d3865897613425E
      > block number:        9960534
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            556033

ERC20TokenExtensionFactory:1:1.0.0:0xD4e68Ac0a2485f5f83F7Bb470d3865897613425E added to DaoArtifacts

      Deploying 'BondingCurve'
      --------------------------
      > transaction hash:    0x1d54a3284756b9030aaa3431dbb24c26eacb80d1ba03193eb3b0e7c5bdda5966
      > contract address:    0xE35e723Adb7be08B585E6a4b50B4598FBEa4483c
      > block number:        9960536
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            5317052


      Deploying 'BondingCurveFactory'
      --------------------------
      > transaction hash:    0x204d3dc0495cf725b79e85c9cb33f55f84d4d734d98e1fd3f75c7d9d434b1db1
      > contract address:    0xecd8C96b1093f7C023BE78FE83B21bDB41F307B8
      > block number:        9960537
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            416491

BondingCurveFactory:1:1.0.0:0xecd8C96b1093f7C023BE78FE83B21bDB41F307B8 added to DaoArtifacts
create extensions ...
create extension bankExtFactory
create extension erc20ExtFactory
create extension bondingCurveFactory
deploying or re-using 21 adapters...

      Deploying 'BancorFormula'
      --------------------------
      > transaction hash:    0xd7cead08c2434104040d7aeb5c98f8b19b783d705fcea9152aa565eb1530e999
      > contract address:    0xb022a49b0DED2873eBc5A17e526806B74F011712
      > block number:        9960545
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            3064070

BancorFormula:3:1.0.0:0xb022a49b0DED2873eBc5A17e526806B74F011712 added to DaoArtifacts

      Deploying 'DaoRegistryAdapterContract'
      --------------------------
      > transaction hash:    0xf69e3310b9b4d3da3277c1dc4388d6bfdf92a23704b3c8caf4a9643ed9fbc793
      > contract address:    0xCb7F77982b858067d276Ea51c1f5432C2F6Eb87A
      > block number:        9960546
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            605137

DaoRegistryAdapterContract:3:1.0.0:0xCb7F77982b858067d276Ea51c1f5432C2F6Eb87A added to DaoArtifacts

      Deploying 'BankAdapterContract'
      --------------------------
      > transaction hash:    0x12e38622df252fc3fadbbbd064b886e6468d12317d51af9b44cdacf309ee215c
      > contract address:    0x0D4a16d8aB8fa3E4124558344b901977Af26C0aF
      > block number:        9960547
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            687809

BankAdapterContract:3:1.0.0:0x0D4a16d8aB8fa3E4124558344b901977Af26C0aF added to DaoArtifacts

      Deploying 'ConfigurationContract'
      --------------------------
      > transaction hash:    0xf1da26005d7a35ae7a94e17f48c7003a26ce439d2817d9eb13c856985f370838
      > contract address:    0x2d9E449adc41D1a593d8e085dcfEDF8c5fbdD2Ec
      > block number:        9960548
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            1245918

ConfigurationContract:3:1.0.0:0x2d9E449adc41D1a593d8e085dcfEDF8c5fbdD2Ec added to DaoArtifacts

      Deploying 'ERC1155AdapterContract'
      --------------------------
      > transaction hash:    0x1c1a6773e8f8dae8a3d0d0eb23a2d413798e141b2a9916a7a5351c7860db33b2
      > contract address:    0x10A818E3934e2962FA72374Bf04E6b1bf7cEbc48
      > block number:        9960549
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            471896

ERC1155AdapterContract:3:1.0.0:0x10A818E3934e2962FA72374Bf04E6b1bf7cEbc48 added to DaoArtifacts

      Deploying 'ManagingContract'
      --------------------------
      > transaction hash:    0xacf184aa88cf4a6b114792ed2c6b2b887053447de7de4b40bd6a98978aff243a
      > contract address:    0xE5A1047d6dbD416F96B10A8135458979e2B8a970
      > block number:        9960550
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            1856884

ManagingContract:3:1.0.0:0xE5A1047d6dbD416F96B10A8135458979e2B8a970 added to DaoArtifacts

      Deploying 'SignaturesContract'
      --------------------------
      > transaction hash:    0xaa08a8b396efc55e3c98945e7885c8a8fb5ac674bc8406d6ee977478d4c8f751
      > contract address:    0x672c0F57DFc36cF08c7CB0E2ef10c064344C4EBE
      > block number:        9960551
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            1167226

SignaturesContract:3:1.0.0:0x672c0F57DFc36cF08c7CB0E2ef10c064344C4EBE added to DaoArtifacts

      Deploying 'VotingContract'
      --------------------------
      > transaction hash:    0x8da7b08d2f196c6ffe6a20d40ef058eb90d871e5ccf68b979208f8f59c3e3121
      > contract address:    0x1E7027D07391c5e144E5FC883Eb6f70bbDDB67ef
      > block number:        9960552
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            1579087

VotingContract:3:1.0.0:0x1E7027D07391c5e144E5FC883Eb6f70bbDDB67ef added to DaoArtifacts

      Deploying 'RagequitContract'
      --------------------------
      > transaction hash:    0x98a74e486460a50c88976811e8fff5d2c6afa46ce999355659f3267d7b8e4087
      > contract address:    0xCD2FE2bE07d748bcbD401b053C1408714749d177
      > block number:        9960553
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            1095244

RagequitContract:3:1.0.0:0xCD2FE2bE07d748bcbD401b053C1408714749d177 added to DaoArtifacts

      Deploying 'GuildKickContract'
      --------------------------
      > transaction hash:    0xd3ce06cfa40dac4adb9648d185cf8e05e8c8d1faeca1e0da5a3a95cacf9be339
      > contract address:    0x5e3151722939efe3BED996D6736Cc7C7ddEE5B79
      > block number:        9960554
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            2213347

GuildKickContract:3:1.0.0:0x5e3151722939efe3BED996D6736Cc7C7ddEE5B79 added to DaoArtifacts

      Deploying 'DistributeContract'
      --------------------------
      > transaction hash:    0x9f629ad7a487f88e92d5e618b154dfc69ac866b211a0d5db5f8a2b8c1788634a
      > contract address:    0x93a39839F3969619D04C7017a20539936Ded3D75
      > block number:        9960555
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            2268077

DistributeContract:3:1.0.0:0x93a39839F3969619D04C7017a20539936Ded3D75 added to DaoArtifacts

      Deploying 'FinancingContract'
      --------------------------
      > transaction hash:    0x5299fee99589f2d534f5988db7c8db96e562e123b4c33ade43a73f6410a086ea
      > contract address:    0x1957f9414809123E7319165DDdE033F8600ba107
      > block number:        9960556
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            1317697

FinancingContract:3:1.0.0:0x1957f9414809123E7319165DDdE033F8600ba107 added to DaoArtifacts

      Deploying 'OnboardingContract'
      --------------------------
      > transaction hash:    0x21d0725f15354189ba42ded3bb4d81a46ec555db92fea357151a0724680bb8a6
      > contract address:    0x2C94fbe3b6dc412847EFc856e372e8aA8255fD3f
      > block number:        9960557
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            2780996

OnboardingContract:3:1.0.0:0x2C94fbe3b6dc412847EFc856e372e8aA8255fD3f added to DaoArtifacts

      Deploying 'CouponOnboardingContract'
      --------------------------
      > transaction hash:    0xf618d837a38631413a20eea81a2f1de247154898ccd913fcacd21c961284f16d
      > contract address:    0x3723854156CD6B7c368D332b2628943f0Ef3b2F5
      > block number:        9960558
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            1711802

CouponOnboardingContract:3:1.0.0:0x3723854156CD6B7c368D332b2628943f0Ef3b2F5 added to DaoArtifacts

      Deploying 'TributeContract'
      --------------------------
      > transaction hash:    0xe0935f21979282ea1e3b4087d760505e197bc436982fde194d335e035d892bdc
      > contract address:    0x2Bc7d436dc4E00344F995f5Bc98A510247094E17
      > block number:        9960559
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            2089066

TributeContract:3:1.0.0:0x2Bc7d436dc4E00344F995f5Bc98A510247094E17 added to DaoArtifacts

      Deploying 'UnagiiVaultDepositAdapter'
      --------------------------
      > transaction hash:    0x2289f62ae7592b6a1edba5df9b81bceaa67cdd64aba9b417e1924f6361900c82
      > contract address:    0x4DD9E1176DB8c3892bB6Aed177fFe2B6d5F7a46d
      > block number:        9960560
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            1859164

UnagiiVaultDepositAdapter:3:1.0.0:0x4DD9E1176DB8c3892bB6Aed177fFe2B6d5F7a46d added to DaoArtifacts

      Deploying 'UnagiiVaultWithdrawAdapter'
      --------------------------
      > transaction hash:    0x3ffafc80b41b1637e81df198b2054dbd2115679bc0944fa7bc3b126fa1426cd8
      > contract address:    0x0EAA7142E881583B1f359035b6821DDe79cddceE
      > block number:        9960561
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            1610969

UnagiiVaultWithdrawAdapter:3:1.0.0:0x0EAA7142E881583B1f359035b6821DDe79cddceE added to DaoArtifacts

      Deploying 'MovementAdapter'
      --------------------------
      > transaction hash:    0x3ce7587b92ee42000f33fe9756655c6480add2eb9e80ceac3fba90d576149784
      > contract address:    0x91Ac1ebabE3c79d2e300d03a219913e4e1896A42
      > block number:        9960562
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            1957158

MovementAdapter:3:1.0.0:0x91Ac1ebabE3c79d2e300d03a219913e4e1896A42 added to DaoArtifacts

      Deploying 'IntiativeAdapter'
      --------------------------
      > transaction hash:    0x092f639a7bc0b05ac2f12bdad3b310d578465678ba3390679408e485549e8d05
      > contract address:    0x3F2546d8Cd1F9e79b75bd4Cb07b44F95d9B2b10F
      > block number:        9960563
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            1586966

IntiativeAdapter:3:1.0.0:0x3F2546d8Cd1F9e79b75bd4Cb07b44F95d9B2b10F added to DaoArtifacts

      Deploying 'VetoerAdapter'
      --------------------------
      > transaction hash:    0x659b2b98bbaac0ff699f4fbe2a94b7cc5e7185a932c7417d796e2c8209387ba0
      > contract address:    0x5D83308F792ac190Bd89B26C80D50cF62880e65B
      > block number:        9960564
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            1185306

VetoerAdapter:3:1.0.0:0x5D83308F792ac190Bd89B26C80D50cF62880e65B added to DaoArtifacts

      Deploying 'ServiceProviderAdapter'
      --------------------------
      > transaction hash:    0xba6170e0d6d24ab56cebeb4cc9cb8c45dc76c9262f45ccf908f4f32c93b68831
      > contract address:    0x8FC1B73af46E3808f5625BE3Ae2159Ca9C265C76
      > block number:        9960565
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            1185306

ServiceProviderAdapter:3:1.0.0:0x8FC1B73af46E3808f5625BE3Ae2159Ca9C265C76 added to DaoArtifacts
configure new dao ...
configure adapters ...
configure adapters with access
configureAdaptersWithDAOAccess =  185
configure adapters ...
adapterList =  187
configure extension access for bankExt
configureExtensionAccess =  187
adapterList =  188
configure extension access for erc20Ext
configure extension access for bondingCurve
adapterList =  189
configure extensions ...
configure extension access for bankExt
configureExtensionAccess =  189
configure extension access for erc20Ext
configure extension access for bondingCurve
adapterList =  192

      Deploying 'SnapshotProposalContract'
      --------------------------
      > transaction hash:    0x29eb37a1b4418802aaecad38bc2d013f869e22bfd1173ab29ca8223e18367f0d
      > contract address:    0xea2c8F3BF8e62dB90460Eb2A5d6d9202f210755f
      > block number:        9960573
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            994492

SnapshotProposalContract:4:1.0.0:0xea2c8F3BF8e62dB90460Eb2A5d6d9202f210755f added to DaoArtifacts
adapterList =  196

      Deploying 'OffchainVotingHashContract'
      --------------------------
      > transaction hash:    0xc498f742328458019d549df97092e5babd117d520111190d4dcc07e0f88cfb0a
      > contract address:    0xd14a71e990074c996039c5EB84bCa575e92Ee730
      > block number:        9960574
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            1461699

OffchainVotingHashContract:3:1.0.0:0xd14a71e990074c996039c5EB84bCa575e92Ee730 added to DaoArtifacts

      Deploying 'KickBadReporterAdapter'
      --------------------------
      > transaction hash:    0x884c77127f9115b2d87984b9d4063bc2a9c9c17a257fcb4201b6e9591f8debaa
      > contract address:    0x47Ff53274058B3Fb0B83208eBA2E026a79e5e4aF
      > block number:        9960575
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            1515161

KickBadReporterAdapter:3:1.0.0:0x47Ff53274058B3Fb0B83208eBA2E026a79e5e4aF added to DaoArtifacts
198
adapterList =  201

      Deploying 'OffchainVotingContract'
      --------------------------
      > transaction hash:    0x6e828493bb145345f2c94d67bb3609434818271d8c3bf689714f096f51664118
      > contract address:    0xb36d528a154E6ACA1e858Ba58E83587Ad2046618
      > block number:        9960576
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            4988039

OffchainVotingContract:3:1.0.0:0xb36d528a154E6ACA1e858Ba58E83587Ad2046618 added to DaoArtifacts
201
203
205

      Deploying 'Multicall'
      --------------------------
      > transaction hash:    0x2ce94b5a338ad6c5f31487d1baf90f29114e3583524909fafc43fa236c5ca88e
      > contract address:    0x7a05E2faFAcA0edfc5F064f46584Cd323b532Cd0
      > block number:        9960580
      > account:             0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
      > gas price:           4000000000
      > value sent:          0 ETH
      > gas used:            342106

Multicall:4:1.0.0:0x7a05E2faFAcA0edfc5F064f46584Cd323b532Cd0 added to DaoArtifacts
************************************************
DaoOwner: 0x41e923B875aF2Cc72772747E9ef2ed55c8df9D42
DaoRegistry: 0xb91ae63fB6FCe14D2d88FA8Cc05B115D96e2bfE1
BankFactory: 0xb649CC4426FE89dB904c8Af4e6686c01a9BC9ABd
ERC20TokenExtensionFactory: 0xD4e68Ac0a2485f5f83F7Bb470d3865897613425E
BondingCurveFactory: 0xecd8C96b1093f7C023BE78FE83B21bDB41F307B8
DaoFactory: 0xe1A3f648c35774c603b8ea5932F3A5Bfc5Cfa933
BankExtension: 0x16fF90f4F3cB39907E059feb2D18B7679c6bb115
ERC20Extension: 0xf34C03BE5Ca171D4C58F3c00775d50f7983b17dE
BondingCurve: 0x9aA9FE11847B25edB555EF715ab904A05D69782a
BancorFormula: 0xb022a49b0DED2873eBc5A17e526806B74F011712
DaoRegistryAdapterContract: 0xCb7F77982b858067d276Ea51c1f5432C2F6Eb87A
BankAdapterContract: 0x0D4a16d8aB8fa3E4124558344b901977Af26C0aF
ConfigurationContract: 0x2d9E449adc41D1a593d8e085dcfEDF8c5fbdD2Ec
ERC1155AdapterContract: 0x10A818E3934e2962FA72374Bf04E6b1bf7cEbc48
ManagingContract: 0xE5A1047d6dbD416F96B10A8135458979e2B8a970
SignaturesContract: 0x672c0F57DFc36cF08c7CB0E2ef10c064344C4EBE
OffchainVotingContract: 0xb36d528a154E6ACA1e858Ba58E83587Ad2046618
RagequitContract: 0xCD2FE2bE07d748bcbD401b053C1408714749d177
GuildKickContract: 0x5e3151722939efe3BED996D6736Cc7C7ddEE5B79
DistributeContract: 0x93a39839F3969619D04C7017a20539936Ded3D75
FinancingContract: 0x1957f9414809123E7319165DDdE033F8600ba107
OnboardingContract: 0x2C94fbe3b6dc412847EFc856e372e8aA8255fD3f
CouponOnboardingContract: 0x3723854156CD6B7c368D332b2628943f0Ef3b2F5
TributeContract: 0x2Bc7d436dc4E00344F995f5Bc98A510247094E17
UnagiiVaultDepositAdapter: 0x4DD9E1176DB8c3892bB6Aed177fFe2B6d5F7a46d
UnagiiVaultWithdrawAdapter: 0x0EAA7142E881583B1f359035b6821DDe79cddceE
MovementAdapter: 0x91Ac1ebabE3c79d2e300d03a219913e4e1896A42
IntiativeAdapter: 0x3F2546d8Cd1F9e79b75bd4Cb07b44F95d9B2b10F
VetoerAdapter: 0x5D83308F792ac190Bd89B26C80D50cF62880e65B
ServiceProviderAdapter: 0x8FC1B73af46E3808f5625BE3Ae2159Ca9C265C76
Multicall: 0x7a05E2faFAcA0edfc5F064f46584Cd323b532Cd0
************************************************

Deployed contracts: /Users/tankbottoms/Developer/tankbottoms-github/ted-monorepo/packages/contracts/build/contracts-rinkeby-2022-01-09T09:43:41.382Z.json

Deployment completed at: 2022-01-09T09:43:41.383Z
```

```
·--------------------------------|-------------·
 |  Contract Name                 ·  Size (KB)  │
 ·································|··············
 |  Address                       ·      0.086  │
 ·································|··············
 |  AddressUpgradeable            ·      0.086  │
 ·································|··············
 |  Arrays                        ·      0.086  │
 ·································|··············
 |  BancorFormula                 ·      3.858  │
 ·································|··············
 |  BankAdapterContract           ·      2.948  │
 ·································|··············
 |  BankExtension                 ·     12.719  │
 ·································|··············
 |  BankFactory                   ·      1.630  │
 ·································|··············
 |  BatchVotingContract           ·     11.841  │
 ·································|··············
 |  BondingCurve                  ·     24.048  │
 ·································|··············
 |  BondingCurveFactory           ·      1.466  │
 ·································|··············
 |  BondingCurveToken             ·      1.449  │
 ·································|··············
 |  BondingCurveVault             ·      3.207  │
 ·································|··············
 |  CloneFactory                  ·      0.063  │
 ·································|··············
 |  ConfigurationContract         ·      5.548  │
 ·································|··············
 |  Counters                      ·      0.086  │
 ·································|··············
 |  CouponOnboardingContract      ·      7.588  │
 ·································|··············
 |  DaoArtifacts                  ·      2.397  │
 ·································|··············
 |  DaoFactory                    ·     17.329  │
 ·································|··············
 |  DaoHelper                     ·      0.086  │
 ·································|··············
 |  DaoRegistry                   ·     23.162  │
 ·································|··············
 |  DaoRegistryAdapterContract    ·      2.567  │
 ·································|··············
 |  DistributeContract            ·     10.293  │
 ·································|··············
 |  ECDSA                         ·      0.086  │
 ·································|··············
 |  Endowment                     ·      9.816  │
 ·································|··············
 |  EnumerableSet                 ·      0.086  │
 ·································|··············
 |  ERC1155                       ·      5.505  │
 ·································|··············
 |  ERC1155AdapterContract        ·      1.944  │
 ·································|··············
 |  ERC1155TestToken              ·      9.512  │
 ·································|··············
 |  ERC1155TokenExtension         ·      7.940  │
 ·································|··············
 |  ERC1155TokenExtensionFactory  ·      1.192  │
 ·································|··············
 |  ERC1271Extension              ·      2.920  │
 ·································|··············
 |  ERC1271ExtensionFactory       ·      1.192  │
 ·································|··············
 |  ERC20                         ·      2.438  │
 ·································|··············
 |  ERC20Extension                ·     10.629  │
 ·································|··············
 |  ERC20MinterContract           ·      2.373  │
 ·································|··············
 |  ERC20TokenExtensionFactory    ·      2.227  │
 ·································|··············
 |  ERC721                        ·      5.168  │
 ·································|··············
 |  ExecutorExtension             ·      2.453  │
 ·································|··············
 |  ExecutorExtensionFactory      ·      1.192  │
 ·································|··············
 |  FairShareHelper               ·      0.086  │
 ·································|··············
 |  FinancingContract             ·      5.885  │
 ·································|··············
 |  GuildKickContract             ·     10.036  │
 ·································|··············
 |  GuildKickHelper               ·      0.086  │
 ·································|··············
 |  IntiativeAdapter              ·      7.132  │
 ·································|··············
 |  KickBadReporterAdapter        ·      6.793  │
 ·································|··············
 |  ManagingContract              ·      8.386  │
 ·································|··············
 |  MerkleProof                   ·      0.086  │
 ·································|··············
 |  Migrations                    ·      0.293  │
 ·································|··············
 |  MovementAdapter               ·      8.846  │
 ·································|··············
 |  Multicall                     ·      1.338  │
 ·································|··············
 |  NFTAdapterContract            ·      2.715  │
 ·································|··············
 |  NFTCollectionFactory          ·      1.192  │
 ·································|··············
 |  NFTExtension                  ·      6.043  │
 ·································|··············
 |  OffchainVotingContract        ·     22.309  │
 ·································|··············
 |  OffchainVotingHashContract    ·      6.418  │
 ·································|··············
 |  OLToken                       ·      2.438  │
 ·································|··············
 |  OnboardingContract            ·     12.676  │
 ·································|··············
 |  PixelNFT                      ·      6.470  │
 ·································|··············
 |  Power                         ·      0.441  │
 ·································|··············
 |  ProxTokenContract             ·      2.798  │
 ·································|··············
 |  RagequitContract              ·      4.842  │
 ·································|··············
 |  SafeERC20                     ·      0.086  │
 ·································|··············
 |  SafeMath                      ·      0.086  │
 ·································|··············
 |  ServiceProviderAdapter        ·      5.270  │
 ·································|··············
 |  SignatureChecker              ·      0.086  │
 ·································|··············
 |  SignaturesContract            ·      5.184  │
 ·································|··············
 |  SnapshotProposalContract      ·      4.250  │
 ·································|··············
 |  Strings                       ·      0.086  │
 ·································|··············
 |  SushiswapAddPoolAdapter       ·      7.654  │
 ·································|··············
 |  SushiswapSubPoolAdapter       ·      8.468  │
 ·································|··············
 |  TestFairShareCalc             ·      0.568  │
 ·································|··············
 |  TestToken1                    ·      2.438  │
 ·································|··············
 |  TestToken2                    ·      2.438  │
 ·································|··············
 |  TributeContract               ·      9.465  │
 ·································|··············
 |  TributeNFTContract            ·     10.776  │
 ·································|··············
 |  UnagiiVaultDepositAdapter     ·      8.399  │
 ·································|··············
 |  UnagiiVaultWithdrawAdapter    ·      7.252  │
 ·································|··············
 |  UniswapAddPoolAdapter         ·      7.654  │
 ·································|··············
 |  UniswapSubPoolAdapter         ·      8.468  │
 ·································|··············
 |  UniswapV3AddPoolAdapter       ·      6.686  │
 ·································|··············
 |  UniswapV3SubPoolAdapter       ·      6.331  │
 ·································|··············
 |  VetoerAdapter                 ·      5.270  │
 ·································|··············
 |  VotingContract                ·      7.080  │
 ·--------------------------------|-------------·
Selected Network: rinkeby
Contract: DaoFactory@0xe1A3f648c35774c603b8ea5932F3A5Bfc5Cfa933
Contract: DaoRegistry@0xb91ae63fB6FCe14D2d88FA8Cc05B115D96e2bfE1
Contract: BankFactory@0xb649CC4426FE89dB904c8Af4e6686c01a9BC9ABd
Contract: ERC20TokenExtensionFactory@0xD4e68Ac0a2485f5f83F7Bb470d3865897613425E
Contract: BondingCurveFactory@0xecd8C96b1093f7C023BE78FE83B21bDB41F307B8
Contract: BankExtension@0x16fF90f4F3cB39907E059feb2D18B7679c6bb115
Contract: ERC20Extension@0xf34C03BE5Ca171D4C58F3c00775d50f7983b17dE
Contract: BondingCurve@0x9aA9FE11847B25edB555EF715ab904A05D69782a
Contract: BancorFormula@0xb022a49b0DED2873eBc5A17e526806B74F011712
Contract: DaoRegistryAdapterContract@0xCb7F77982b858067d276Ea51c1f5432C2F6Eb87A
Contract: BankAdapterContract@0x0D4a16d8aB8fa3E4124558344b901977Af26C0aF
Contract: ConfigurationContract@0x2d9E449adc41D1a593d8e085dcfEDF8c5fbdD2Ec
Contract: ERC1155AdapterContract@0x10A818E3934e2962FA72374Bf04E6b1bf7cEbc48
Contract: ManagingContract@0xE5A1047d6dbD416F96B10A8135458979e2B8a970
Contract: SignaturesContract@0x672c0F57DFc36cF08c7CB0E2ef10c064344C4EBE
Contract: VotingContract@0xb36d528a154E6ACA1e858Ba58E83587Ad2046618
Contract: OffchainVotingContract@0xb36d528a154E6ACA1e858Ba58E83587Ad2046618
Contract: RagequitContract@0xCD2FE2bE07d748bcbD401b053C1408714749d177
Contract: GuildKickContract@0x5e3151722939efe3BED996D6736Cc7C7ddEE5B79
Contract: DistributeContract@0x93a39839F3969619D04C7017a20539936Ded3D75
Contract: FinancingContract@0x1957f9414809123E7319165DDdE033F8600ba107
Contract: OnboardingContract@0x2C94fbe3b6dc412847EFc856e372e8aA8255fD3f
Contract: CouponOnboardingContract@0x3723854156CD6B7c368D332b2628943f0Ef3b2F5
Contract: TributeContract@0x2Bc7d436dc4E00344F995f5Bc98A510247094E17
Contract: UnagiiVaultDepositAdapter@0x4DD9E1176DB8c3892bB6Aed177fFe2B6d5F7a46d
Contract: UnagiiVaultWithdrawAdapter@0x0EAA7142E881583B1f359035b6821DDe79cddceE
Contract: MovementAdapter@0x91Ac1ebabE3c79d2e300d03a219913e4e1896A42
Contract: IntiativeAdapter@0x3F2546d8Cd1F9e79b75bd4Cb07b44F95d9B2b10F
Contract: VetoerAdapter@0x5D83308F792ac190Bd89B26C80D50cF62880e65B
Contract: ServiceProviderAdapter@0x8FC1B73af46E3808f5625BE3Ae2159Ca9C265C76
Contract: DaoArtifacts@0x898ce5557AB7a1811eaB70da7B1Eb4F47cEa8Bf1
Verification process completed with success
```
