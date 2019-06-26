import React, { useState, useEffect} from 'react';
import vinyl from './vinyl.svg';
import vinylHearth from './vinyl-hearth.png';
import './App.css';

const loadingMessages = [
  'On accorde les guitares',
  'On préchauffe les amplis',
  'Tu connais l’histoire de Toto qui fait du rock ?',
  'On rafraichi les bières',
  'On déroule les jacks',
  'On commande les pizzas',
  'On écris une chanson en hommage à la meilleur chason du monde',
  'Bonjour maman',
  'On s’engueule',

  'On retrouve les médiators au fond de nos poches',
  'On carresse des chatons'
]

const getLoadingMessage = () => {
  const random = Math.floor(Math.random() * loadingMessages.length - 1) + 1
  return loadingMessages[random]
}

function App() {
  const [loadingMessage, setLoadingMessage] = useState(getLoadingMessage())

  useEffect(() => {
    setTimeout(function () {
      const message = getLoadingMessage()
      if (message === loadingMessage) {
        setLoadingMessage('')
      }
      setLoadingMessage(message)
    }, 3000);
  }, [loadingMessage, setLoadingMessage])

  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ fontStyle: 'oblique' }}>Patience… On arrive !</h3>
        <div className="loading-logo">
          <img src={vinyl} className="vinyl" alt="logo" />
          <img src={vinylHearth} className="mask" alt="logo" />
        </div>
        <h2 style={{fontStyle: 'oblique'}}>{loadingMessage}…</h2>
      </header>
    </div>
  );
}

export default App;
