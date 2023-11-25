# Definitions

**A "51% attack"** is a type of attack on a decentralized network whereby a group gains control of the majority of nodes. A 51% attack would such a group to defraud the blockchain by reversing transactions and "double spending" Ether and other tokens.

**An "Account"** is an object containing an address, balance, nonce, and optional storage and code. An account can be a contract account or an externally owned account (EOA).

**"Act" or "The Act"** refers to the Delaware Uniform Unincorporated Nonprofit Association Act, Del. Code Ann. Tit. 6, §§ 1901-1916 inclusive.

**"Address"** most generally, represents an EOA or contract that can receive ("destination address") or send ("source address") transactions on the blockchain. More specifically, it is the rightmost 160 bits of a Keccak hash of an ECDSA public key.

**"Affiliate"** means, with respect to any Person, any other Person controlling, controlled by, or under common control with such Person; in such context, "control" means the possession, directly or indirectly, of the power to direct the management or policies of another, whether through the ownership of voting securities, by contract, or otherwise.

**"Agreement" or "The Agreement"** refers to the [Guiding Principles Agreement](guiding-principles) of the DAO.

**"Allow Minting Tokens", "Allow Changing Tokens", "Allow Setting Terminals", "Allow Setting the Controller", "Allow Terminal Migrations", and "Allow Controller Migration"** each refer to different Juicebox protocol functions which Juicebox Projects can enable or disable each Funding Cycle. By default, these functions are disabled.

**"Amendments"** conveys that any provision of this Charter may be amended, waived or modified only upon a vote in favor of such amendment, waiver or modification by the DAO Members through the Designated Smart Contract.

**"Application Binary Interface (ABI)"** is the standard way to interact with contracts in the Ethereum ecosystem, both from outside the blockchain and for contract-to-contract interactions.

**"Audit"** refers to a testing process for potential security improvements or other improvements to a new token, project, product, or offering, or for potential improvements to an existing token, project, product, or offering. Testing networks ("Testnets" or "Test nets") can be used to test the viability and vulnerability of new ideas, concepts, code, and processes before those ideas, concepts, code, or processes are deployed to other networks.

