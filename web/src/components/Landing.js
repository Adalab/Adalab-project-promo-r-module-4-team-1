import{Link} from 'react-router-dom';

import "../styles/layout/Landing.scss";
function Landing() {
	return (
		<div>
			<main className="main">
				<div className="main__img"></div>
				<div className="bg">
					<section className="main__title">
						<div className="main__title--img"></div>
						<h1 className="main__title--create h1">Crea tu tarjeta de visita</h1>
						<p className="main__title--text">
							Crea mejores contactos profesionales de forma fácil y cómoda
						</p>
					</section>
					<section className="main__options">
						<ul className="main__options--list">
							<li className="cop">
								<i className="fa-icon fa-regular fa-object-ungroup large"></i>{" "}
								diseña
							</li>
							<li className="cop">
								<i className="fa-icon fa-regular fa-keyboard"></i> rellena
							</li>
							<li className="cop">
								<i className="fa-icon fa-solid fa-share-nodes"></i> comparte
							</li>
						</ul>
					</section>
				</div>
				<section className="main__start js-start">
          <Link to='/Cards' className="main__start--create">comenzar</Link>   
				
				</section>
			</main>
		</div>
	);
}
export default Landing;
