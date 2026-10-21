import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { assassinos, type Faixa } from "@/data/compendio";
import { Card, Chips, FaixaBadge, Field, Grid, Page } from "@/components/ui";

export const Route = createFileRoute("/assassinos")({ component: Assassinos });

const filtros = ["Todos", "S", "A", "B", "C", "D", "Mobilidade", "Furtividade", "Distância", "Perseguição"];

function Assassinos() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("Todos");

  const lista = useMemo(() => {
    const q = busca.trim().toLowerCase();
    return assassinos.filter((item) => {
      const texto = `${item.nome} ${item.original} ${item.poder} ${item.estilo}`.toLowerCase();
      const bateBusca = !q || texto.includes(q);
      const bateFiltro =
        filtro === "Todos" || item.faixa === (filtro as Faixa) || item.estilo === filtro;
      return bateBusca && bateFiltro;
    });
  }, [busca, filtro]);

  return (
    <Page
      kicker="Assassinos"
      title="Quem caça na névoa."
      lede="Um poder por assassino. O tier é leitura de comunidade, não nota da Behaviour. Busque pelo nome em português ou pelo original."
    >
      <Field value={busca} onChange={setBusca} placeholder="Buscar assassino, poder ou estilo" />
      <Chips options={filtros} value={filtro} onChange={setFiltro} />
      {lista.length === 0 ? (
        <p className="text-muted">Ninguém com esse nome na lista.</p>
      ) : (
        <Grid>
          {lista.map((item) => (
            <Card
              key={item.original}
              title={item.nome}
              aside={item.original}
              badge={<FaixaBadge faixa={item.faixa} />}
              icone={item.icone}
            >
              <p className="mb-2 font-medium text-ember">{item.poder}</p>
              <p className="text-muted">{item.resumo}</p>
              <p className="mt-3 text-sm text-bone">{item.estilo}</p>
            </Card>
          ))}
        </Grid>
      )}
    </Page>
  );
}
