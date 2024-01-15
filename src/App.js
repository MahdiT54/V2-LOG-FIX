import "./App.css";
import v2logo from "./assets/v2-logo-2.png";

function App() {
  return (
    <>
      <header>
        <a href="/">
          <figure className="v2__logo">
            <img className="v2__logo--img" src={v2logo} alt="" />
          </figure>
        </a>
      </header>
      <main>
        <form id="login">
          <div className="login-input">
            <input type="text" placeholder="Username" />
          </div>
          <div className="login-input">
            <input type="text" placeholder="Password" />
          </div>
          <div className="login-submit">
            <button type="submit">Login</button>
          </div>
        </form>
      </main>
      <footer>
        <div className="footer__wrapper">
          <div className="footer__text">© 2024 V2 Logistics Corp.</div>
        </div>
      </footer>
    </>
  );
}

export default App;
