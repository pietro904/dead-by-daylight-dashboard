import { createFileRoute } from "@tanstack/react-router";
import { mapas } from "@/data/compendio";
import { Card, Grid, Page } from "@/components/ui";

export const Route = createFileRoute("/mapas")({ component: Mapas });

function Mapas() {
  return (
    <Page
      kicker="Reinos"
      title="Onde a Entidade acende a prova."
      lede="Cada reino junta um ou mais mapas. O clima diz, em linhas gerais, para qual lado o terreno pende quando os dois sabem jogar."
    >
      <Grid>
        {mapas.map((mapa) => (
          <Card key={mapa.reino} title={mapa.reino} aside={mapa.clima}>
            <p className="mb-2 text-bone">{mapa.mapas}</p>
            <p className="text-muted">{mapa.nota}</p>
          </Card>
        ))}
      </Grid>
    </Page>
  );
}
