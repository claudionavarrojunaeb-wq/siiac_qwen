import { useMemo } from "react";

// Formulario para `Red Colaboradora`.
// Lee y muestra `solicitudid` proporcionado por la pantalla anterior.
export default function RedForm() {
  const solicitudId = useMemo(() => new URLSearchParams(window.location.search).get("solicitudid"), []);

  return (
    <main className="p-6">
      <h1 className="mb-4 text-xl font-bold">Formulario - Red Colaboradora</h1>
      <p className="mb-2">Identificador de solicitud recibido:</p>
      <pre className="rounded border bg-gray-50 p-3">{solicitudId ?? "(no provisto)"}</pre>
    </main>
  );
}
