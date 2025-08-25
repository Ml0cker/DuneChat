## DuneChat – How to use

- **What it is**: Send short on‑chain messages to a wallet on Base (requires a tiny ETH fee).

## Requirements
- **Wallet**: MetaMask or any supported EVM wallet
- **Network**: Base mainnet
- **Funds**: A small amount of ETH on Base (e.g., `0.00001+`)

## Open a chat
1. Go to the homepage.
2. Enter a wallet address in the form `0x` + 40 hex characters.
   - Any case is accepted; it will be auto‑converted to EIP‑55 checksum.
   - The “Open chat” button enables only when the format is valid.
3. Click **Open chat**.

Direct link format:

```text
/dunechat/<address>
```

## Connect and switch network
1. Click **Connect** to link your wallet.
2. If prompted, click **Switch to Base** and approve in your wallet.

## Send a message
1. Type your message.
2. Set the ETH amount (default `0.00001`). A small payment is required to send.
3. Click **Send**, then confirm the transaction in your wallet.
4. Wait for confirmation — your message is recorded on‑chain.

## Chat header
- The recipient address may be visually shortened. Use **Copy** to copy the full address.

## Troubleshooting
- **Button disabled**: Ensure the address matches `0x` + 40 hex chars.
- **Invalid address**: Fix typos; it checksums automatically once valid.
- **Wrong network**: Use the switch button to move to Base.
- **Insufficient funds**: Top up a small amount of ETH on Base.
- **No wallet**: Install MetaMask (or compatible) and refresh.


