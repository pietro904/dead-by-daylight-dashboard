import { createFileRoute } from "@tanstack/react-router";
import { faixasAssassino } from "@/data/compendio";
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
            <p className="mb-2 text-bone">{faixa.nomes}</p>
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
