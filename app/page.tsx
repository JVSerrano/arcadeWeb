// Home placeholder con el tema retro de Arcade Vault (pendiente de reemplazar por la biblioteca real)
export default function Home() {
  return (
    <div className="av-hero">
      <h1 className="pixel">
        Arcade <span className="neon-cyan">Vault</span>
      </h1>
      <p className="sub">
        <span className="neon-magenta">Inserta moneda</span>{" "}
        <span className="blink neon-yellow">_</span>
      </p>
      <div className="detail-actions" style={{ justifyContent: "center", marginTop: 32 }}>
        <button className="btn">Jugar ahora</button>
        <button className="btn magenta">Salón de la fama</button>
        <button className="btn ghost">Iniciar sesión</button>
      </div>
    </div>
  );
}