**"Ballot" or "Reconfiguration Ballot"** refers to Ethereum Smart Contracts which adhere to [`IJBFundingCycleBallot`](https://info.juicebox.money/dev/api/interfaces/ijbfundingcycleballot). Ballots specify the conditions that must be met for any proposed funding cycle reconfiguration to take effect. A Ballot can be written to incorporate strict community voting requirements in order to make funding cycle changes, or to simply add a required buffer period between when a change is proposed and when it can take effect.

**"Ballot Redemption Rate"** refers to a custom Redemption Rate (See Redemption Rate) which overrides the typical Redemption Rate if a Reconfiguration Ballot is currently active.

**"Claim"** means any past, present, or future dispute, claim, controversy, demand, right, obligation, liability, action, or cause of action of any kind or nature.

**"Consensus Attack"** refers to an attack that: (i) is undertaken by or on behalf of a block producer who controls, or a group of cooperating block producers who collectively control a preponderance of the means of block production on the Designated Blockchain Network; and (ii) has the actual or intended effect of: (A) reversing any transaction made to or by the Designated Smart Contract after Confirmation of such a transaction, including any “double spend” attack having or intended to have such effect; or (B) preventing inclusion in blocks or Confirmation of any transaction made to or by the Designated Smart Contract, including any “censorship attack,” “transaction withholding attack” or “block withholding attack” having or intended to have such effect.

**"Consensus Rules"** means the rules for transaction validity, block validity, and determination of the canonical blockchain that are embodied in the Designated Client.

**"Confirmation"** of a transaction shall be deemed to have occurred if and only if such transaction has been recorded in accordance with the Consensus Rules in a valid block whose hashed header is referenced by at least 30 subsequent valid blocks on the Designated Blockchain.

**"Construction":** Any rule of construction to the effect that ambiguities are to be resolved against the drafter shall not be applied in the construction or interpretation of this Charter. This Charter constitutes the entire agreement among the DAO Members with respect to the subject matter hereof and supersedes all prior agreements and understandings, both written and oral, among the DAO Members with respect to the subject matter hereof.

**"Contract"** means any: (i) written, oral, implied by course of performance or otherwise or other agreement, contract, understanding, arrangement, settlement, instrument, warranty, license, insurance policy, benefit plan or legally binding commitment or undertaking; or (ii) any representation, statement, promise, commitment, undertaking, right or obligation that may be enforceable, or become subject to an Order directing performance thereof, based on equitable principles or doctrines such as estoppel, reliance, or quasi-contract.

**"DAO"** means Decentralized Autonomous Organization. "DAO" or "The DAO" may refer to Movement DAO, a Delaware Unincorporated Nonprofit Association. The DAO may choose to follow the Unincorporated Nonprofit Association Act under Nevada, Delaware, Washington or another state where the Uniform Unincorporated Nonprofit Association Act of 2008 was adopted.

**"DAO Expenses"** refers to costs and expenses related to the activities, maintenance and operation of the DAO. [_See Section 7(b)(i) of The Agreement._](guiding-principles).

**"DAO Property"** means any Token or other asset, right or property licensed to or on deposit with or owned, held, custodied, controlled or possessed by or on behalf of the DAO, including any Token on deposit with or held, controlled, possessed by or on deposit with the Designated Smart Contract.

**"Dapp"** refers to online portals or other interactive software used by the DAO, individuals, and any other entities to create, manage, contribute to, or otherwise interact with Juicebox Treasuries, the Juicebox Protocol, or any other DAO services. Governance activities performed within the DAO's Snapshot Spaces on Snapshot.org or other Snapshot servers are also considered to be Dapp activities.

**"Data Source"** refers to Ethereum Smart Contracts which adhere to [`IJBFundingCycleDataSource`](https://info.juicebox.money/dev/api/interfaces/ijbfundingcycledatasource). A Data Source can customize what happens when a payment to a Juicebox Project is attempted during a Funding Cycle, and what happens when a Token redemption is attempted during a Funding Cycle.

**"Discount Rate"** refers to the percent by which to automatically decrease the subsequent cycle's Weight from the current cycle's Weight. The Discount Rate is not applied during funding cycles where the Weight is explicitly reconfigured.

**"Disputes"; "Mandatory Arbitration".** Any Legal Proceeding, Claim or other dispute or controversy arising out of or relating to this Agreement, its enforcement, or the breach thereof shall be finally resolved by binding arbitration in accordance with the Arbitration Procedures; provided, however, that any DAO Member may seek injunctive relief in aid of arbitration in order to prevent irreparable harm or preserve the status quo. EACH DAO MEMBER HEREBY IRREVOCABLY WAIVES ALL RIGHT TO TRIAL BY JURY IN ANY ACTION, PROCEEDING OR COUNTERCLAIM WHETHER BASED ON CONTRACT, TORT OR OTHERWISE) ARISING OUT OF OR RELATING TO THIS CHARTER, THE DESIGNATED SMART CONTRACT, THE DAO MATTERS OR THE ACTIONS OF THE DAO MEMBERS IN THE NEGOTIATION, ADMINISTRATION, PERFORMANCE AND ENFORCEMENT OF THIS AGREEMENT.

**"Distribution Limit" and "Funding Target"** refer to the amount of tokens that a Juicebox Project can distribute per Funding Cycle, and the currency which that amount is denominated in.

**"Designated Blockchain"** refers to, at any given time, the version of the digital blockchain ledger that at least a majority of nodes running the Designated Client on the Designated Blockchain Network recognize as canonical as of such time in accordance with the Consensus Rules. For the avoidance of doubt, the “Designated Blockchain” does not refer to e.g. Ethereum Classic or any digital blockchain ledger commonly known as a “testnet”.

**"Designated Blockchain Network"** means the Ethereum mainnet (networkID:1, chainID:1), as recognized by the Designated Client.

**"Designated Client"** means the Official Go Ethereum client available at https://github.com/ethereum/go-ethereum, Infura, Alchemy, or other providers, as long as it is compatible with the aforementioned Designated Blockchain Network.

**"Designated Smart Contract"** means the smart contracts referenced in [contract addresses](https://gov.move.xyz/dao/resources/addresses) on the Designated Blockchain.

**"Distributed DAO Property"** means any asset, right or property that was once DAO Property and has been distributed to a DAO Member.

**"Established Practices"** refers to the practices used by an unincorporated nonprofit association without material change during the most recent five years of its existence, or if it has existed for less than five years, during its entire existence.

**"Externally Owned Accounts (EOAs)"** are accounts that are controlled by users who control the private keys for an account, typically generated using a seed phrase. Externally owned accounts are accounts without any code associated with them. Typically these accounts are used with a wallet.

**"Fraud Proof"** is a security model for certain layer 2 solutions where, to increase speed, transactions are rolled up into batches and submitted to Ethereum in a single transaction. They are assumed valid but can be challenged if fraud is suspected. A Fraud Proof will then run the transaction to see if fraud took place. This method increases the amount of transactions possible while maintaining security. Some rollups use validity proofs.

**"Funding Cycle Duration"** is how long each funding cycle lasts (specified in seconds). All funding cycle properties are unchangeable while that cycle is in progress. In other words, any proposed reconfigurations can only take effect during a subsequent cycle. If no reconfigurations were submitted by the project owner, or if the proposed changes fail the current funding cycle's Ballot, a copy of the latest funding cycle will automatically start once the current one ends. Funding cycle changes pursuant to a Discount Rate or other certain onchain parameters will still take effect in such a funding cycle. A cycle with no duration lasts indefinitely, and reconfigurations can start a new funding cycle with the proposed changes right away.

**"Funding Cycle" and "Cycle"** refer to the time-locked rules according to which a Juicebox Project wishes to operate. Funding Cycles are typically represented as a [`JBFundingCycle`](https://info.juicebox.money/dev/api/data-structures/jbfundingcycle) data structure, and are usually managed by the [`JBFundingCycleStore`](https://info.juicebox.money/dev/api/contracts/jbfundingcyclestore/) contract. Funding Cycle duration can be specified in seconds ("Funding Cycle Duration"). Funding Cycle properties are unchangeable while the cycle is in progress. In other words, any proposed reconfigurations can only take effect during the subsequent cycle. If no reconfigurations were submitted by the Project Owner, or if proposed changes fail the current cycle's Ballot, a copy of the latest Funding Cycle will automatically start once the current one ends. Funding cycle changes pursuant to a Discount Rate or other certain onchain parameters will still take effect in such a funding cycle. A Funding Cycle with no duration lasts indefinitely; valid reconfigurations to Funding Cycles with no duration immediately start a new Funding Cycle with the proposed changes once approved by a Reconfiguration Ballot if necessary.

**"Gas"** A virtual fuel used in Ethereum to execute smart contracts. The EVM (i.e. the Ethereum Virtual Machine) uses an accounting mechanism to measure the consumption of gas and limit the consumption of computing resources (see Turing complete).

**"Governing Principles"** refers to the agreements, whether oral, in a record, or implied from established practices, or in any combination thereof, which govern the purpose or operation of an unincorporated nonprofit association and the rights and obligations of its Members and managers. The term includes any amendment or restatement of the agreements constituting the Governing Principles.

**"Governance Rights"** are the entire interest of a Member in the DAO, as measured by a Member's Tokens, including, without limitation, all rights and obligations contemplated or agreed to under this Agreement, and any right to vote on, consent to, or otherwise participate in any decision or action of or by the Members granted by this Agreement or the Act. Member's Governance Rights are subject to [DAO Governance](https://gov.move.xyz/dao/governance/process).

**"Gnosis Safe"** refers to the Gnosis Safe Multisig Wallet, a smart contract which allows multiple Ethereum addresses to manage a single Ethereum address. The Gnosis Safe is used to manage the DAO's treasury.

**"Gwei"** is short for gigawei, a denomination of ether, commonly utilized to convey gas prices. 1 gwei = 109 wei. 109 gwei = 1 Ether.

**"HD Wallet Seed"** is a value used to generate the master private key and master chain code for an HD wallet. The wallet seed can be represented by mnemonic words, making it easier for humans to copy, back up, and restore private keys.

**"Hold Fees"** refers to the fee holding process: by default, Protocol Fees are paid automatically when funds are distributed from a Juicebox Treasury to an Ethereum address. During Funding Cycles configured to hold fees, this fee amount is set aside instead of being immediately processed. Projects can reclaim their held fees by adding funds to their Treasury equal to the amount of funds distributed to Ethereum addresses while fees were being held. Otherwise, Juicebox DAO or the project can process these held fees at any point to issue Juicebox Governance Token ("JBX") at the current rate. This allows a project to withdraw funds and later add them back into their the DAO treasury without incurring fees. This applies to both Distributions from the Distribution Limit and from the Overflow Allowance.

**"Legal Order"** means any restraining order, preliminary or permanent injunction, stay or other order, writ, injunction, judgment or decree that either: (i) is issued by a court of competent jurisdiction, or (ii) arises by operation of applicable law as if issued by a court of competent jurisdiction, including, in the case of clause “(ii)” an automatic stay imposed by applicable law upon the filing of a petition for bankruptcy.

**"Legal Proceeding"** means any private or governmental action, suit, litigation, arbitration, claim, proceeding (including any civil, criminal, administrative, investigative or appellate proceeding), hearing, inquiry, audit, examination or investigation commenced, brought, conducted or heard by or before, or otherwise involving, any court or other governmental entity or any arbitrator or arbitration panel.

**"Liability"** means any debt, obligation, duty or liability of any nature (including any unknown, undisclosed, unmatured, unaccrued, unasserted, contingent, indirect, conditional, implied, vicarious, inchoate derivative, joint, several or secondary liability), regardless of whether such debt, obligation, duty or liability would be required to be disclosed on a balance sheet prepared in accordance with generally accepted accounting principles and regardless of whether such debt, obligation, duty or liability is immediately due and payable. To be “Liable” means to have, suffer, incur, be obligated for or be subject to a Liability.

**"Lien"** means any lien, pledge, hypothecation, charge, mortgage, security interest, encumbrance, other possessory interest, conditional sale or other title retention agreement, intangible property right, claim, infringement, option, right of first refusal, preemptive right, exclusive license of intellectual property, community property interest or restriction of any nature including any restriction on the voting of any security or restriction on the transfer, use or ownership of any security or other asset.

**A "Manager"** is a person that is responsible, alone or in concert with others, for the management of an unincorporated nonprofit association.

**"Majority Vote"** means the approval of Members holding at least a majority-in-interest of applicable DAO voting Tokens.

**"Material Adverse Exception Event"** means that one or more of the following has occurred, is occurring or would reasonably be expected to occur:

> **(i)** a Consensus Attack adversely affecting the results or operations of the Designated Smart Contract;
>
> **(ii)** the Designated Smart Contract having become inoperable, inaccessible or unusable, including as the result of any code library or repository incorporated by reference into the Designated Smart Contract or any other smart contract or oracle on which the Designated Smart Contract depends having become inoperable, inaccessible or unusable or having itself suffered a Material Adverse Exception Event, _mutatis mutandis_;
>
> **(iii)** a material and adverse effect on the use, functionality or performance of the Designated Smart Contract as the result of any bug, defect or error in the Designated Smart Contract or the triggering, use or exploitation (whether intentional or unintentional) thereof (it being understood that for purposes of this clause “(iii)”, a bug, defect or error will be deemed material only if it results in a loss to a DAO Member or the DAO of at least **50%** of such DAO Member's distributable interest in the DAO Property and/or **50%** of the DAO Property);
>
> **(iv)** any unauthorized use of an administrative function or privilege of the Designated Smart Contract, including: (A) any use of any administrative credential, key, password, account or address by a Person who has misappropriated or gained unauthorized access to such administrative credential, key, password, account or address or (B) any unauthorized use of an administrative function or privilege by a DAO Member or a representative of a DAO Member; or
>
> **(v)** the Designated Smart Contract, any of the DAO Members or the DAO Property is subject to a Legal Order that prohibits the Designated Smart Contract (or that, if the Designated Smart Contract were a Person, would prohibit the Designated Smart Contract) from executing any function or operation it would otherwise reasonably be expected to execute.

**"Member"** means each Person entering into this Agreement as a Member or subsequently admitted as a Member pursuant to the terms of this Agreement, but does not include any Person that has ceased to be a Member of the DAO. If at any time there is only one Member, then all references to "Members" shall be deemed to mean "Member."

**A "Multi-Signature Wallet"** is a smart contract wallet on the Designated Blockchain Network that requires a minimum number of people to approve a transaction before it can occur (M-of-N).

**"Non-Fungible Tokens", "NFT", or "NFTs"** means a cryptographic token based on the Ethereum ERC-721 standard, the ERC-1155 standard, or a similar standard or other blockchain-based asset.

**"Overflow"** refers to funds in a Juicebox Treasury in excess of that Treasury's current Distribution Limit. A Project's Overflow can be reclaimed by redeeming that Project's Tokens, subject to a Project's Redemption Rate and other Project configurations.

**"Overflow Allowance"** The amount of treasury funds that the Project Owner can distribute on-demand. This allowance does not reset each Funding Cycle. Instead, it lasts until the Project Owner explicitly proposes a reconfiguration with a new allowance. The protocol charges a Protocol Fee on funds withdrawn from the network. Overflow allowances can be specified in any currency that the [`JBPrices`](https://info.juicebox.money/dev/api/contracts/jbprices/) contract has a price feed for.

**"Payouts", "Distributions", and "Payout Splits"** refer to the distribution of Treasury assets from a Juicebox Project Treasury to other Juicebox Projects or to external Ethereum addresses, or addresses on other blockchains. Payouts to Ethereum addresses invoke fees, the payment of which issues JBX Tokens in accordance with Juicebox DAO's Treasury configurations ("Fees" or "Protocol Fee"). Protocol Fees can range from 0% to 5% of Payout amounts to Ethereum addresses. As of August 4th 2022, Protocol Fees are equal to 2.5% of Payout amounts to Ethereum addresses.

**"Pause Payments", "Pause Distributions", "Pause Redemptions", and "Pause Burn"** each refer to Treasury functions which Project Owners can pause in a Funding Cycle. These functions are not paused by default.

**"Person"** means an individual, corporation, association, partnership, joint venture, limited liability company, estate, trust, or any other legal entity.

**"Proceeding"** means any action, claim, suit, investigation, or proceeding by or before any court, arbitrator, governmental body, self-regulatory agency, or other agency.

**"Project", "Juicebox Project", "Treasury", and "Member Project"** refer to projects deployed using the Juicebox-compatible protocol including any administrative NFTs, Project configurations, Protocol extensions, digital assets, and tokens associated with those projects.

**"Project Owner" and "Project Owners"** refer to the individual or individuals with administrative access to configure one or more Juicebox Project(s). This includes individuals with access to Ethereum addresses holding one or more administrative ERC-721s issued by a Smart Contract which adheres to [`IJBProjects`](https://info.juicebox.money/dev/api/interfaces/ijbprojects), as well as individuals with access to Ethereum addresses which have been granted permissions to take specific indexed actions via a Smart Contract which adheres to [`IJBOperatorStore`](https://info.juicebox.money/dev/api/interfaces/ijboperatorstore).

**"Project Token" and "Token"** refer to tokens and token balances stored in a Smart Contract which adheres to [`IJBTokenStore`](https://info.juicebox.money/dev/api/interfaces/ijbtokenstore) or tokens which adhere to [`IJBToken`](https://info.juicebox.money/dev/api/interfaces/ijbtoken), including tokens issued by the Juicebox Protocol.

**"Property"** means all property, whether real, personal, or mixed or tangible or intangible, or any right or interest therein.

**"Protocol", "Juicebox Protocol", and "Juicebox v2"** refer to the Smart Contracts built and maintained by Juicebox DAO, as well as other ancillary Smart Contracts ("Protocol Extensions" or "Extensions"). This includes deployed Ethereum mainnet and Rinkeby testnet Smart Contracts with addresses listed at https://info.juicebox.money/dev/resources/addresses, as well as other Smart Contracts with source code copied or modified from the Smart Contracts currently and/or previously available at https://github.com/jbx-protocol.

**Record**, used as a noun, means information that is inscribed on a tangible medium or that is stored in an electronic or other medium and is retrievable in perceivable form.

**"Redemption Rate", "Redemption Curve", or "Bonding Curve"** refers to a bonding curve along which Juicebox Protocol calculates redemption from a Treasury. The Redemption Rate can be configured by a Project Owner each funding cycle. A rate of 100% suggests a linear proportion, meaning X% of treasury overflow can be reclaimed by redeeming X% of the token supply.

**"Representative"** means a Member, manager, officer, director, partner, employee, or agent.

**"Reserved Rate" or "Reserved Tokens"** refers to the percentage of newly minted tokens that a project wishes to withhold for custom distributions. The Project Owner can pre-program a list of addresses, other Projects, and contracts that adhere to [`IJBSplitAllocator`](https://info.juicebox.money/dev/api/interfaces/ijbsplitallocator) to split reserved tokens between.

**"Service Provider"** means the Person appointed by the DAO to perform administrative services, responsibilities, and duties to carry on the DAO's operations. The initial Service Provider shall be decided by the DAO.

**"Severability"** signifies: in the event that one or more of the provisions of this Charter is for any reason held to be invalid, illegal or unenforceable, in whole or in part or in any respect, or in the event that any one or more of the provisions of this Charter operate or would prospectively operate to invalidate this Charter, then and in any such event, such provisions) only will be deemed null and void and will not affect any other provision of this Charter and the remaining provisions of this Charter will remain operative and in full force and effect and will not be affected, prejudiced, or disturbed thereby.

**"Sign"** means, with present intent to authenticate or adopt a record:

> (a) to execute or adopt a tangible symbol; or
> (b) to attach to or logically associate with the record an electronic symbol, sound, or process.

**"Smart Contract"** refers to computer programs stored on the Designated Blockchain or other blockchains.

**"Smart multisignature escrow":** Bitcoin allows multisignature transaction contracts where, for example, three out of a given five keys are needed to spend the funds in that contract. Ethereum allows for more granularity; for example, four out of five given keys can spend everything in a contract, three out of five keys can be used to spend up to 10% of that contract's funds per day, and two out of five keys can be used to spend up to 0.5% of that contract's funds per day. Additionally, Ethereum multisigs can be asynchronous - two parties can register their signatures on the blockchain at different times, and the last signature will automatically send the transaction.

**"Start Timestamp"** refers to the time at which a funding cycle is considered active. Projects can configure the start time of their first funding cycle to be in the future and can ensure reconfigurations don't take effect before a specified time. Once a funding cycle ends, a new one automatically starts right away. If there's an approved reconfiguration queued to start at this time, it will be used. Otherwise, a copy of the current funding cycle will be used.

**"State"** means a state of the United States, the District of Columbia, Puerto Rico, the United States Virgin Islands, or any territory or insular possession subject to the jurisdiction of the United States.

**"Token"** means a digital unit that is recognized by the Designated Client on the Designated Blockchain Network as capable of: (i) being uniquely associated with or “owned” by a particular public-key address on the Designated Blockchain Network at each particular block height; and (ii) having Transfers of such digital unit recorded on the Designated Blockchain.

**"Total Available Capital"** represents the total deployable capital in treasury reserves that can be used to fund DAO initiatives. Token holders will vote to determine how to use "Total Available Capital" reserves.

**"Transfer"** includes:

> (a) an assignment;
> (b) a conveyance;
> (c) a sale;
> (d) a lease;
> (e) an encumbrance, including a mortgage or security interest;
> (f) a gift; and/or
> (g) a transfer by operation of law.
> (h) of a Token to a given address (the “Receiving Address”) on the Designated Blockchain Network will be deemed to have occurred if and only if it is recognized by the Designated Client on the Designated Blockchain Network that: (i) there has been duly transmitted to the Designated Blockchain Network a new transfer function transaction that:(A) provides for the reassociation of the Designated Token with the Receiving Address; and (B) is signed by a private key that is (or a group of private keys that together are) sufficient to authorize the execution of such transfer function; and (ii) such transaction has been Confirmed.

**"Total Value Lock" or "TVL"** refers to the total value locked into a Smart Contract or set of Smart Contracts that may be deployed or stored at one or more exchanges or markets. This is used as a measurement of investor deposits. It is the dollar value of all the coins or tokens locked into a platform, protocol, lending program, yield farming program, or insurance liquidity pool.

**"Unincorporated Nonprofit Association"** means an unincorporated organization consisting of _two_ or more Members joined under an agreement that is oral, in a record, or implied from conduct, for one or more common, nonprofit purposes. The term does not include:

> (a) a trust;
> (b) a marriage, domestic partnership, common law domestic relationship, civil union, or other domestic living arrangement;
> (c) an organization formed under any other statute that governs the organization and operation of unincorporated associations;
> (d) a joint tenancy, tenancy in common, or tenancy by the entireties even if the co-owners share use of the property for a nonprofit purpose; or
> (e) a relationship under an agreement in a record that expressly provides that the relationship between the parties does not create an unincorporated nonprofit association.

**Volatility** A statistical measure of the price variation of an asset. Newer early-stage projects in the explosive growth stage tend to see very high volatility in the price of their assets in their early days. Volatile assets are often considered riskier than less volatile assets because the price is expected to be less predictable.

**"Weight"** is a number used to determine how many project tokens should be minted and transferred when payments are received during a Funding Cycle. In other words, Weight is the exchange rate between the project token and a currency (defined by a [`JBPayoutRedemptionPaymentTerminal`](https://info.juicebox.money/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/)) during a Funding Cycle. Project owners can configure this directly or allow it to be automatically derived from the previous funding cycle's Weight and Discount Rate.

**"Web3"** is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.

**"Web3 tools":** The key characteristics of Web3 tools may include personal assistance learning, artificial intelligence, multimedia information, interoperability, and semantic nature. Tools used for the governance, tokenization, Membership, voting and operation of a DAO.

**"Yield farming"** is the practice of staking or lending crypto assets in order to generate returns or rewards in the form of additional cryptocurrency. This application of decentralized finance (DeFi) has skyrocketed in popularity recently thanks to innovations like liquidity mining. In short, yield farming protocols incentivize liquidity providers (LP) to stake or lock up their crypto assets in a smart contract-based liquidity pool. These incentives can be a percentage of transaction fees, interest from lenders, or a governance token (see liquidity mining). These returns are expressed as an annual percentage yield (APY). As more investors add funds to the related liquidity pool, the value of the issued returns decrease accordingly.
