export default function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--surface)',
      padding: '0.9rem 0',
      position: 'relative', zIndex: 2,
    }}>
      <div style={{
        display: 'flex', gap: '2.5rem',
        animation: 'marquee 22s linear infinite',
        whiteSpace: 'nowrap',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
            color: i % 2 === 0 ? 'var(--text3)' : 'var(--accent)',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            flexShrink: 0,
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
