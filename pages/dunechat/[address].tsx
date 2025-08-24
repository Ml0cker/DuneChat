import { useState } from "react";
import { useRouter } from "next/router";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xde13b6590b3bb837d3248924e9b60d1ecf4a077d";
const ABI = [
  "function sendMessage(address chatCreator, string messageText) payable",
];

export default function ChatPage() {
  const router = useRouter();
  const { address } = router.query;

  const { isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  const [message, setMessage] = useState("");
  const [valueEth, setValueEth] = useState("0.00001");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!window.ethereum) return alert("MetaMask not found");
    if (!address) return;

    try {
      setLoading(true);

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

      const valueWei = ethers.parseEther(valueEth);

      const tx = await contract.sendMessage(address, message, {
        value: valueWei,
      });

      await tx.wait();
      alert("Message sent!");
    } catch (err: any) {
      console.error(err);
      alert("Error: " + (err.message || err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: 680 }}>
        <h1 className="title">Chat: {address as string}</h1>
        <p className="subtitle">Connect wallet and switch to Base chain to send a message.</p>

        <div className="row" style={{ marginBottom: 12 }}>
          <ConnectButton />
        </div>

        {isConnected && chainId !== 8453 && (
          <button className="btn btn-accent" onClick={() => switchChain({ chainId: 8453 })}>
            Switch to Base
          </button>
        )}

        {isConnected && chainId === 8453 && (
          <div className="stack">
            <input
              className="input"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="row">
              <input
                className="input"
                style={{ maxWidth: 200 }}
                type="number"
                step="0.00001"
                min="0.00001"
                value={valueEth}
                onChange={(e) => setValueEth(e.target.value)}
                placeholder="ETH value"
              />
              <button disabled={loading} className="btn btn-success" onClick={sendMessage}>
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
            <span className="hint">A small amount of ETH is required to send.</span>
          </div>
        )}
      </div>
    </div>
  );
}
