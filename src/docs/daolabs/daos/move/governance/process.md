# Governance Process

_Effective Date: August 21, 2022_
_0x3fa802d55c2eaebe6333e217323e7f07a2ca92b4@ethereum.email

The DAO is governed by its community, as expressed through MAPE NFT voting.[^1]

[Multi-sig](https://gov.move.xyz/dao/governance/multisig) transactions and signatures, as well as updates to DAO processes, must be ratified by this process prior to their implementation.

<img src="/images/governance/calendar.png" alt="Calendar" style="width: 100%;">

## Phase 0: Discussion.

Authors are encouraged to create a proposal discussion thread in the `#proposal-workshop` channel of the [DAO Discord](https://discord.gg/movexyz) to receive the community's feedback.

**You can use the [proposal template](https://gov.move.xyz/dao/governance/template) as a starting point. When writing your proposal, try to be as detailed as possible in your specification. Only include what is necessary—short, specific proposals are best.**

## Phase 1: Temperature Check.

Once finalized, authors can submit their proposals to the DAO's [Temperature Check Space](https://snapshot.org/#/movedao.eth). The Temperature Check Space grants addresses one vote per MAPE NFT.

As the DAO's Service Provider, [service-provider.eth](https://etherscan.io/address/0x752515a3A1091b9f1c04416CF79D1F14d2340085) maintains the right to revoke Temperature Check proposals which are malicious, exploitative, or otherwise in bad faith.

Proposals in the Temperature Check Space will be archived after fifty-six (56) days.

**If you need help uploading a proposal to Snapshot, tag a contributor in [Discord](https://discord.gg/movexyz).**

## Phase 2: Consensus.

Every 28 days, proposals with at least 30 "For" votes in the [Temperature Check Space](https://snapshot.org/#/movedao.eth) are moved to the DAO's [Consensus Space](https://snapshot.org/#/snapshot.movedao.eth) for seven (7) days of voting.

In the Consensus Space, addresses receive one vote per dollar contributed to the [Multi-sig](https://gov.move.xyz/dao/governance/multisig) from [February-July 2022](https://gov.move.xyz/dao/governance/gnosis) inclusive.

As the DAO's Service Provider, [service-provider.eth](https://etherscan.io/address/0x752515a3A1091b9f1c04416CF79D1F14d2340085) maintains the right to revoke Consensus proposals which are malicious, exploitative, or otherwise in bad faith.

## Phase 3: Execution.

Once voting closes, proposals with at least 66% approval are queued for execution by the [Multi-sig](https://gov.move.xyz/dao/governance/multisig). "Abstain" votes are not included in this calculation.

## Emergency Governance.

In an emergency scenario, the Multi-sig shall take onchain actions if explicit public approval from 80 percent or more of Multi-sig signers, or explicit public approval or instructions from the `service-provider.eth` are received.

:::warning
The `service-provider.eth` signer also maintains the Vetoer role, which allows `service-provider.eth` or `tankbottoms.eth` to take on-chain actions if any governance proposal is deemed malicious, exploitative, or otherwise in bad faith. Likewise, if there is suspected fraud, impending loss of funds, or malicious activity against the interests of the DAO, the Authorized Members, individually, or collectively, they may take any and all on-chain or off-chain actions to protect the DAO's treasury and assets - including interfering with the execution of a proposal, approving a proposal, reconfiguring Snapshot, or reconfiguring the Multi-sig. See [Security](https://daolabs-docs.on.fleek.co/daolabs/policies/gitbook/README.md#security), [Security Precautions](https://daolabs-docs.on.fleek.co/daolabs/policies/gitbook/README.md#security-precautions), [Service Providers](https://daolabs-docs.on.fleek.co/daolabs/daos/move/legal/guiding-principles.md#16-service-providers) and [Governance](https://daolabs-docs.on.fleek.co/daolabs/daos/move/proposals/mip-0000.md).
:::

**service-provider.eth may provide a summary and an explanation of any such action(s) within 72 hours of its execution.**

[^1]: mainnet:[`0xdd407a053fa45172079916431d06E8e07f655042`](https://etherscan.io/token/0xdd407a053fa45172079916431d06e8e07f655042)
