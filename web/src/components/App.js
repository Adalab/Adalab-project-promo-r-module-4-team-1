import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import dataApi from '../services/api';
import Footer from './Footer';
import Landing from './Landing';
import Cards from './Cards';
import ls from '../services/localstorage';

import imageprv from '../images/29089-wonder-woman-galgadot-46-1621920419.jpg';

function App() {
  const [person, setPerson] = useState(
    ls.get('inputLS', {
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      palette: '1',
      photo: imageprv,
    })
  );
  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    setPerson({ ...person, photo: avatar });
  };

  const [validations, setValidations] = useState({
    isInvalidName: false,
    isInvalidJob: false,
    isInvalidMail: false,
    isInvalidPhone: false,
    isInvalidLinkedin: false,
    isInvalidGithub: false,
  });

  const [resultUrl, setResultUrl] = useState({});
  const [collapsed, setCollapsed] = useState('design');

  const handleCollapsed = () => {
    setCollapsed('design');
  };

  const [hidden, setHidden] = useState(true);
  const [palette, setPalette] = useState(1);
  /*Para los collapse

  const [hidden, setCollapse] = useState(true);

  const handleCollapse = () => {
    if (hidden) {
      return setCollapse(false);
    } 
    else {
      return setCollapse(true);
    }
  };
*/

  const handleHidden = () => {
    if (hidden) {
      return setHidden(false);
    }
    //no pongo else porque no necesitamos volver a ocultarlo, si la usuaria quiere volver arriba a cambiar algo al abrir el collapse de formulario deberá cerrarse la sección de compartir
  };

  const handleInput = (input, value) => {
    let isValidValue = true;

    if (input === 'name') {
      //puedo ir validando según voy escribiendo.
      isValidValue = onlyLetters(value);
      if (isValidValue) {
        setValidations({ ...validations, isInvalidName: false });
      } else {
        setValidations({ ...validations, isInvalidName: true });
      }
    } else if (input === 'job') {
      //puedo ir validando según voy escribiendo.
      isValidValue = onlyLetters(value);
      if (isValidValue) {
        setValidations({ ...validations, isInvalidJob: false });
      } else {
        setValidations({ ...validations, isInvalidJob: true });
      }
    } else if (input === 'phone') {
      isValidValue = isPhoneNumber(value);
      if (isValidValue) {
        setValidations({ ...validations, isInvalidPhone: false });
      } else {
        setValidations({ ...validations, isInvalidPhone: true });
      }
    }

    setPerson({ ...person, [input]: value });

    if (person.palette === '1') {
      setPalette(1);
    }
    if (person.palette === '2') {
      setPalette(2);
    }
    if (person.palette === '3') {
      setPalette(3);
    }
    ls.set('inputLS', person);
  };

  const handleReset = () => {
    setPerson({
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      palette: '1',
      photo: imageprv,
    });
    ls.set('inputLS', {
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      palette: '1',
      photo: imageprv,
    })
  };

  const createCard = () => {
    dataApi(person).then((data) => {
      console.log(data);
      setResultUrl(data);
    });
  };

  const isValidMail = (event) => {
    //se valida en el input al escribir email completo y pierde el foco
    if (/^.+@.+$/.test(event.target.value)) {
      setValidations({ ...validations, isInvalidMail: false });
      return true;
    }
    setValidations({ ...validations, isInvalidMail: true });
    return false;
  };

  const isValidLinkedin = (event) => {
    //se valida en el input al escribir email completo y pierde el foco
    if (/^[a-zA-Z0-9._-]{5,30}$/.test(event.target.value)) {
      setValidations({ ...validations, isInvalidLinkedin: false });
      return true;
    }
    setValidations({ ...validations, isInvalidLinkedin: true });
    return false;
  };

  const isValidGithub = (event) => {
    //se valida en el input al escribir email completo y pierde el foco
    if (/^[a-zA-Z0-9._-]{5,30}$/.test(event.target.value)) {
      setValidations({ ...validations, isInvalidGithub: false });
      return true;
    }
    setValidations({ ...validations, isInvalidGithub: true });
    return false;
  };

  const isPhoneNumber = (phone) => {
    if (
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/.test(phone)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onlyLetters = (str) => {
    if (/^[a-zA-Z\sá-úÁ-Ú´]*$/.test(str)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/Cards"
          element={
            <Cards
              handleReset={handleReset}
              handleInput={handleInput}
              person={person}
              updateAvatar={updateAvatar}
              handleHidden={handleHidden}
              hidden={hidden}
              resultUrl={resultUrl}
              setPerson={setPerson}
              createCard={createCard}
              handleCollapsed={handleCollapsed}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              validations={validations}
              avatar={avatar}
              isValidMail={isValidMail}
              isValidGithub={isValidGithub}
              isValidLinkedin={isValidLinkedin}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
