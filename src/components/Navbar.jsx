import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [location] = useLocation();

  const linkClass = (path) => (location === path ? "text" : "text-supporting");

  return (
    <div className="flex flex-row py-6 text-sm w-full justify-between max-w-xl mx-auto px-3">
      <div className="flex gap-4">
        <Link href="/">
          <a className={linkClass("/")}>Projects</a>
        </Link>
        <Link href="/works">
          <a className={linkClass("/works")}>Works</a>
        </Link>
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/aleganza"
          target="_blank"
          title="GitHub"
          className="underline text-supporting"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/alessio-ganzarolli-87425a240"
          target="_blank"
          title="LinkedIn"
          className="underline text-supporting"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://aleganza.dev/Alessio_Ganzarolli_Resume.pdf"
          target="_blank"
          title="Resume"
          className="underline text-supporting"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
