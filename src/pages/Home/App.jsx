import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import BannerImg from "../../assets/BannerImg/imgBanner1.png";
import "../Style/Page.scss";

function App() {
  return (
    <div>
      <div className="body">
        <Banner src={BannerImg} span="Chez vous, partout et ailleurs" />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
