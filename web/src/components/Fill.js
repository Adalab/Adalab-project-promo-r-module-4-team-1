import '../styles/layout/FormFill.scss';
import GetAvatar from './GetAvatar';

const Fill = (props) => {
  const handleInput = (ev) => {
    props.handleInput(ev.target.name, ev.target.value);
  };

  //Función manejadora que usa la validación de mail, del componente App.js
  //añado span para los errores de datos de los inputs
  const handleOnBlurMailInput = (ev) => {
    props.isValidMail(ev);
  };

  const handleOnBlurLinkedinInput = (ev) => {
    props.isValidLinkedin(ev);
  };

  const handleOnBlurGithubInput = (ev) => {
    props.isValidGithub(ev);
  };

  const handleClick = (ev) => {
    props.handleCollapsed(ev.currentTarget.id);

    if (ev.currentTarget.id === 'fill') {
      props.setCollapsed('fill');
    }
  };
  // const [formFill, setFormFill] = useState("hidden");

  // const handleClickFill = (ev) => {
  //   ev.preventDefault();
  //   if (formFill === "js-fill") {
  //     setFormFill("hidden");
  //   } else {
  //     setFormFill("js-fill");
  //   }
  // };

  return (
    <fieldset className="fill">
      <div
        className="fill__container js-fill-title"
        onClick={handleClick}
        id="fill"
      >
        <i className="fa-regular fa-keyboard fill__container--icon"></i>
        <legend className="fill__container--legend">rellena</legend>
        <i
          className={`fa fa-shield fill__container--arrow js-arrow js-arrow-fill-up ${
            props.collapsed === 'fill' ? '  ' : ' arrow-fill-rotate '
          }`}
        ></i>
        {/* <i className="fa fa-shield fa-shield-up fill__container--arrow js-arrow js-arrow-fill-up collapsed"></i> */}
      </div>
      {/* */}
      {}
      <div className={`${props.collapsed === 'fill' ? null : 'hidden'}`}>
        <div className="fill__name">
          <label className="fill__name--label text-label" htmlFor="name">
            nombre completo{' '}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={`fill__name--inputName input js-name js-input ${
              props.validations.isInvalidName ? 'invalid-field' : ''
            }`}
            placeholder="Ej: Sally Jill"
            onChange={handleInput}
            value={props.person.name}
            required
          />
          <span
            className={`error-message ${
              props.validations.isInvalidName ? '' : 'hidden'
            }`}
          >
            * Campo inválido
          </span>
        </div>
        <div className="fill__job">
          <label className="fill__job--label text-label" htmlFor="job">
            puesto
          </label>
          <input
            type="text"
            id="job"
            name="job"
            className={`fill__job--inputJob input js-job js-input ${
              props.validations.isInvalidJob ? 'invalid-field' : ''
            }`}
            placeholder="Ej: Front-end unicorn"
            onChange={handleInput}
            value={props.person.job}
            required
          />
          <span
            className={`error-message ${
              props.validations.isInvalidJob ? '' : 'hidden'
            }`}
          >
            * Campo inválido
          </span>
        </div>

        <div className="fill__img">
          <label className="fill__img--label text-label" htmlFor="img">
            imagen de perfil
          </label>
          <label
            className="fill__img--inputImg input js-input action__upload-btn"
            htmlFor="img-selector"
          >
            <GetAvatar
              avatar={props.avatar}
              updateAvatar={props.updateAvatar}
            />
          </label>

          <input
            type="file"
            name=""
            id="img-selector"
            className="hidden js__profile-upload-btn"
          />
        </div>

        <div
          className="profile__preview js__profile-preview"
          style={{ backgroundImage: `url(${props.avatar})` }}
        ></div>

        <div className="fill__email">
          <label className="fill__email--label text-label" htmlFor="email">
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={`fill__email--inputEmail input js-email js-input-message ${
              props.validations.isInvalidMail ? 'invalid-field' : ''
            }`}
            placeholder="sally-hill@gmail.com"
            onChange={handleInput}
            onBlur={handleOnBlurMailInput} // Ejecuto validación email cuando pierde el foco
            value={props.person.email}
            required
          />
          <span
            className={`error-message ${
              props.validations.isInvalidMail ? '' : 'hidden'
            }`}
          >
            * Campo inválido
          </span>
        </div>
        <div className="fill__tel">
          <label className="fill__tel--label text-label" htmlFor="phone">
            teléfono
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className={`fill__tel--inputTel input js-phone js-input ${
              props.validations.isInvalidPhone ? 'invalid-field' : ''
            }`}
            onChange={handleInput}
            value={props.person.phone}
            placeholder="Ej: 555-55-55-55"
          />
          <span
            className={`error-message ${
              props.validations.isInvalidPhone ? '' : 'hidden'
            }`}
          >
            * Campo inválido
          </span>
        </div>
        <div className="fill__linkedin">
          <label
            className="fill__linkedin--label text-label"
            htmlFor="linkedin"
          >
            linkedin
          </label>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            className={`fill__linkedin--inputLinkedin input js-linkedin js-input ${
              props.validations.isInvalidLinkedin ? 'invalid-field' : ''
            }`}
            onChange={handleInput}
            onBlur={handleOnBlurLinkedinInput}
            value={props.person.linkedin}
            placeholder="Ej: sally.hill"
            required
          />
          <span
            className={`error-message ${
              props.validations.isInvalidLinkedin ? '' : 'hidden'
            }`}
          >
            * Campo inválido
          </span>
        </div>
        <div className="fill__git">
          <label className="fill__git--label text-label" htmlFor="github">
            github
          </label>
          <input
            type="text"
            name="github"
            id="github"
            className={`fill__git--inputGit input js-github js-input ${
              props.validations.isInvalidGithub ? 'invalid-field' : ''
            }`}
            placeholder="Ej: sally-hill"
            onChange={handleInput}
            onBlur={handleOnBlurGithubInput}
            value={props.person.github}
            required
          />
          <span
            className={`error-message ${
              props.validations.isInvalidGithub ? '' : 'hidden'
            }`}
          >
            * Campo inválido
          </span>
        </div>
      </div>
    </fieldset>
  );
};
export default Fill;
