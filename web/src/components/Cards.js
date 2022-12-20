import Header from './Header';
import Reset from './Reset';
import CardPreview from './CardPreview';
import Fill from './Fill';
import FormDesign from './FormDesign';
import Share from './Share';
function Landing(props) {
    return (
        <>
    <Header/>
  <main className="create">
  <section className="card-section">
    <Reset btn={props.handleReset}></Reset>
    <CardPreview person={props.person}  updateAvatar={props.updateAvatar}></CardPreview>
  </section>

  <section>
    <form className="js-form" method="post">
      <FormDesign
        object={props.person}
        setobjetc={props.setPerson}
        handleInput={props.handleInput}
        handleCollapsed={props.handleCollapsed}
        collapsed={props.collapsed}
        setCollapsed={props.setCollapsed}
      />
      <Fill 
        person={props.person} 
        handleInput={props.handleInput}
        validations={props.validations}
        handleCollapsed={props.handleCollapsed}
        collapsed={props.collapsed}
        setCollapsed={props.setCollapsed}
        updateAvatar={props.updateAvatar}
        avatar={props.avatar}
        isValidMail={props.isValidMail}
        isValidGithub={props.isValidGithub}
        isValidLinkedin={props.isValidLinkedin} />
      <Share
        person={props.person}
        resultUrl={props.resultUrl}
        createCard={props.createCard}
        handleHidden={props.handleHidden}
        hidden={props.hidden}
        handleCollapsed={props.handleCollapsed}
        setCollapsed={props.setCollapsed}
        collapsed={props.collapsed}
      />
    </form>
  </section>
</main>
</>
    );
}
export default Landing;