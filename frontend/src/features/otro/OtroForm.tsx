import { useMemo } from "react";

// Formulario para el tipo `Otro`.
// Lee `solicitudid` desde la query string y lo presenta en pantalla.
export default function OtroForm() {
  const solicitudId = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("solicitudid");
  }, []);

  return (
    <main className="p-6">
      <h1 className="mb-4 text-xl font-bold">Formulario - Otro</h1>
      <p className="mb-2">Identificador de solicitud recibido:</p>
      <pre className="rounded border bg-gray-50 p-3">{solicitudId ?? "(no provisto)"}</pre>
    </main>
  );
}
