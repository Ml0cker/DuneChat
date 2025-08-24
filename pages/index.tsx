import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleGo = () => {
    if (!address) return;
    router.push(`/dunechat/${address}`);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">DuneChat</h1>
        <p className="subtitle">Enter a wallet address to open the chat.</p>
        <div className="stack">
          <input
            className="input"
            placeholder="Wallet address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="row">
            <button className="btn btn-primary" onClick={handleGo}>Open chat</button>
          </div>
        </div>
      </div>
    </div>
  );
}
