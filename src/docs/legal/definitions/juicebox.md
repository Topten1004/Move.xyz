---
title: 'Juicebox Glossary'
sidebar_position: 2
---

:::info
The following definitions have been taken from the [info.juicebox.money Glossary](https://info.juicebox.money/dev/learn/glossary/) and may not be up to date. These definitions have been provided for reference purposes.
:::

## Project

Each Juicebox project is represented as an NFT (ERC-721), managed in the <a href="https://info.juicebox.money/dev/api/contracts/jbprojects/"><code>JBProjects</code></a> contract. The owner of this NFT is specified when the project is being created. Ownership over this NFT is used to enforce permissions needed to access several project-oriented transactions. Like any other NFT, ownership can be transferred from the original owner to any other address, such as a multi-sig wallet, voting contract, or burn address.

_[Learn more](https://info.juicebox.money/dev/learn/glossary/project.md)._

## Funding cycle

A project is expressed in terms of funding cycles. A funding cycle outlines the time-locked rules according to which a project wishes to operate. It is represented as a <a href="https://info.juicebox.money/dev/api/data-structures/jbfundingcycle"><code>JBFundingCycle</code></a> data structure, and managed by the <a href="https://info.juicebox.money/dev/api/contracts/jbfundingcyclestore/"><code>JBFundingCycleStore</code></a> contract.

_[Learn more](https://info.juicebox.money/dev/learn/glossary/funding-cycle.md)._

## Tokens

The Juicebox protocol keeps track of tokens for each project. When a payment is made to a project, the protocol mints tokens for a specified beneficiary according to the rules of the project's current funding cycle.

Tokens are managed in the <a href="https://info.juicebox.money/dev/api/contracts/jbtokenstore/"><code>JBTokenStore</code></a> contract. Projects can optionally call its <a href="https://info.juicebox.money/dev/api/contracts/jbtokenstore/write/issuefor"><code>issueFor(...)</code> </a>transaction to issue an ERC-20 to represent their token. Once issued, anyone with a project's tokens can claim them from the protocol's internal accounting mechanism into their wallet to use around Web3.

Projects can also bring their own token, so long as it adheres to the <a href="https://info.juicebox.money/dev/api/interfaces/ijbtoken"><code>IJBToken</code></a> interface and uses 18 decimal fixed point accounting.

_[Learn more](https://info.juicebox.money/dev/learn/glossary/tokens.md)._

## Overflow

The <a href="https://info.juicebox.money/dev/api/contracts/or-controllers/jbcontroller/"><code>JBController</code></a> contract has a <a href="https://info.juicebox.money/dev/api/contracts/or-controllers/jbcontroller/properties/distributionlimitof"><code>distributionLimitOf(...)</code></a> property which denotes how much funds a project can pull from its treasury to distribute to its preprogrammed payout splits during each funding cycle. Any funds in the treasury in excess of the current distribution limit is considered overflow. A project's overlflow can be reclaimed by its community by redeeming tokens. A project can specify treasury funds or assets held outside of Juicebox contracts by attaching a <a href="https://info.juicebox.money/dev/api/interfaces/ijbfundingcycledatasource"><code>IJBFundingCycleDataSource</code></a> to its funding cycles.

_[Learn more](https://info.juicebox.money/dev/learn/glossary/overflow.md)._

## Discount rate

<a href="https://info.juicebox.money/dev/api/data-structures/jbfundingcycle"><code>JBFundingCycle</code></a> data structures have a <code>weight</code> property that is automatically derived from multiplying the <code>weight</code> of the previous funding cycle by the <code>discountRate</code> of the previous cycle. The weight property can then be used to determine how many project tokens are distributed per unit of payment received during the funding cycle, or for any other functionality implement through a funding cycle's data source and delegates. A project can also customize its funding cycle's weight manually.

_[Learn more](https://info.juicebox.money/dev/learn/glossary/discount-rate.md)._

## Redemption rate

<a href="https://info.juicebox.money/dev/api/data-structures/jbfundingcycle"><code>JBFundingCycle</code></a> data structures configured through the <a href="https://info.juicebox.money/dev/api/contracts/or-controllers/jbcontroller/"><code>JBController</code></a> contract have a <code>redemptionRate</code> metadata property that can be used to determine how much overflowed funds can be reclaimed by redeeming project tokens, or for any other functionality implemented in a funding cycle's data source and delegates.

_[Learn more](https://info.juicebox.money/dev/learn/glossary/redemption-rate.md)._

## Reserved tokens

<a href="https://info.juicebox.money/dev/api/data-structures/jbfundingcycle"><code>JBFundingCycle</code></a> data structures configured through the <a href="https://info.juicebox.money/dev/api/contracts/or-controllers/jbcontroller/"><code>JBController</code></a> contract have a <code>reservedRate</code> metadata property which specifies the percentage of tokens minted as a result of newly received payments that should be reserved for distribution to preprogrammed reserved token splits.

_[Learn more](https://info.juicebox.money/dev/learn/glossary/reserved-tokens.md)._

## Splits

A Split is used to send a percent of a total amount to a preprogrammed address, Juicebox project, contract that inherits from <a href="https://info.juicebox.money/dev/api/interfaces/ijbsplitallocator"><code>IJBSplitAllocator</code></a>, or sender of the transaction causing the distribution to splits. Splits are represented with <a href="https://info.juicebox.money/dev/api/data-structures/jbsplit"><code>JBSplit</code></a> data structures, and managed by the <a href="https://info.juicebox.money/dev/api/contracts/jbsplitsstore/"><code>JBSplitsStore</code></a>. A split does not hold information about what is being split, it's simply a structure organizable into groups that maps a receiver to a percentage.

_[Learn more](https://info.juicebox.money/dev/learn/glossary/splits.md)._

## Split allocator

A project can preconfigure splits to be directed to any contract that aheres to <a href="https://info.juicebox.money/dev/api/interfaces/ijbsplitallocator"><code>IJBSplitAllocator</code></a> whose <code>allocate(...)</code> transaction will be called when tokens are distributed.

_[Learn more](https://info.juicebox.money/dev/learn/glossary/split-allocator.md)._

## Ballot

<a href="https://info.juicebox.money/dev/api/data-structures/jbfundingcycle"><code>JBFundingCycle</code></a> data structures have a ballot property which is the address of a contract that adheres to the <a href="https://info.juicebox.money/dev/api/interfaces/ijbfundingcycleballot"><code>IJBFundingCycleBallot</code></a> interface. This contract specifies the conditions that must be met for any proposed funding cycle reconfiguration to take effect.

A ballot contract can be written to incorporate strict community voting requirements in order to make funding cycle changes, or to simply add a required buffer period between when a change is proposed and when it can take effect.

_[Learn more](https://info.juicebox.money/dev/learn/glossary/ballot.md)._

## Payment terminal

A project can be configured to use any contract that adheres to [`IJBPaymentTerminal`](/dev/api/interfaces/ijbpaymentterminal.md) to manage its inflows and outflows of token funds. It can set its terminals using [`JBDirectory.setTerminalsOf(...)`](/dev/api/contracts/jbdirectory/write/setterminalsof.md), and if it uses multiple tokens to manage funds for the same token, it can set the primary one where other Web3 contracts should send funds to using [`JBDirectory.setPrimaryTerminalOf(...)`](/dev/api/contracts/jbdirectory/write/setprimaryterminalof.md).

_[Learn more](https://info.juicebox.money/dev/learn/glossary/payment-terminal.md)._

## Data source

<a href="https://info.juicebox.money/dev/api/data-structures/jbfundingcycle"><code>JBFundingCycle</code></a> data structures configured through the <a href="https://info.juicebox.money/dev/api/contracts/or-controllers/jbcontroller/"><code>JBController</code></a> contract have a <code>dataSource</code> metadata property which is the address of a contract that adheres to the <a href="https://info.juicebox.money/dev/api/interfaces/ijbfundingcycledatasource"><code>IJBFundingCycleDataSource</code></a> interface.

Including a data source allows projects to customize what happens when a payment is attempted to the project during a funding cycle, and what happens when a token is attempted to be redeemed during a funding cycle.

_[Learn more](https://info.juicebox.money./data-source.md)._

## Delegate

When a project receives a payment, its funding cycle's data source can specify the address of a contract that adheres to the <a href="https://info.juicebox.money/dev/api/interfaces/ijbpaydelegate"><code>IJBPayDelegate</code></a> whose <code>didPay(...)</code> transaction will be called once <a href="https://info.juicebox.money/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/pay"><code>JBPayoutRedemptionPaymentTerminal.pay(...)</code></a> has been executed.

Similarly, when a project's tokens are being redeemed, its funding cycle's data source can specify the address of a contract that adheres to the <a href="https://info.juicebox.money/dev/api/interfaces/ijbredemptiondelegate"><code>IJBRedemptionDelegate</code></a> whose <code>didRedeem(...)</code> transaction will be called once <a href="https://info.juicebox.money/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/write/redeemtokensof"><code>JBPayoutRedemptionPaymentTerminal.redeemTokensOf(...)</code></a> has been executed.

These can be used by projects to customize what happens when it receives payments and when someone redeems its tokens.

_[Learn more](https://info.juicebox.money/dev/learn/glossary/delegate.md)._

## Operator

Addresses can give permissions to any other address to take specific actions throughout the Juicebox ecosystem on their behalf. These addresses are called Operators, and are managed through the <a href="https://info.juicebox.money/dev/api/contracts/jboperatorstore/"><code>JBOperatorStore</code></a> contract.

_[Learn more](https://info.juicebox.money/dev/learn/glossary/operator.md)._
