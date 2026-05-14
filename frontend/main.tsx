import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import InicioForm from "./src/forms/InicioForm";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el contenedor root");
}

  createRoot(rootElement).render(
    <StrictMode>
      <InicioForm />
    </StrictMode>
  );