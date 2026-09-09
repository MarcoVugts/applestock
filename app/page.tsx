export default function Home() {
  return (
    <main>
      <p className="eyebrow">Live comparison</p>
      <h1>Apple stock: onchain vs. Wall Street</h1>
      <p className="subtitle">
        Apple&apos;s tokenized stock trades around the clock onchain on Base,
        while Nasdaq pricing only updates during market hours on a 15-minute
        delay. This chart lines the two up so you can see how the onchain
        price moves pre-market, after-hours, and around events like an Apple
        keynote &mdash; while traditional markets are closed.
      </p>

      <div className="legend">
        <span className="legend-item">
          <span className="dot onchain" />
          Onchain (Base) &mdash; trades 24/7
        </span>
        <span className="legend-item">
          <span className="dot market" />
          Nasdaq (AAPL) &mdash; 15-minute delayed
        </span>
      </div>

      <div className="chart-card">
        <div className="chart-frame-wrap">
          <iframe
            src="https://dune.com/embeds/8653974/12673196?darkMode=true"
            title="AAPL onchain (Base) vs. Nasdaq stock price"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>

      <footer>
        <span>Chart data via Dune</span>
        <a
          href="https://dune.com/embeds/8653974/12673196?darkMode=true"
          target="_blank"
          rel="noreferrer"
        >
          Open chart directly ↗
        </a>
      </footer>
    </main>
  );
}
