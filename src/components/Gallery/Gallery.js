import Accommodation from "../Accommodation/Accommodation";
import "../Gallery/Gallery.scss";
import accommodationList from "../../datas/AccommodationList";

function Gallery() {
  return (
    <section className="gallery">
      {accommodationList.map((accommodation) => (
        <Accommodation
          src={accommodation.cover}
          alt={accommodation.title}
          title={accommodation.title}
          id={accommodation.id}
          count={accommodation.id}
          key={accommodation.id}
        />
      ))}
    </section>
  );
}

export default Gallery;
