# Snapshot Strategies

[Peace DAO's Snapshot space](https://snapshot.org/#/peace.movedao.eth) employs three strategies:

## Contract Call

`contract-call` with the following parameters:

```json
{
	"args": ["%{address}", "0x210"],
	"symbol": "PEACE",
	"address": "0xee2eBCcB7CDb34a8A822b589F9E8427C24351bfc",
	"decimals": 18,
	"methodABI": {
		"name": "balanceOf",
		"type": "function",
		"inputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"stateMutability": "view"
	}
}
```

## ERC-721 With Multiplier

`erc721-with-multiplier` with the following parameters:

```json
{
	"symbol": "PEACE",
	"address": "0x1c43E7Fb2885d9FF4403521eAE41d7943F7f51Ee",
	"multiplier": 200000
}
```

## Delegation

`delegation` with the following parameters:

```json
{
	"symbol": "PEACE (delegated)",
	"strategies": [
		{
			"name": "contract-call",
			"params": {
				"args": ["%{address}", "0x210"],
				"symbol": "PEACE",
				"address": "0xee2eBCcB7CDb34a8A822b589F9E8427C24351bfc",
				"decimals": 18,
				"methodABI": {
					"name": "balanceOf",
					"type": "function",
					"inputs": [
						{
							"name": "",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "",
							"type": "uint256",
							"internalType": "uint256"
						}
					],
					"outputs": [
						{
							"name": "",
							"type": "uint256",
							"internalType": "uint256"
						}
					],
					"stateMutability": "view"
				}
			}
		},
		{
			"name": "erc721-with-multiplier",
			"params": {
				"symbol": "PEACE",
				"address": "0x1c43E7Fb2885d9FF4403521eAE41d7943F7f51Ee",
				"multiplier": 250000
			}
		}
	]
}
```
