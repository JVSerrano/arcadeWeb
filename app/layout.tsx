import type { Metadata } from "next";
import { Press_Start_2P, JetBrains_Mono, Courier_Prime } from "next/font/google";
import "./globals.css";

// Fuente pixel para titulos y elementos retro
const pressStart2P = Press_Start_2P({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
});

// Fuente monoespaciada principal del cuerpo de texto
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono-jetbrains",
  subsets: ["latin"],
});

// Fuente monoespaciada de respaldo, usada como fallback en la pila de --mono
const courierPrime = Courier_Prime({
  variable: "--font-mono-courier",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcade Vault · Portal Retro",
  description: "Juega en línea y compite por los puntajes más altos.",
};

// Layout raíz: envuelve todas las rutas de la app y monta el fondo/tema retro global
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${pressStart2P.variable} ${jetBrainsMono.variable} ${courierPrime.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <div className="av-bg" />
        <div className="av-noise" />
        <div id="root">
          <main className="av-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
