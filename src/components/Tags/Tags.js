import "../Tags/Tags.scss";

function Tags(props) {
  return (
    <div className="tags">
      <p className="font14">{props.tagsContent}</p>
    </div>
  );
}

export default Tags;
