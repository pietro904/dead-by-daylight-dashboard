import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, Card, Grid } from "@/components/ui";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Page
      kicker="A prova"
      title="Quatro contra um, na névoa."
      lede="Dead by Daylight é uma prova assimétrica: quatro sobreviventes consertam geradores e fogem. Um assassino caça, pendura e entrega todos à Entidade. Este compêndio separa o essencial em páginas."
    >
      <Grid>
        <Card title="Reparar" aside="Sobreviventes">
          Cinco dos sete geradores ligam os portões. Falhar o teste de perícia explode, avisa o assassino e devolve progresso.
        </Card>
        <Card title="Escapar" aside="Sobreviventes">
          Palete, janela, cura e item. Quando sobra um, o alçapão abre. Com o portão aberto começa o colapso final.
        </Card>
        <Card title="Caçar" aside="Assassino">
          Cada assassino tem um poder único. Dois golpes derrubam. Três ganchos sacrificam. O raio de terror entrega a sua posição.
        </Card>
        <Card title="A fogueira" aside="Entre as provas">
          No menu real, o grupo espera em volta do fogo. Aqui o fundo é uma fogueira original, no mesmo clima: noite, névoa e brasa.
        </Card>
        <Card title="O que consultar">
          <ul className="mt-1 space-y-2 text-muted">
            <li><Link to="/assassinos" className="text-bone underline decoration-ember/70 underline-offset-4">Assassinos</Link> e os poderes.</li>
            <li><Link to="/sobreviventes" className="text-bone underline decoration-ember/70 underline-offset-4">Sobreviventes</Link> e as vantagens que ensinam.</li>
            <li><Link to="/mapas" className="text-bone underline decoration-ember/70 underline-offset-4">Mapas</Link> por reino.</li>
            <li><Link to="/vantagens" className="text-bone underline decoration-ember/70 underline-offset-4">Vantagens</Link> que mais aparecem.</li>
            <li><Link to="/classificacao" className="text-bone underline decoration-ember/70 underline-offset-4">Classificação</Link> aproximada.</li>
          </ul>
        </Card>
        <Card title="Aviso" aside="Referência, não regra oficial">
          Nomes em português do Brasil, com o nome original ao lado. Faixas mudam a cada atualização. Não é site da Behaviour Interactive.
        </Card>
      </Grid>
    </Page>
  );
}
