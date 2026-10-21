import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { vantagens } from "@/data/compendio";
import { Card, Chips, Field, Grid, Page } from "@/components/ui";

export const Route = createFileRoute("/vantagens")({ component: VantagensPage });

const filtros = ["Todas", "Assassino", "Sobrevivente"];

function VantagensPage() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("Todas");

  const lista = useMemo(() => {
    const q = busca.trim().toLowerCase();
    return vantagens.filter((item) => {
      const texto = `${item.nome} ${item.dono}`.toLowerCase();
      const lado =
        filtro === "Todas" ||
        (filtro === "Assassino" && item.lado === "assassino") ||
        (filtro === "Sobrevivente" && item.lado === "sobrevivente");
      return lado && (!q || texto.includes(q));
    });
  }, [busca, filtro]);

  return (
    <Page
      kicker="Vantagens"
      title="O que mais aparece na fogueira."
      lede="Quatro espaços por lado. Estas são as que a comunidade mais leva, não a lista inteira do jogo. Nomes seguem o português do cliente."
    >
      <Field value={busca} onChange={setBusca} placeholder="Buscar vantagem ou dono" />
      <Chips options={filtros} value={filtro} onChange={setFiltro} />
      {lista.length === 0 ? (
        <p className="text-muted">Nenhuma vantagem com esse filtro.</p>
      ) : (
        <Grid>
          {lista.map((item) => (
            <Card
              key={item.nome}
              title={item.nome}
              aside={item.lado === "assassino" ? "Assassino" : "Sobrevivente"}
            >
              <p className="mb-2 font-medium text-ember">{item.dono}</p>
              <p className="text-muted">{item.resumo}</p>
            </Card>
          ))}
        </Grid>
      )}
    </Page>
  );
}
