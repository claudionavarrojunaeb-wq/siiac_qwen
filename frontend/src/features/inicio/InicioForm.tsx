import { type SyntheticEvent, useEffect, useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearSolicitud } from "../solicitud/solicitudService";

type CitizenTypeOption = {
  id: number;
  label: string;
};

const citizenTypeOptions: CitizenTypeOption[] = [
  { id: 1, label: "Estudiante (beneficiario o no beneficiario)" },
  { id: 2, label: "Padre, Madre, Tutor(a) o apoderado(a)" },
  { id: 3, label: "Red Colaboradora" },
  { id: 4, label: "Otro" },
];

const routeMap: Record<number, string> = {
  1: "/EstudianteForm",
  2: "/PadreForm",
  3: "/RedForm",
  4: "/OtroForm",
};

export default function InicioForm() {
  const selectId = useId();
  const navigate = useNavigate();

  const [selectedUserType, setSelectedUserType] = useState("");
  const [campaignHtml, setCampaignHtml] = useState("");
  const [isCampaignLoading, setIsCampaignLoading] = useState(true);
  const [campaignError, setCampaignError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let ignore = false;

    const loadCampaign = async () => {
      try {
        setIsCampaignLoading(true);
        setCampaignError("");

        const response = await fetch("/api/campana-activa");
        if (!response.ok) throw new Error();

        const data = await response.json();

        if (!ignore) {
          setCampaignHtml(data.campaignHtml ?? "");
        }
      } catch {
        if (!ignore) {
          setCampaignError("No fue posible cargar la campaña vigente.");
        }
      } finally {
        if (!ignore) setIsCampaignLoading(false);
      }
    };

    loadCampaign();
    return () => {
      ignore = true;
    };
  }, []);

  const isNextDisabled = selectedUserType === "";

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isNextDisabled) return;

    try {
      setIsSubmitting(true);

      const solicitudId = await crearSolicitud(Number(selectedUserType));

      const target = routeMap[Number(selectedUserType)] ?? "/";
      navigate(`${target}?solicitudid=${solicitudId}`);
    } catch (error) {
      console.error(error);
      alert("No fue posible continuar");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={selectId}>Tipo de usuario</label>

      <select
        id={selectId}
        value={selectedUserType}
        onChange={(e) => setSelectedUserType(e.target.value)}
      >
        <option value="">Seleccione</option>
        {citizenTypeOptions.map((o) => (
          <option key={o.id} value={o.id}>
            {o.label}
          </option>
        ))}
      </select>

      <button disabled={isNextDisabled || isSubmitting}>
        {isSubmitting ? "Enviando..." : "Siguiente"}
      </button>

      {isCampaignLoading && <p>Cargando campaña...</p>}
      {campaignError && <p>{campaignError}</p>}
      {campaignHtml && (
        <div dangerouslySetInnerHTML={{ __html: campaignHtml }} />
      )}
    </form>
  );
}