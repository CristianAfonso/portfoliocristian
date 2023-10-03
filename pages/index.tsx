
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

          <a href="https://nextjs.org/learn" >
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}
