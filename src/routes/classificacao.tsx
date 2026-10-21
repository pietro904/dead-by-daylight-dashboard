import { createFileRoute } from "@tanstack/react-router";
import { faixasAssassino, iconeDe } from "@/data/compendio";
import { Card, FaixaBadge, Grid, Page } from "@/components/ui";

export const Route = createFileRoute("/classificacao")({ component: Classificacao });

function Classificacao() {
  return (
    <Page
      kicker="Tiers"
      title="Quem está na frente agora."
      lede="Leitura aproximada do meta recente, não um ranking oficial. Mapa, acessório e quem está do outro lado movem qualquer assassino um tier para cima ou para baixo."
    >
      <Grid>
        {faixasAssassino.map((faixa) => (
          <Card
            key={faixa.faixa}
            title={`Tier ${faixa.faixa}`}
            badge={<FaixaBadge faixa={faixa.faixa} />}
          >
            <ul className="mb-3 flex flex-wrap gap-2">
              {faixa.nomes.split(", ").map((nome) => {
                const icone = iconeDe(nome);
                return (
                  <li
                    key={nome}
                    className={`inline-flex items-center gap-2 rounded-full bg-surface py-1 text-sm text-bone ${icone ? "pr-3 pl-1" : "px-3"}`}
                  >
                    {icone ? <img src={icone} alt="" className="h-7 w-7 rounded-full object-cover" /> : null}
                    {nome}
                  </li>
                );
              })}
            </ul>
            <p className="text-muted">{faixa.leitura}</p>
          </Card>
        ))}
        <Card title="Sobreviventes que valem prestigiar" aside="Pelo que ensinam">
          <p className="text-muted">
            Kate pela Janela de Oportunidade, Meg pela Arrancada e pela Adrenalina, Zarina pelo Fora de Gravação, Jeff pela Distorção e Mikaela pelas bênçãos. O corpo é o mesmo. A conta muda com as vantagens.
          </p>
        </Card>
      </Grid>
    </Page>
  );
}