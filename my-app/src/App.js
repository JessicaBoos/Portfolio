import "./App.css";
import signature from "./signature.png";
import portrait from "./portrait.jpg";
import Projects from "./Projects.js";

function App() {
  return (
    <div className="App font-monospace">
      <nav
        class="navbar sticky-top navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={signature}
              alt="Logo"
              width="150"
              height="75"
              class="d-inline-block align-text-top"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact me!
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://github.com/JessicaBoos#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="App-header ">
        <div className="info-container">
          <div className="row">
            <div className="col-7">
              <span className="">
                <div className="fs-5">
                  Hi! Mein name is <strong>Jessica Boos </strong>und ich bin
                </div>
                <br />
                <div className="App-header-text ">
                  Frontend <br /> Developer.
                </div>
              </span>
              <div className="App-header-description fs-5">
                <br />
                mit Erfahrung in JavaScript, VSCode, GitHub, API, React.js und
                Bootstrap.
              </div>
            </div>
            <div className="col-4">
              <span className="App-header-img">
                <img src={portrait} className="img-fluid" />
              </span>
            </div>
          </div>
        </div>
      </header>
      <Projects />
    </div>
  );
}

export default App;
