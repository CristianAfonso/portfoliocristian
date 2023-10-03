
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [mode, setMode] = useState(true);
  return (
    <div>
      <main>
        <h1>
          Bienvenido al portfolio de Cristian Afonso
        </h1>
        <h2>
          Este sitio se encuentra bajo construcción, creado mediante nextjs
        </h2>
        <p>
          En esta web podrás conocerme un poco más así como ver parte de mi
          trabajo como desarrollador de aplicaciones web
        </p>

        <div>
          <Link href="/githubRepository">
            <h3>Mi GitHub &rarr;</h3>
            <p>
              Encuentra una lista de mis repositorios de GitHub desde esta misma
              web utilizando la API de GitHub
            </p>
          </Link>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}
