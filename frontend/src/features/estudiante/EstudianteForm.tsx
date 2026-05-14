import { useEffect, useState } from "react";

// Este componente representa el formulario específico para `Estudiante`.
// Objetivo: leer `solicitudid` desde la query string y mostrarlo en la vista.
export default function EstudianteForm() {
  // `solicitudId` mantiene el valor obtenido de la URL. Se muestra en pantalla
  // para confirmar que el flujo desde `InicioForm.tsx` pasó correctamente el id.
  const [solicitudId, setSolicitudId] = useState<string | null>(null);

  useEffect(() => {
    // Leer la query string de la ubicación actual.
    const params = new URLSearchParams(window.location.search);
    const id = params.get("solicitudid");
    setSolicitudId(id);
  }, []);

  return (
    <main className="p-6">
      <h1 className="mb-4 text-xl font-bold">Formulario - Estudiante</h1>
      <p className="mb-2">Identificador de solicitud recibido:</p>
      <pre className="rounded border bg-gray-50 p-3">{solicitudId ?? "(no provisto)"}</pre>
    </main>
  );
}
