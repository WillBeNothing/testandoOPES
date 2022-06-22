import React, { useState } from 'react';

import {useNavigate} from 'react-router-dom'

import './styles.css'


// import { Container } from './styles';

const Home: React.FC = () => {

    const navigate = useNavigate();

const [exitsCharacter, setExistCharacter] = useState(false)

const createNewCharacter = () => {
    navigate('/newCharacter')
}

  return (
    <div className='container' id='home-page'>
        {
            exitsCharacter ? 
            (<div></div>) :
            (<div className='buttonContainer'>
                <button className='add' onClick={createNewCharacter}>
                    <strong>+</strong>
                    <p className='add-text'>Criar ficha</p>
                </button>
            </div>)
        }
    </div>
  );
}

export default Home;