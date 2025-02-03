import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";

const Home = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Kuntur</a>
            </li>
            <li>
              <a href="#">Domos</a>
            </li>
            <li>
              <a href="#">Tarifas</a>
            </li>
            <li>
              <a href="#">Actividades</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Bienvenidos a</h1>
          <p>La escapada que necesitás.</p>
        </section>

        <section className="experience">
          <h2>Viví la experiencia KUNTUR</h2>
          <p>
            Llevamos la experiencia de glamping al siguiente nivel, manteniendo
            la simbiosis perfecta entre naturaleza y confort.
          </p>
        </section>

        <section className="domos">
          <article className="domo">
            <img src="Ihome/INTI.jpg" alt="Domo Inti" />
            <h3>Domo INTI</h3>
            <p>
              Concepto único para 2 personas que buscan una escapada romántica.
            </p>
            <a href="#">Ver más</a>
          </article>
          <article className="domo">
            <img src="Ihome/WASI.jpg" alt="Domo Wasi" />
            <h3>Domo WASI</h3>
            <p>
              Diseñado para quienes desean una experiencia inolvidable en
              familia o con amigos.
            </p>
            <a href="#">Ver más</a>
          </article>
        </section>
      </main>

      <footer className="footer">
        <div className="social-icons">
          <a
            href="https://www.facebook.com/kunturdomo"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>

          <a
            href="https://wa.me/5493513535117"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
        <p>WhatsApp: +54 9 3513535117</p>
        <p>Email: kuntur.domo@gmail.com</p>
      </footer>
    </>
  );
};

export default Home;
