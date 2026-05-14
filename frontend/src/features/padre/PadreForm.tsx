import { useMemo } from "react";

// Formulario para `Padre/Madre/Apoderado`.
// Muestra el `solicitudid` pasado por query para confirmar continuidad del flujo.
export default function PadreForm() {
  const solicitudId = useMemo(() => new URLSearchParams(window.location.search).get("solicitudid"), []);

  return (
    <main className="p-6">
      <h1 className="mb-4 text-xl font-bold">Formulario - Padre / Madre / Apoderado</h1>
      <p className="mb-2">Identificador de solicitud recibido:</p>
      <pre className="rounded border bg-gray-50 p-3">{solicitudId ?? "(no provisto)"}</pre>
    </main>
  );
}
