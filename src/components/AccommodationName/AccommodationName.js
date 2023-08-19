import "../AccommodationName/AccommodationName.scss";

function AccommodationName(props) {
  return (
    <div className="accommodation-name">
      <h1 className="font36 accommodation-name-title">{props.title}</h1>
      <h2 className="font18 accommodation-name-location">{props.location}</h2>
    </div>
  );
}

export default AccommodationName;
