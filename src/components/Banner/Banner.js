import "../Banner/Banner.scss";

function Banner(props) {
  return (
    <section className={"banner banner" + props.page}>
      <img src={props.src} alt="" className="cover" />
      <span className="banner-title font48">{props.span}</span>
    </section>
  );
}

export default Banner;
