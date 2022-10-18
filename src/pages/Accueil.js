import logo from "./logo.svg";

export default function Accueil() {
  return (
    <div className="Flex_page">
      <div className="home">
        <div className="title">
          <h1>ETOILE</h1>
          <h1>GOUSSAINVILLOISE</h1>
        </div>
        <div className="text">
          <p className="textpad">
            Club affilié à la Fédération Française de Gymnastique.
          </p>
          <p>La Gymnastique permet de développer force,</p>
          <p>souplesse, grâce, ainsi qu’une très bonne </p>
          <p>coordination des mouvements.</p>
        </div>
        <div className="boxdl">
          <a className="dl" href="">
            Actualités
          </a>
        </div>
        <div className="filter"></div>
      </div>
      <div class="logo">
        <img src={logo} alt="Gym logo" class="logo_svg" />
        <div className="filter2"></div>
      </div>
    </div>
  );
}
