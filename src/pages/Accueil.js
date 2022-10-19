import logo from "./logo.svg";
import ellipse1 from "./ellipse1.svg";
import ellipse2 from "./ellipse2.svg";
import ellipse3 from "./ellipse3.svg";
import vector from "./vector.svg";

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
          <img src={vector} id="two" alt="book logo" class="vector" />
          <a className="dl" id="first" href="">
            Actualités
          </a>
        </div>
        <img src={ellipse2} id="two" alt="Gym logo" class="filtersvg2" />
      </div>
      <div class="logo">
        <img src={ellipse3} alt="Gym logo" class="filtersvg3" />
        <img src={logo} alt="Gym logo" class="logo_svg" />
        <img src={ellipse1} alt="Gym logo" class="filtersvg1" />
      </div>
    </div>
  );
}
