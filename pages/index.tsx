import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import { getAddress } from "viem";

export default function Home() {
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const isHexAddressFormat = useMemo(() => /^0x[0-9a-fA-F]{40}$/.test(address.trim()), [address]);

  const handleGo = () => {
    const raw = address.trim();
    if (!raw) return;

    try {
      // Normalize to EIP-55 checksum. Accepts lowercase/uppercase input.
      const normalized = getAddress(raw as `0x${string}`);
      setError("");
      router.push(`/dunechat/${normalized}`);
    } catch {
      setError("Invalid wallet address. Expected 0x + 40 hex chars.");
    }
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
          {!!error && <span className="hint" style={{ color: "tomato" }}>{error}</span>}
          <div className="row">
            <button className="btn btn-primary" onClick={handleGo} disabled={!isHexAddressFormat}>
              Open chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
