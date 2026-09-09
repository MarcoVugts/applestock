export default function Home() {
  return (
    <main>
      <p className="eyebrow">Live comparison</p>
      <h1>Apple stock: onchain vs. Wall Street</h1>
      <p className="subtitle">
        Apple&apos;s tokenized stock trades around the clock onchain on Base,
        while Nasdaq only trades during market hours. Both series here refresh
        every 15 minutes, so you can watch the onchain price keep moving
        pre-market, after-hours, and around events like an Apple keynote
        &mdash; while the traditional market is closed.
      </p>

      <div className="legend">
        <span className="legend-item">
          <span className="dot onchain" />
          Onchain (Base) &mdash; trades 24/7, 15-min refresh
        </span>
        <span className="legend-item">
          <span className="dot market" />
          Nasdaq (AAPL) &mdash; market hours only, 15-min refresh
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
