# 'Guiding Principles'

# ☮️ PeaceDAO Guiding Principles

### Definitions.

<details>

<summary>Definitions</summary>

**"Act" or "The Act"** refers to the Delaware Uniform Unincorporated Nonprofit Association Act, Del. Code Ann. Tit. 6, §§ 1901-1916 inclusive.

**"Affiliate"** means, with respect to any Person, any other Person controlling, controlled by, or under common control with such Person; in such context, "control" means the possession, directly or indirectly, of the power to direct the management or policies of another, whether through the ownership of voting securities, by contract, or otherwise.

**"Agreement" or "The Agreement"** refers to this [Guiding Principles Agreement](guiding-principles) of the DAO.

**"Allow Minting Tokens", "Allow Changing Tokens", "Allow Setting Terminals", "Allow Setting the Controller", "Allow Terminal Migrations", and "Allow Controller Migration"** each refer to different Juicebox protocol functions which Juicebox Projects can enable or disable each Funding Cycle. By default, these functions are disabled.

**"Audit"** refers to a testing process for potential security improvements or other improvements to a new token, project, product, or offering, or for potential improvements to an existing token, project, product, or offering. Testing networks ("Testnets" or "Test nets") can be used to test the viability and vulnerability of new ideas, concepts, code, and processes before those ideas, concepts, code, or processes are deployed to other networks.

