import { useState } from 'react'
import { helloWorld } from './utils/hello'
import './App.css'

function App() {
    const [name, setName] = useState('')

    return (
        <div className="App">
            <h1>Test de la fonction helloWorld</h1>
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Entrez votre nom"
                />
                <p>Résultat: {helloWorld(name)}</p>
            </div>
        </div>
    )
}

export default App