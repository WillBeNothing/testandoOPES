import React, { useState } from 'react';

import './styles.css'


// import { Container } from './styles';

const Home: React.FC = () => {

    
const [exitsCharacter, setExistCharacter] = useState(false)

  return (
    <div className='container' id='home-page'>
        {
            exitsCharacter ? 
            (<div></div>) :
            (<div className='buttonContainer'>
                <button className='add'>
                    <strong>+</strong>
                    <p className='add-text'>Criar ficha</p>
                </button>
            </div>)
        }
    </div>
  );
}

export default Home;