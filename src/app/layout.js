// src/app/layout.js
import "./styles/globals.css";

export const metadata = {
  title: "Camino Elevado",
  description: "Explora libros, música y recursos únicos desde un solo lugar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
