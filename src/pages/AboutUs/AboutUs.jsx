import Banner from "../../components/Banner/Banner";
import DropDown from "../../components/DropDown/DropDown";
import BannerImg from "../../assets/BannerImg/imgBanner2.png";
import "../Style/Page.scss";
import "../AboutUs/AboutUs.scss";
import AboutUsData from "../../datas/AboutUsData";

function AboutUs() {
  return (
    <div>
      <div className="body">
        <Banner src={BannerImg} page={"AboutUs"} />

        <section className="drop-down-section">
          {AboutUsData.map((element, i) => (
            <DropDown
              title={element.title}
              content={[element.content]}
              key={element + i}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
