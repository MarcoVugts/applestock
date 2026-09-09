export default function Home() {
  return (
    <main>
      <h1>Apple stock: onchain vs. Wall Street</h1>
      <p className="subtitle">
        AAPL on Base, trading 24/7, vs. Nasdaq, market hours only &mdash; both
        refreshed every 15 minutes.
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
