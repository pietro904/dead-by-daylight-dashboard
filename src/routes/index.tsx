import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, Grid, Page } from "@/components/ui";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Page
      kicker="A prova"
      title="Quatro contra um, na névoa."
      lede="Quatro sobreviventes consertam geradores e fogem. Um assassino caça, pendura e entrega todos à Entidade."
    >
      <Grid>
        <Card title="Reparar" aside="Sobreviventes">
          Cinco dos sete geradores ligam os portões. Falhar o teste de perícia explode, avisa o assassino e devolve progresso.
        </Card>
        <Card title="Escapar" aside="Sobreviventes">
          Palete, janela, cura e item. Quando sobra um, o alçapão abre. Com o portão aberto começa o colapso final.
        </Card>
        <Card title="Caçar" aside="Assassino">
          Cada assassino tem um poder único. Dois golpes derrubam. Três ganchos sacrificam. O raio de terror entrega a posição.
        </Card>
        <Card title="O que consultar">
          <ul className="mt-1 space-y-2 text-muted">
            <li><Link to="/assassinos" className="text-bone underline decoration-ember/70 underline-offset-4">Assassinos</Link> e os poderes.</li>
            <li><Link to="/sobreviventes" className="text-bone underline decoration-ember/70 underline-offset-4">Sobreviventes</Link> e as vantagens que ensinam.</li>
            <li><Link to="/mapas" className="text-bone underline decoration-ember/70 underline-offset-4">Mapas</Link> por reino.</li>
            <li><Link to="/vantagens" className="text-bone underline decoration-ember/70 underline-offset-4">Vantagens</Link> que mais aparecem.</li>
            <li><Link to="/classificacao" className="text-bone underline decoration-ember/70 underline-offset-4">Tiers</Link> aproximados.</li>
          </ul>
        </Card>
      </Grid>
    </Page>
  );
}