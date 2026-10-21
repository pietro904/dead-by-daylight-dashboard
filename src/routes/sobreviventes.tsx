import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { sobreviventes, type Faixa } from "@/data/compendio";
import { Card, Chips, FaixaBadge, Field, Grid, Page } from "@/components/ui";

export const Route = createFileRoute("/sobreviventes")({ component: Sobreviventes });

const filtros = ["Todos", "S", "A", "B"];

function Sobreviventes() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("Todos");

  const lista = useMemo(() => {
    const q = busca.trim().toLowerCase();
    return sobreviventes.filter((item) => {
      const texto = `${item.nome} ${item.vantagens}`.toLowerCase();
      const bateBusca = !q || texto.includes(q);
      const bateFiltro = filtro === "Todos" || item.faixa === (filtro as Faixa);
      return bateBusca && bateFiltro;
    });
  }, [busca, filtro]);

  return (
    <Page
      kicker="Sobreviventes"
      title="Quem corre, repara e ensina."
      lede="Todo sobrevivente corre na mesma velocidade. A diferença está nas três vantagens que ele ensina para a conta inteira quando sobe de prestígio."
    >
      <Field value={busca} onChange={setBusca} placeholder="Buscar sobrevivente ou vantagem" />
      <Chips options={filtros} value={filtro} onChange={setFiltro} />
      {lista.length === 0 ? (
        <p className="text-muted">Ninguém com esse nome na lista.</p>
      ) : (
        <Grid>
          {lista.map((item) => (
            <Card
              key={item.nome}
              title={item.nome}
              aside={item.original === item.nome ? undefined : item.original}
              badge={<FaixaBadge faixa={item.faixa} />}
              icone={item.icone}
            >
              <p className="mb-2 font-medium text-ember">{item.vantagens}</p>
              <p className="text-muted">{item.resumo}</p>
            </Card>
          ))}
        </Grid>
      )}
    </Page>
  );
}
