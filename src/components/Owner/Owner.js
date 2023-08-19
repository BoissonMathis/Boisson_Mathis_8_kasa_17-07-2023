import "../Owner/Owner.scss";

function Owner(props) {
  return (
    <div className="owner">
      <p className="owner-name red font18">{props.owner}</p>
      <img src={props.src} alt={props.alt} className="owner-picture" />
    </div>
  );
}

export default Owner;
