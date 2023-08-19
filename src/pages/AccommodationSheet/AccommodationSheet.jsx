import Carroussel from "../../components/Carroussel/Carroussel";
import AccommodationName from "../../components/AccommodationName/AccommodationName";
import Owner from "../../components/Owner/Owner";
import Rate from "../../components/Rate/Rate";
import Tags from "../../components/Tags/Tags";
import DropDown from "../../components/DropDown/DropDown";
import { useParams } from "react-router-dom";
import accommodationList from "../../datas/AccommodationList";

import "../Style/Page.scss";
import "../AccommodationSheet/AccommodationSheet.scss";

import redStar from "../../assets/desktop/redStar.png";
import greyStar from "../../assets/desktop/greyStar.png";

const AccommodationSheet = () => {
  const { id } = useParams();
  const {
    tags,
    description,
    equipments,
    location,
    rating,
    host,
    pictures,
    title,
  } = accommodationList.find((accomodation) => accomodation.id === id);
  const stars = [...Array(5).keys()]; // [0, 1, 2, 3, 4]

  return (
    <div>
      <div className="body accommodation-sheet-body">
        <div>
          <Carroussel pictures={pictures} />
        </div>

        <div className="accommodation-sheet-info">
          <div className="one">
            <AccommodationName title={title} location={location} />
          </div>

          <div className="row gap10 four">
            {stars.map((i) => (
              <Rate
                src={i < rating ? redStar : greyStar}
                alt={i < rating ? "red-star" : "grey-star"}
                key={i}
              />
            ))}
          </div>

          <div className="two">
            <Owner src={host.picture} owner={host.name} />
          </div>

          <div className="row gap10 tree">
            {tags.map((tag, index) => (
              <Tags tagsContent={tag} key={index} />
            ))}
          </div>
        </div>

        <div className="accommodation-sheet-drop-down-section">
          <div className="accommodation-sheet-drop-down">
            <DropDown
              key={"dropDown1"}
              title={"Description"}
              content={description}
            />
          </div>

          <div className="accommodation-sheet-drop-down">
            <DropDown
              key={"dropDown2"}
              title={"Équipements"}
              content={equipments}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationSheet;
