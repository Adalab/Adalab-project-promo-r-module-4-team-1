import '../styles/layout/FormDesign.scss';

function formDesign(props) {
  const handleDesign = (ev) => {
    props.handleInput(ev.target.name, ev.target.value);
  };

  const handleClick = (ev) => {
    props.handleCollapsed(ev.currentTarget.id);
    if (ev.currentTarget.id === 'desing') {
      props.setCollapsed('design');
    }
  };

  // const [formDesing, setFormDesing] = useState("");

  // const handleClickDesing = (ev) => {
  //   ev.preventDefault();
  //   if (formDesing === "design__second js-design") {
  //     setFormDesing("hidden");
  //   } else {
  //     setFormDesing("design__second js-design");
  //   }
  // };

  return (
    <fieldset className="design">
      <div className="design__div" onClick={handleClick} id="design">
        <i className="fa-solid fa-object-ungroup design__div--icon"></i>
        <legend className="design__div--legend">diseña</legend>
        <i
          className={`fa fa-shield fa-shield-up share__div--arrow js-arrow js-arrow-share-up ${
            props.collapsed === 'design' ? ' null ' : 'arrow-share-rotate'
          }`}
        ></i>

        {/* <i className="fa fa-shield design__div--arrow js-arrow js-arrow-design-down collapsed"></i> */}
      </div>

      <div
        className={`design__second js-design ${
          props.collapsed === 'design' ? null : 'hidden'
        }`}
      >
        <div className="div2_container">
          <div className="div2">
            <ul className="div2__palette">
              <label className="div2__palette--checkBox">wonder adalaber</label>
              <input
                type="radio"
                id="green"
                name="palette"
                className="js-palette2 p1 div2__palette--input"
                value="1"
                checked={props.object.palette === '1'}
                onChange={handleDesign}
              />
              <li className="div2__palette--darkGreen div2__palette--list"></li>
              <li className="div2__palette--mediumGreen div2__palette--list"></li>
              <li className="div2__palette--lightGreen div2__palette--list"></li>
            </ul>
          </div>
          <div className="div2">
            <ul className="div2__palette">
              <label className="div2__palette--checkBox">super frontend</label>
              <input
                type="radio"
                id="red"
                name="palette"
                className="js-palette2 p2 div2__palette--input"
                value="2"
                checked={props.object.palette === '2'}
                onChange={handleDesign}
              />
              <li className="div2__palette--darkRed div2__palette--list"></li>
              <li className="div2__palette--mediumRed div2__palette--list"></li>
              <li className="div2__palette--lightRed div2__palette--list"></li>
            </ul>
          </div>
          <div className="div2">
            <ul className="div2__palette">
              <label className="div2__palette--checkBox">backend woman</label>
              <input
                type="radio"
                id="random"
                name="palette"
                className="js-palette3 p3 div2__palette--input"
                value="3"
                checked={props.object.palette === '3'}
                onChange={handleDesign}
              />
              <li className="div2__palette--greenThree div2__palette--list"></li>
              <li className="div2__palette--yellowThree div2__palette--list"></li>
              <li className="div2__palette--greyThree div2__palette--list"></li>
            </ul>
          </div>
        </div>
      </div>
    </fieldset>
  );
}

export default formDesign;
