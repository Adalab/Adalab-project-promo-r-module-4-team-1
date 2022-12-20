import "../styles/layout/CardSection.scss";
function Reset(props) {
  return (
    <button className="reset js-reset" onClick={props.btn}>
      <i className="reset-icon fa-regular fa-trash-can"></i>
      <p className="reset-text">reset</p>
    </button>
  );
}

export default Reset;