**"Ballot" or "Reconfiguration Ballot"** refers to Ethereum Smart Contracts which adhere to [`IJBFundingCycleBallot`](https://info.juicebox.money/dev/api/interfaces/ijbfundingcycleballot). Ballots specify the conditions that must be met for any proposed funding cycle reconfiguration to take effect. A Ballot can be written to incorporate strict community voting requirements in order to make funding cycle changes, or to simply add a required buffer period between when a change is proposed and when it can take effect.

**"Ballot Redemption Rate"** refers to a custom Redemption Rate (See Redemption Rate) which overrides the typical Redemption Rate if a Reconfiguration Ballot is currently active.

**"DAO"** means Decentralized Autonomous Organization. "DAO" or "The DAO" may refer to Peace DAO, a Delaware Unincorporated Nonprofit Association.

**"DAO Expenses"** refers to costs and expenses related to the activities, maintenance and operation of the DAO. [_See Section 7(b)(i) of The Agreement._](#7-fees-and-expenses).

**"Dapp"** refers to online portals or other interactive software used by the DAO, individuals, and any other entities to create, manage, contribute to, or otherwise interact with Juicebox Treasuries or to interact with the Juicebox Protocol. Governance activities which are performed within the DAO's Snapshot Spaces on Snapshot.org or other Snapshot servers are also considered to be Dapp activities.

**"Data Source"** refers to Ethereum Smart Contracts which adhere to [`IJBFundingCycleDataSource`](https://info.juicebox.money/dev/api/interfaces/ijbfundingcycledatasource). A Data Source can customize what happens when a payment to a Juicebox Project is attempted during a Funding Cycle, and what happens when a Token redemption is attempted during a Funding Cycle.

**"Discount Rate"** The percent to automatically decrease the subsequent cycle's Weight from the current cycle's Weight. The Discount Rate is not applied during funding cycles where the Weight is explicitly reconfigured.

**"Distribution Limit" and "Funding Target"** refer to the amount of tokens that a Juicebox Project can distribute per Funding Cycle, and the currency which that amount is denominated in.

**"Funding Cycle Duration"** How long each funding cycle lasts (specified in seconds). All funding cycle properties are unchangeable while the cycle is in progress. In other words, any proposed reconfigurations can only take effect during the subsequent cycle. If no reconfigurations were submitted by the project owner, or if proposed changes fail the current cycle's Ballot, a copy of the latest funding cycle will automatically start once the current one ends. A cycle with no duration lasts indefinitely, and reconfigurations can start a new funding cycle with the proposed changes right away.

**"Funding Cycle" and "Cycle"** refer to the time-locked rules according to which a Juicebox Project wishes to operate. Funding Cycles are typically represented as a [`JBFundingCycle`](https://info.juicebox.money/dev/api/data-structures/jbfundingcycle) data structure, and are usually managed by the [`JBFundingCycleStore`](https://info.juicebox.money/dev/api/contracts/jbfundingcyclestore/) contract. Funding Cycle duration can be specified in seconds ("Funding Cycle Duration"). Funding Cycle properties are unchangeable while the cycle is in progress. In other words, any proposed reconfigurations can only take effect during the subsequent cycle. If no reconfigurations were submitted by the Project Owner, or if proposed changes fail the current cycle's Ballot, a copy of the latest Funding Cycle will automatically start once the current one ends. A Funding Cycle with no duration lasts indefinitely; valid reconfigurations to Funding Cycles with no duration immediately start a new Funding Cycle with the proposed changes once approved by a Reconfiguration Ballot if necessary.

**"Governance Rights"** means the entire interest of a Member in the DAO, as measured by a Member's Tokens, including, without limitation, all rights and obligations contemplated or agreed to under this Agreement, and any right to vote on, consent to, or otherwise participate in any decision or action of or by the Members granted by this Agreement or the Act. Member's Governance Rights are subject to [DAO Governance](/peace/governance/process).

**"Hold Fees"** refers to the fee holding process: by default, Protocol Fees are paid automatically when funds are distributed from a Juicebox Treasury to an Ethereum address. During Funding Cycles configured to hold fees, this fee amount is set aside instead of being immediately processed. Projects can reclaim their held fees by adding funds to their Treasury equal to the amount of funds distributed to Ethereum addresses while fees were being held. Otherwise, Juicebox DAO or the project can process these held fees at any point to issue JBX at the current rate. This allows a project to withdraw funds and later add them back into their the DAO treasury without incurring fees. This applies to both Distributions from the Distribution Limit and from the Overflow Allowance.

**"Majority Vote"** means the approval of Members holding at least a majority-in-interest of all JBX Tokens.

**"Member"** means each Person entering into this Agreement as a member or subsequently admitted as a member pursuant to the terms of this Agreement, but does not include any Person that has ceased to be a Member of the DAO. If at any time there is only one Member, then all references to "Members" shall be deemed to mean "Member."

**"Non-Fungible Tokens", "NFT", or "NFTs"** means a cryptographic token based on the Ethereum ERC-721 standard, the ERC-1155 standard, or a similar standard or other blockchain-based asset.

**"Overflow"** refers to funds in a Juicebox Treasury in excess of its current Distribution Limit. A Project's Overflow can be reclaimed by redeeming that Project's Tokens, subject to a Project's Redemption Rate and other Project configurations.

**"Overflow Allowance"** The amount of treasury funds that the Project Owner can distribute on-demand. This allowance does not reset each Funding Cycle. Instead, it lasts until the Project Owner explicitly proposes a reconfiguration with a new allowance. The protocol charges a Protocol Fee on funds withdrawn from the network. Overflow allowances can be specified in any currency that the [`JBPrices`](https://info.juicebox.money/dev/api/contracts/jbprices/) contract has a price feed for.

**"Payouts", "Distributions", and "Payout Splits"** refer to the distribution of Treasury assets from a Juicebox Project Treasury to other Juicebox Projects or to external Ethereum addresses, or addresses on other blockchains. Payouts to Ethereum addresses invoke fees, the payment of which issues JBX Tokens in accordance with Juicebox DAO's Treasury configurations ("Fees" or "Protocol Fee"). Protocol Fees can range from 0% to 5% of Payout amounts to Ethereum addresses. As of August 4th 2022, Protocol Fees are equal to 2.5% of Payout amounts to Ethereum addresses.

**"Pause Payments", "Pause Distributions", "Pause Redemptions", and "Pause Burn"** each refer to Treasury functions which Project Owners can pause in a Funding Cycle. These functions are not paused by default.

**"Person"** means an individual, corporation, association, partnership, joint venture, limited liability company, estate, trust, or any other legal entity.

**"Proceeding"** means any action, claim, suit, investigation, or proceeding by or before any court, arbitrator, governmental body, self-regulatory agency, or other agency.

**"Project", "Juicebox Project", "Treasury", and "Member Project"** refer to projects deployed using the Juicebox protocol including any administrative NFTs, Project configurations, Protocol extensions, digital assets, and tokens associated with those projects.

**"Project Owner" and "Project Owners"** refer to the individual or individuals with administrative access to configure one or more Juicebox Project(s). This includes individuals with access to Ethereum addresses holding one or more administrative ERC-721s issued by a Smart Contract which adheres to [`IJBProjects`](https://info.juicebox.money/dev/api/interfaces/ijbprojects), as well as individuals with access to Ethereum addresses which have been granted permissions to take specific indexed actions via a Smart Contract which adheres to [`IJBOperatorStore`](https://info.juicebox.money/dev/api/interfaces/ijboperatorstore).

**"Project Token" and "Token"** refer to tokens and token balances stored in a Smart Contract which adheres to [`IJBTokenStore`](https://info.juicebox.money/dev/api/interfaces/ijbtokenstore) or tokens which adhere to [`IJBToken`](https://info.juicebox.money/dev/api/interfaces/ijbtoken), including tokens issued by the Juicebox Protocol.

**"Protocol", "Juicebox Protocol", and "Juicebox v2"** refer to the Smart Contracts built and maintained by Juicebox DAO, as well as other ancillary Smart Contracts ("Protocol Extensions" or "Extensions"). This includes deployed Ethereum mainnet and Rinkeby testnet Smart Contracts with addresses listed at https://info.juicebox.money/dev/resources/addresses, as well as other Smart Contracts with source code copied or modified from the Smart Contracts currently and/or previously available at https://github.com/jbx-protocol.

**"Redemption Rate", "Redemption Curve", or "Bonding Curve"** refers to a bonding curve along which Juicebox Protocol calculates redemption from a Treasury. The Redemption Rate can be configured by a Project Owner each funding cycle. A rate of 100% suggests a linear proportion, meaning X% of treasury overflow can be reclaimed by redeeming X% of the token supply.

**"Representative"** means a member, manager, officer, director, partner, employee, or agent.

**"Reserved Rate" or "Reserved Tokens"** refers to the percentage of newly minted tokens that a project wishes to withhold for custom distributions. The Project Owner can pre-program a list of addresses, other Projects, and contracts that adhere to [`IJBSplitAllocator`](https://info.juicebox.money/dev/api/interfaces/ijbsplitallocator) to split reserved tokens between.

**"Service Provider"** means the Person appointed by the DAO to perform administrative services, responsibilities, and duties to carry on the DAO's operations. The initial Service Provider shall be decided by the DAO.

**"Smart Contract"** refers to computer programs stored on the Ethereum blockchain or other blockchains.

**"Start Timestamp"** refers to the time at which the funding cycle is considered active. Projects can configure the start time of their first funding cycle to be in the future and can ensure reconfigurations don't take effect before a specified time. Once a funding cycle ends, a new one automatically starts right away. If there's an approved reconfiguration queued to start at this time, it will be used. Otherwise, a copy of the current funding cycle will be used.

**"Weight"** is a number used to determine how many project tokens should be minted and transferred when payments are received during a Funding Cycle. In other words, Weight is the exchange rate between the project token and a currency (defined by a [`JBPayoutRedemptionPaymentTerminal`](https://info.juicebox.money/dev/api/contracts/or-payment-terminals/or-abstract/jbpayoutredemptionpaymentterminal/)) during a Funding Cycle. Project owners can configure this directly or allow it to be automatically derived from the previous funding cycle's Weight and Discount Rate.

</details>

### Introduction.

These guiding principles constitute an Agreement (hereinafter the **"Agreement"**) and are entered into by and amongst members of PeaceDAO (hereinafter **"PeaceDAO"**, **"DAO"** or **"☮️DAO"**), an unincorporated nonprofit association organized under the laws of the State of Delaware.

The following terms apply when you click to view or access DAO's Dapp or DAO's online services (including https://peace.move.xyz) (collectively, **"the DAO Services"** or **"Services"**), donate or transfer cryptocurrencies such as Ethereum, or transfer one or more ERC-20 (**"Tokens"**) or ERC-721 (**"NFTs"**) or other digital assets (collectively, **"Cryptographic currencies"**) to the DAO, become a Member of DAO, receive DAO Tokens, hold Governance Rights for the DAO, interact with or access [the DAO's smart contracts](addresses) in any way, provide services to the DAO, donate or transfer any property to the DAO, or otherwise interact with or access the DAO's current or future services. The DAO's governance is currently hosted on [Peace DAO's Snapshot Space](https://snapshot.org/#/peace.movedao.eth), however for the purpose of this agreement we refer to this as part of the DAO Service.

**By doing any of the above, you signify your agreement to these terms. If you do not agree to be bound by the Agreement in its entirety, you may not access, interact with, or use the DAO Dapp or online services.**

Capitalized terms used herein have the meanings ascribed to them in the [Definitions](#definitions).

### 1. Organization.

**(a) Formation.** The DAO was formed on March 15, 2021. The obligations of members of the DAO shall be determined pursuant to the Delaware Uniform Unincorporated Nonprofit Association Act, Del. Code Ann. Tit. 6, §§ 1901-1916 inclusive (the **"Act"**), and this Agreement.

**(b) Purpose.** Peace DAO's purpose is to fund life-saving assistance and support for refugees of war and internally displaced people.

The DAO is an unincorporated association of individuals, corporations, statutory trusts, business trusts, estates, trusts, partnerships, limited liability companies, associations, joint ventures, and other legal or commercial entities, many of whom, if not all of whom, agree to join together for a common, nonprofit purpose. For the DAO, that purpose is encapsulated in its mission statement.

**The DAO is not intended to be or become an entity required to register as an “investment company” as defined in Section 3(a)(1)(A) of the Investment Company Act of 1940, as amended.**

_See the [Peace DAO Intro](/peace)._

### 2. Membership; Governance Rights and Tokens; Limitations.

**(a) Governance Rights.** Governance Rights in the DAO are represented by Project Tokens, with each Token representing a fractional part of the Governance Rights of all Members (or assignees, as the case may be) equal to the quotient of one (1) divided by the total number of Tokens claimed at any time. Member's Governance Rights are subject to [DAO Governance](/peace/governance/process).

**(b) Tokens.** As of the date hereof, there shall be an allowance of up to the max number of an unsigned integer or 2<sup>256-1</sup>[^1], tokens authorized to represent membership interests in the DAO, unless otherwise agreed to and by the Members via a vote occurring through the Dapp. Membership in the DAO, as defined bey Del. Code Ann. Tit. 6, § 1901, shall be voluntary and open to any individual whose purpose or presumed intent is to contribute to the DAO and is willing to accept responsibilities and terms of membership. The DAO shall grant the initial Member's governance voting tokens proportional to total contributions to the [Peace Treasury](https://juicebox.money/p/peace), which in turn governs the Gnosis multi-signature wallet[^2].

Notwithstanding the foregoing or any other provision of this Agreement, the DAO may provide initial members Tokens for their role in conceiving and supporting the DAO.

**(c) Limitation to the DAO Protocol Configuration.** The DAO shall not configure its Juicebox Treasury with an undefined Reserved Rate, a Reserved Rate of 0%, a Redemption Rate of 100%, or a Discount Rate other than 0%. Within reason, the DAO shall not configure its Juicebox Treasury with any parameters that would cause the capital value of Token Redemptions via the Redemption Rate to exceed the cost basis required to issue those Tokens from the DAO's Juicebox Treasury.

**(d) Admission.** The DAO is a decentralized network of members and may admit or deny membership to individuals for any arbitrary purpose or lack of purpose.

All of the DAO's governing Members shall have their membership determined upon receipt of voting tokens acquired on a public blockchain via the DAO's Juicebox Project management page (“Cryptographic Units”, and such holders, “Members”). Cryptographic Units are used for participating in and improving the governance of the DAO through affirmative votes effectuated via the Designated Smart Contract (defined herein) (such process, “Cryptographic Consensus”) or more commonly, Snapshot, the popular off-chain voting protocol ("Snapshot"). Once the DAO's admission requirements are met, a prospective Member's full membership may be put up to a DAO vote. The DAO will consistently review admissions, and if necessary, Members may make adjustments to the DAO admission requirements based on their evolving needs and as registered in a successful vote through the Designated Smart Contract. Notwithstanding, the DAO may admit all individuals who hold the DAO token by capturing an inventory of all current holders and ratifying the membership at Governance intervals from time to time.

**(e) Token Liquidity Pools.** The DAO shall not create any Liquidity Pools.

**(f) Governance Rights and Token Limitations.** Governance Rights and the governance Tokens provide no possibility of profits and losses, no rights to distributions and dividends, and no rights to ownership or management of the DAO. Each Member (or assignees, as the case may be) that receives or holds governance Tokens expressly and unequivocally agrees that the Tokens provide no rights to profits and/or losses, that the Tokens do not entitle their holder to distributions or dividends, and that the Tokens do not make their holder an owner or manager of the DAO.

**(g) Token Reserved Rate.** Notwithstanding the foregoing or any other provision of this Agreement, contributors to the DAO shall be entitled to receive Reserved Rate Tokens by a vote of the Members, via the Reserved Tokens list, as defined by the DAO's Juicebox Project configuration. Each Member expressly and unequivocally agrees to 2(f) above.

**(h) Responsibilities.** As of the date hereof, Members are not required to submit to any dues or membership fees. However, in the event the Members agree otherwise via a vote occurring through the Dapp or Snapshot, each Member shall keep reasonably current in payment of any dues or membership fees and other financial obligations of membership, if applicable and determined by the DAO. Each Member shall notify the DAO of a Discord, Twitter, or other acceptable communication channel by which such Member may receive written or electronic materials required or permitted by this document, or shall notify the DAO that such Member lacks the standard acceptable addresses and designate a mutually acceptable form of communication.

**If you have received any Tokens or are otherwise a Member, you consent and agree to become legally bound by this Agreement as both a participant in the DAO and more specifically a DAO "Member".**

**(i) Information Rights.** Members shall have access to all information concerning operational and financial affairs of the DAO via

> **The Etherscan Mainnet Gnosis Multi-Signature Wallet** `0xD2427c0e44D28Ea74c0504E072c6073d135569B2`,
>
> **An Ethereum Block Explorer** `https://etherscan.io/address/0xD2427c0e44D28Ea74c0504E072c6073d135569B2`,
>
> **The DAO Juicebox Project Page** `https://juicebox.money/p/peace`, and
>
> **The DAO Snapshot** `https://snapshot.org/#/peace.movedao.eth`.

### 3. Liability.

**(a) No Member Liability.** Except as otherwise provided in this Agreement or the Act, no Member (or former Member) shall be personally liable for the obligations of the DAO, including any obligations owed by any such Member in connection with any breach of this Agreement. A debt, obligation, or other liability of the DAO is solely the debt, obligation, or other liability of the DAO. Members (or former Members) are not personally liable, directly or indirectly, by way of contribution or otherwise, for a debt, obligation, or other liability of the DAO solely by reason of being or acting as a Member or acting on behalf of the DAO. The failure of the DAO to observe formalities relating to the exercise of its powers or management of its activities and affairs is not grounds for imposing liability on a Member of the DAO for a debt, obligation, or other liability of the DAO.

**(b) Member Limitations.** No Member shall have the right or power:

> **(i)** to cause the dissolution and winding up of the DAO; or
>
> **(ii)** to demand or receive property, including any Cryptographic Currency or ERC-20 or ERC-721 Tokens ("Cryptocurrency assets") donated or otherwise transferred to the DAO, except as agreed to by the Members or otherwise provided herein.

### 4. Admission of Additional Members.

**(a)** Subject to the provisions of this Agreement, the Members are authorized to accept additional donations from one or more Members, and to admit other Persons to the DAO as additional Members (each such additional Member and such existing Member is an "Additional Member"). Unless otherwise determined by the Members, any such Additional Members shall be admitted to the DAO only if such Member or Additional Member makes a donation via the Dapp.

**(b) Accession to Agreement.** Each Person who is to be admitted as an Additional Member pursuant to this Agreement shall agree to be bound by all of the terms of this Agreement as if they were a member from the inception of the DAO.

### 5. Management.

**(a)** Except as otherwise expressly required in this Agreement, the affairs of the DAO shall be carried on and managed exclusively by the Members, who shall have sole and absolute discretion with respect thereto. No Member shall be a manager, as defined under the Act.

**(b)** Whenever any action, including any approval, consent, decision, determination, or resolution is to be taken or given by the Members or the DAO under this Agreement or under the Act, it shall be authorized by a vote of the Members via the Dapp or the DAO's Snapshot Spaces, unless otherwise provided herein. Such an authorization may be evidenced by a vote facilitated via the Dapp or the DAO's Snapshot Spaces and one or more smart contracts, or by a written consent, in accordance with this Agreement. The Members intend that any action (which has been duly approved in accordance with this Agreement) taken by the DAO via a Dapp, a smart contract, or the blockchain shall be a valid action of the Members or the DAO, as applicable, and no Member shall challenge the authority or validity of any such action based solely on such fact.

**(c)** Except as otherwise expressly required in this Agreement or in the Act, no single Member (in their capacity as a Member) shall have authority to bind the DAO in any way or to enter into any agreement or contract obligating the DAO in any way unless approved via a vote occurring through the Dapp.

**(d)** To the extent that the Members have approved a document in accordance with the terms of this Agreement and the Act, any Member can be expressly hereby authorized to execute and deliver such document on behalf of the DAO.

**(e)** Members may appoint a proxy to vote or otherwise act for the Member with regards to the DAO pursuant to the Dapp.

**(f)** The DAO has the right to delegate certain technical or administrative responsibilities to third parties and provide them with reasonable compensation.

**(g)** Reliance by Third Parties. Persons dealing with the DAO are entitled to rely conclusively upon the power and authority of the Members (and any Person to whom the Members delegated any such power and authority pursuant to this Agreement) and acknowledge that such Member or designee is authorized to act on behalf of the DAO and may bind the DAO or otherwise enter into a binding contract.

**(h) Other Activities.** Each Member acknowledges and agrees that in addition to transactions specifically contemplated by this Agreement, and subject to applicable law, the Members, the DAO, and their respective Affiliates and Representatives are each hereby authorized to obtain property or obtain services from, to provide property or provide services to, or otherwise enter into any transaction with any Member, or any Affiliate or Representative of any of the foregoing Persons.

### 6. Withdrawal Rights; Compulsory Withdrawal.

**(a) Limited Right to Withdraw.** A Member may withdraw at any time by transferring its Tokens to a third party. Such withdrawal shall be facilitated and executed, in part, using one or more smart contracts and shall be effective as of the date of transfer. Any withdrawal is irrevocable. Alternatively, a Member may redeem the entirety of the Tokens held, which are submitted to the Juicebox Protocol and burned, thereby reducing the total Token supply. In return, the Member receives some portion of their initial or cumulative DAO Membership holdings in Ethereum (or other Cryptographic Currency). A Member who burns the entirety of their token holdings shall be deemed to have withdrawn from the DAO. The DAO shall not be obligated to pay any interest or other compensation to a Member who redeems or withdraws its Tokens.

**(b) Compulsory Withdrawal.** Not in limitation of Section 6(a), the Members acting by vote via the Dapp may cause a Member to be compulsorily withdrawn from the DAO to the extent that such Members, in their reasonable discretion, determine it to be necessary, desirable, or appropriate, including, without limitation, to comply with applicable law or regulations, or to avoid a material adverse effect on the DAO or the other Members. For the avoidance of doubt–the Member proposed to be compulsorily withdrawn shall be entitled to vote with respect to any vote of the Members regarding such compulsory withdrawal.

**(c) Emergency Immediate Compulsory Withdrawal For Cause.** Not in limitation of Section 6(a), 6(b), any Member may, in their reasonable discretion, withdraw from the DAO if that member determines withdrawal to be necessary, desirable, or appropriate, including, without limitation, to comply with applicable law or regulations, or to avoid a material adverse effect on the DAO or the other Members.

### 7. Fees and Expenses.

**(a) Organizational Expenses.** The DAO shall bear all of its organizational expenses and costs, and may amortize these expenses for accounting and/or tax purposes.

**(b) Operating Expenses.**

> **(i)** The DAO shall bear all costs and expenses relating to its activities, maintenance, and operations, including, without limitation, all fees, expenses, and costs associated (directly or indirectly) with the acquiring, holding, monitoring, and commissioning of artwork, identifying DAO opportunities to fulfil its purpose and any extraordinary expenses (including, without limitation, litigation-related and indemnification expenses), legal, regulatory, research, consulting, compliance, auditing, accounting, and other professional fees and expenses, the costs of any administrator, the costs of any reporting to Members, expenses of any administrative proceedings undertaken by the applicable Member in its capacity, expenses incurred in connection with the dissolution, liquidation, and termination of the DAO, and other expenses related to the DAO as determined by the Members by a vote via the Dapp (collectively, and together with organizational expenses, the "DAO Expenses").
>
> **(ii)** DAO Expenses shall be allocated to and funded by the DAO.

### 8. Distributions; Dividends; Compensation.

**(a)** The DAO shall not make any distributions of any kind and it will not pay dividends of any kind to any Member or director/officer or other person who may have an ownership interest in the DAO.

**(b)** The DAO may pay reasonable compensation or reimburse reasonable expenses to a Member or third-party for services rendered, confer benefits on a Member or third party in conformity with its nonprofit purposes, repurchase a membership and repay a capital contribution made by a Member to the extent authorized by this Agreement, or make distributions of property to Members upon winding up and termination to the extent permitted by this Agreement.

### 9. Dissolution.

**(a) General.** The DAO shall be dissolved and its affairs shall be wound up upon the earliest to occur of:

> **(i)** a determination of the Members by Majority Vote; or
>
> **(ii)** the entry of a decree of judicial dissolution pursuant to the Act.

**(b)** Upon the dissolution of the DAO, assets shall be distributed for one or more exempt purposes within the meaning of section 501(c)(3) of the Internal Revenue Code or the corresponding section of any future federal tax code and consistent with the goals and purpose of the DAO, or shall be distributed to the federal government, or to a state or local government, for a public purpose. Any such assets not so disposed of shall be disposed of by a court of competent jurisdiction of the county in which the principal office of the corporation is then located, exclusively for such purposes or to such organization or organizations, as said Court shall determine, which are organized and operated exclusively for such purposes.

### 10. Limitations on Transfers.

**(a) Transfers.** Governance Rights and Tokens are not transferable, except to other members. Members may vote to allow or disallow the ability of Members to transfer their Governance Rights and/or Tokens by a vote facilitated via the Dapp. Tokens may become freely transferable to Ethereum addresses outside of the DAO ("External Addresses") by a vote of the Members. In the event the Tokens become freely transferable to External Addresses, you agree that holders of the External Address shall automatically be granted Membership rights, subject to this Agreement.

**(b) Admission of Substituted Members.** If the transferee is not already a Member, any transferee of Tokens transferred in accordance with the provisions of this Section shall be admitted as a Member. The DAO shall not recognize for any purpose any purported transfer of all or any part of a Member's interest or Tokens in the DAO, and no purchaser, assignee, transferee, or other recipient of all or any part of such Tokens shall become a Member hereunder unless:

> **(i)** The transferee of Tokens transferred pursuant to this Section that is admitted to the DAO as a transferee Member shall succeed to the rights and liabilities of the transferor Member with respect to such transferred Tokens.
>
> **(ii)** Effect of Death, Dissolution, or Bankruptcy. Upon the death, incompetence, bankruptcy, insolvency, liquidation, or dissolution of a Member, the rights and obligations of that Member under this Agreement shall accrue to that Member's successor(s), estate, or legal representative, and each such Person shall be treated as an unadmitted transferee of that Member's Tokens, as described in the Act.

### 11. Books and Records; Accounting and Tax Matters.

The DAO shall not be obligated to keep any books or records beyond what is made available via the Dapp or available via the Ethereum blockchain.

### 12. Waiver of Fiduciary Duties.

**(a)** Except as expressly set forth in this Section, in the event that any Member initiates any Proceeding against the DAO and a judgment or order not subject to further appeal or discretionary review is rendered in respect of such Proceeding, as the case may be, such Member shall be solely liable for all costs and expenses related to the Proceeding.

**(b)** Limitation by Law. No provision of this Agreement shall be construed to provide for the indemnification for any liability to the extent (but only to the extent) that such indemnification would be in violation of applicable law, but instead shall be construed so as to effectuate the provisions thereof to the fullest extent permitted by law.

> **(c)** Waiver of Fiduciary Duties. To the fullest extent permitted by applicable law, notwithstanding any other provision of this Agreement or otherwise of applicable law, including any in equity or at law, no Member shall have any fiduciary duty to the DAO or to any Member by reason of this Agreement or in its capacity as a Member, except that the Members shall be subject to the implied contractual covenant of good faith and fair dealing and the terms and provisions of this Agreement. The provisions of this Agreement, to the extent that they restrict or eliminate the duties and liabilities of the Members otherwise existing at law or in equity, are agreed by the parties hereto to replace such other duties and liabilities of the Members. Members will exercise any rights under this Agreement consistent with this Agreement.

### 13. Intellectual Property Rights.

**(a) Grant of Rights.** Members that join the DAO grant to the DAO a perpetual, non-exclusive, royalty-free license and right, and all ancillary and subsidiary rights therein and thereto, throughout the world, to use, edit, modify, include, incorporate, adapt, record, reproduce, display, and archive any copyrightable work associated with any written copy, source code, illustrations, and artwork (the "Work") in any manner whatsoever, in or out of context, by any and all means and/or devices and in any and all media now or known hereafter–all in connection with the production, exhibition, distribution, exploitation, advertising, marketing, publicity, and promotion of the DAO and its Purpose. The term of this license begins whenever an contribution is made through the DApp by a Person entering into this Agreement as a member or is subsequently admitted as a member pursuant to the terms of this Agreement (i.e., any and all Members).

**(b) Reservation of Rights.** All rights in any copyrightable works not specifically granted to the DAO here are reserved by the donating Member. Specifically, the DAO acknowledges that its use of the Work will not affect the Member's continued and separate copyright ownership in the Work, and that the Member may use and license others to use the Work otherwise and elsewhere.

**(c) Representations and Warranties, Indemnification.** The Member represents and warrants that it is the owner of the entirety of the rights in and to the Work and that the Member has the full authorization and authority to enter into this Agreement and grant the licenses herein. No other rights, permissions, or consents are necessary for the DAO to use the Work in accordance with the licenses granted herein, and no fees, royalties, or use payments of any kind are due to the Member or third parties in connection with the exercise of the licenses granted herein. The Member guarantees that the Work does not infringe any copyright or trademark, and that the Work does not violate any privacy, personal, proprietary, common law, or statutory right, of any Person. Licensor shall indemnify and hold Licensee (and its agents, Affiliates, assigns, heirs, or other successors in interest) harmless from any claim, loss, liability, damage, or expense (including reasonable attorneys' fees) arising out of any claim, lawsuit, or demand which is inconsistent with or arises out of warranties or representations in this Section.

**(d) Limited Field of Use.** Members' Work, notwithstanding the preceding provisions, **Grant of Rights 13.(a)** which is used by the DAO, shall limit the use insofar as it furthers the Purpose of the DAO. The field of use of the Work shall be limited to the Purpose as defined in **1. Organization.** The DAO shall not use the Work for any other purpose.

### 14. Derivative Matters.

**(a) No Derivative Actions.** No Member shall have the right to bring any action or proceeding in any court or before any arbitrator or other tribunal against the DAO or any other Member on account of any alleged or actual breach of this Agreement or any other agreement or instrument to which the DAO is a party or by which it is bound, or for any other purpose whatsoever, except as expressly provided in this Agreement.

### 15. Amendments.

**(a)** Except as otherwise provided herein, the terms and provisions of this Agreement may be amended only with the prior consent of Members acting by a vote via the Dapp.

**(b)** Amendments to this Agreement shall be made available via the Dapp.

### 16. Service Providers.

**(a) Appointment and Compensation of Service Providers.** The DAO shall have the right to appoint Service Providers to perform administrative services, responsibilities, and duties to carry on the DAO's operations, including maintenance of the Dapp and underlying smart contracts. The DAO shall have the right to provide Service Providers with reasonable compensation.

**(b) Limitation of Liability.** Notwithstanding anything contained in this Agreement to the contrary, any Service Provider of DAO shall not be liable for any error of judgment, mistake of law, or for any loss suffered by the DAO, its Members, Persons affiliated with the DAO or its Members, or third parties in connection with the matters to which this Agreement relates or for any services provided by a Service Provider, except for a loss resulting from a Service Provider's willful misfeasance, gross negligence, or reckless disregard in the performance of its duties under this Agreement. Furthermore, Service Providers shall not be liable for:

> **(i)** any action taken or omitted in accordance with or in reliance upon written or oral instructions, advice, data, documents, or information (without investigation or verification) received by Service Providers from any Person;
>
> **(ii)** any liability arising from the transfer or use of any Governance Rights or Tokens, including with respect to matters arising under applicable laws or private rights of action; or
>
> **(iii)** any action taken or omitted by the DAO, its Members, any affiliated Persons of the DAO or its Members, or any third party.

### 17. General Provisions.

**(a) Notices.** Subject to Section 5, all notices required to be delivered under this Agreement shall be effective only if sent via Discord, Twitter, or another acceptable communication channel. In computing the period of time for the giving of any notice, the day on which the notice is given shall be excluded, and the day on which the matter noticed is to occur shall be included. If notice is given by electronic means, it shall be deemed given when sent; provided, that the sending party does not have reason to believe that such notice was not delivered.

**(b) Further Assurance.** Each Member agrees to perform all further acts and to execute, acknowledge, and deliver any document (including tax forms and information) that may reasonably be necessary to carry out the provisions of this Agreement.

**(c) Interpretation.** Unless otherwise indicated to the contrary herein by the context or use thereof the words, "herein," "hereto," "hereof," and words of similar import refer to this Agreement as a whole and not to any particular section or paragraph hereof; words importing the masculine gender shall include the feminine and neutral genders, and vice versa; and words importing the singular shall include the plural, and vice versa; plural forms of singular defined terms shall have corresponding meanings and singular forms of plural defined terms shall have corresponding meanings; the section headings contained in this Agreement are for reference purposes only and shall not affect the interpretation of this Agreement; references to statutes or regulations include amendments and successor or replacement statutes or regulations.

**(d) Severability.** If any term or provision of this Agreement or any application of this Agreement shall be declared or held invalid, illegal, or unenforceable, in whole or in part, whether generally or in any particular jurisdiction, such provision shall be deemed amended to the extent, but only to the extent, necessary to cure such invalidity, illegality, or unenforceability, and the validity, legality, and enforceability of the remaining provisions, both generally and in every other jurisdiction, shall not in any way be affected or impaired thereby.

**(e) Binding Agreement.** This Agreement shall be binding upon and inure to the benefit of the parties and their respective heirs, executors, administrators, successors, permitted assigns, trustees, and legal representatives.

**(f) Creditors.** None of the provisions of this Agreement shall be for the benefit of, or enforceable by, any creditor of any Member or of the DAO. No creditor who makes a loan to the DAO may have or acquire, as a result of making the loan, any direct or indirect interest in the DAO's property.

**(g) Waiver.** Any term or condition of this Agreement may be waived at any time by the party or parties entitled to the benefit thereof, but only by a writing signed by the party or parties waiving such term or condition. No waiver of any provision of this Agreement or of any right or benefit arising hereunder shall be deemed to constitute or shall constitute a waiver of any other provision of this Agreement (whether or not similar), nor shall any such waiver constitute a continuing waiver, unless otherwise expressly so provided in writing.

**(h) Waiver of Partition; No Bill for DAO Accounting.** Each Member hereby irrevocably waives any and all rights that it may have to maintain an action for partition of any of the DAO's property. Each Member covenants that it shall not file a bill for DAO accounting.

**(i) Limitation of Liability.** Except for any remedies that cannot be excluded or limited by law, no party, or its agent, Affiliate, assigns, heirs, or other successors in interest, will be liable under this Agreement to another party, or that party's agent, Affiliate, assigns, heirs, or other successors in interest, or other third party, for any special, reliance, punitive, indirect, incidental, or consequential damages or lost or imputed profits, lost data, lost property, or any costs and fees. This limitation of liability may not be valid in some jurisdictions. Parties to this Agreement may have rights that cannot be waived under some laws. The DAO and its Members do not seek to limit the DAO's or Members' warranties or remedies to any extent not permitted by law.

**(j) Governing Law; Jurisdiction; Venue.** Notwithstanding the place where this Agreement may be executed by any of the parties hereto, the parties expressly agree that all of the terms and provisions hereof shall be construed in accordance with and governed by the laws of the State of Nevada, without giving effect to the principles of choice or conflicts of laws thereof that would require that this Agreement be governed by the laws of another state. Each of the parties hereto consents and agrees to the exclusive personal jurisdiction of any state or federal court sitting in Nevada, and waives any objection based on venue or forum non conveniens with respect to any action instituted therein, and agrees that any dispute concerning the conduct of any party in connection with this Agreement shall be heard only in the courts described above.

**(k) Arbitration.** In consideration of the promises in this agreement, the parties agree that any and all controversies, claims, or disputes with anyone (including the DAO and any employee, officer, director, shareholder or benefit plan of the company in their capacity as such or otherwise) arising out of, relating to, or resulting from this Agreement, shall be subject to binding arbitration under the arbitration rules set forth in Nevada law and thereby agrees to waive any right to a trial by jury, include any statutory claims under state or federal law, including, but not limited to, claims under title vii of the civil rights act of 1964, the Americans with Disabilities Act of 1990, the Age Discrimination in Employment Act of 1967, the Older Workers Benefit Protection Act, the Worker Adjustment and Retraining Notification Act, discrimination or wrongful termination and any statutory claims. The parties further understand that this Agreement to Arbitrate also applies to any disputes that the DAO may have with a Member.

**(l) Procedure.** The parties agree that any arbitration will be administered by the American Arbitration Association (“AAA”) and that the neutral arbitrator will be selected in a manner consistent with its national rules for the resolution of employment disputes. The parties agree that the Arbitrator shall have the power to decide any motions brought by any party to the arbitration, including motions for summary judgment and/or adjudication and motions to dismiss and demurrers, prior to any arbitration hearing. The parties also agree that the arbitrator shall have the power to award any remedies, including attorneys’ fees and costs, available under applicable law. The parties understand that they shall share equally in paying for the administrative or hearing fees charged by the arbitrator or AAA. The parties agree that the Arbitrator shall administer and conduct any arbitration in a manner consistent with the rules and that to the extent that the AAA’s national rules for the resolution of employment disputes conflict with the rules, the rules shall take precedence. The parties agree that the decision of the Arbitrator shall be in writing.

**(m) Entire Agreement.** This Agreement (including the exhibits hereto) supersedes any and all other understandings and agreements, either oral or in writing, among the parties with respect to the subject matter hereof and constitutes the sole agreement among the parties with respect thereto, including but not limited to the Original Agreement.

**(n) Amendment.** This Agreement may not be amended, modified, or revoked, in whole or in part, or any provisions waived, except via a vote occurring through the Dapp.

**(o) Securities Laws Matters.** THE TOKENS HAVE NOT BEEN REGISTERED UNDER THE SECURITIES ACT OF 1933, AS AMENDED, STATE SECURITIES LAWS, OR THE LAWS OF ANY COUNTRY OUTSIDE THE UNITED STATES. THEY PROVIDE NO RIGHT TO ANY PROFITS OR LOSSES OF THE DAO NOR IS THERE A REASONABLE EXPECTATION OF PROFIT FROM BUYING OR RECEIVING THE TOKENS. THE TOKENS ONLY PROVIDE THE HOLDER WITH GOVERNANCE RIGHTS THAT ARE SPECIFICALLY LIMITED IN THIS AGREEMENT.

**(p) Communication by Electronic Means.** Unless otherwise required by law or by agreement, any notice, vote, consent, petition, or other oral or written communication required or permitted can be delivered by electronic means, provided that, in the case where such communication expressly or impliedly requires the signature of the person submitting the communication, means are in place to reasonably assure the authenticity of the signature, including Cryptographic signatures.

[^1]: The maximum number of 115792089237316195423570985008687907853269984665640564039457584007913129639935
[^2]: Gnosis Multi-Signature Wallet, :eth:0xAF28bcB48C40dBC86f52D459A6562F658fc94B1e
