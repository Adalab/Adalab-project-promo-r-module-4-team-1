import '../styles/layout/CardSection.scss';

function CardPreview(props) {
  return (
    <article
      className={`card js-preview-card js-palette${props.person.palette}`}
    >
      <div className="card-text">
        <h2 className="card-text-name js-preview-name">
          {props.person.name || 'Nombre Apellidos'}
        </h2>
        <p className="card-text-job js-preview-job">
          {' '}
          {props.person.job || 'Frontend unicorn'}
        </p>
      </div>

      <div
        className="card-image js-card-img profile__image js__profile-image"
        title="Preview image"
        alt="Preview image"
      >
        {' '}
        {props.person.photo !== '' ? (
          <img className="card-image" src={props.person.photo} alt="cosas" />
        ) : (
          ''
        )}{' '}
      </div>

      <div className="social-media">
        <a
          href={`tel:${props.person.phone || '#'}`}
          className="social-media-icon js-phone-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-mobile-screen-button"></i>
        </a>
        <a
          href={`mailto:${props.person.email || '#'}`}
          className="social-media-icon js-email-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a
          href={`https://www.linkedin.com/${props.person.linkedin || '404'}`}
          className="social-media-icon js-linkedin-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href={`https://github.com/${props.person.github || '404'}`}
          className="social-media-icon js-github-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github-alt"></i>
        </a>
      </div>
    </article>
  );
}

export default CardPreview;
