---
title: Documentation
---

This directory contains high-level documentation for the DAOLABS application ("Dapp") stack.

### Sitewide

- A navbar with L: `Discover`, `Start a Project`, `Learn` and R: `Search`, language selector, night mode toggle, and `Connect`.
- Footer with GitHub, privacy policy, ToS, social links, etc.

### Home (/)

The Home page is a landing page, and the first page users are met with. It includes:

1. A brief Dapp explainer and CTAs to (i) create a project and (ii) to discover existing projects.
2. Protocol/Dapp stats (# of projects, amount raised, # of payments).
3. A "featured projects" section containing a CTA to browse projects (direct to explore page).
4. A more detailed overview of project creation and experience.
5. Further FAQs.

### Discover (/discover)

The Discover page curates and presents projects, collections, and users. Users are presented with a number of filtering options above the screen—see [Kickstarter](https://www.kickstarter.com/discover/)'s discover page for an example. For the Dapp, these fields could read: "Show me `CATEGORY` `TYPE` sorted by `SORTING`", with modifications for additional filters. Again, see Kickstarter's discover page. As an example, the default could be: "Show me all projects, sorted by total raised".

### Project (/@handle)

A customizable Project page is created for each project on the Dapp. The Project page contains several tabs:

#### Home

A project's home tab contains an overview of the project and its characterizing configurations. When creating a project, creators prescribe a name, description, logo, and links as metadata to be prominently displayed on the project's home tab. The home page also contains:

- A "pay" button which allows users to contribute funds to the project's treasury.
- An overall trust score for the project.
- Brief mention of the project's custody and basic configurations (e.g. "onchain governance, owned by smart contract" or "Snapshot voting, owned by Gnosis Safe at `example.eth` with signers . . .").
- Basic dashboard-style information about the project (e.g. # of token holders, total volume, total distributed, date created, etc.). This information should be communicated graphically if possible. More complex information should be left to the treasury page.

#### Treasury

The treasury tab displays an overview of treasury inflows and outflows, as well as specific treasury configuration information—this can be likened to a [juicebox.money project page](https://juicebox.money/@juicebox). This tab clearly displays any additional terminals and information pertaining to those terminals.

#### Store

The store tab displays NFT collections associated with the project.

#### Govern

The govern tab displays active governance proposals associated with the project, and allows users to vote on those proposals. Projects can elect to utilize offchain governance (a la Snapshot) or onchain governance (onchain governance solution not yet decided).

#### Documents

The documents tab displays documents which are relevant to a project. This might include a mission statement, a governance process, a road map, guiding principles, or several legal agreements for DAO members. These documents should all be templated to the extent possible.

### Collection (/c/handle)

An NFT collection's page displays an overview of the collection and its characterizing configurations. When creating a collection, creators prescribe a name, description, logo, and links as metadata to be prominently displayed on the associated collection page. The collection page also contains:

- A scrolling showcase of various NFTs in the collection. In the case of an edition mint, one NFT is showcased.
- A "purchase" section. This could be a mint button, or a bid button in the case of an auction.
- Basic dashboard-style information about the collection (e.g. # of NFTs, # of holders, collection type, total volume, date created, etc.). This information should be communicated graphically if possible.

### User (/u/handle)

A User's page displays basic user information. Users can customize their name, description, logo, and links as metadata to be prominently displayed on their user page. The page also contains:

- "Trust" score
- Projects associated with the user (via ownership, creation, governance participation, token holding, etc.)
- Collections associated with the user (via creation, ownership, minting, purchase, sale, etc.)
- Documents associated with the user (resume/CV, legal agreements, etc.)

### Create (/create)
