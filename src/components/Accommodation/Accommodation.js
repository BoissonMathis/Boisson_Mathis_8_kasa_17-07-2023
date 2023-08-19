import "../Accommodation/Accommodation.scss";
import { Link } from "react-router-dom";

function Accommodation({ id, title, alt, src }) {
  return (
    <article className="accommodation">
      <Link to={`/accomodation/${id}`} className="font24">
        <img src={src} alt={alt} className="accommodation-cover" />
      </Link>

      <span className="accommodation-title">{title}</span>
    </article>
  );
}

export default Accommodation;
