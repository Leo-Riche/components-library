import { useState } from 'react';
import { Button } from './components/Button';
import { IconButton } from './components/IconButton';

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);
  const handleReset = () => setCounter(0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                    Bibliothèque de Composants
        </h1>


        {/* Section Button */}
        <section className="mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Composant Button
          </h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <Button onClick={() => alert('Button Primary clicked!')}>
                            Primary
            </Button>
            <Button variant="secondary" onClick={() => alert('Button Secondary clicked!')}>
                            Secondary
            </Button>
            <Button disabled>
                            Disabled
            </Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
        </section>

        {/* Section IconButton */}
        <section className="mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Composant IconButton
          </h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <IconButton
              icon="❤️"
              ariaLabel="J'aime"
              onClick={() => alert('Coeur cliqué!')}
            />
            <IconButton
              icon="⭐"
              ariaLabel="Favoris"
              variant="secondary"
              onClick={() => alert('Étoile cliquée!')}
            />
            <IconButton
              icon="🗑️"
              ariaLabel="Supprimer"
              disabled
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <IconButton icon="📧" ariaLabel="Email" size="small" />
            <IconButton icon="📞" ariaLabel="Téléphone" size="medium" />
            <IconButton icon="📍" ariaLabel="Localisation" size="large" />
          </div>
        </section>

        {/* Section Interactive - Compteur */}
        <section className="mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Exemple Interactif - Compteur
          </h2>
          <div className="flex items-center justify-center gap-4">
            <IconButton
              icon="➖"
              ariaLabel="Décrémenter"
              onClick={handleDecrement}
              variant="secondary"
            />
            <span className="text-4xl font-bold text-gray-800 min-w-[80px] text-center">
              {counter}
            </span>
            <IconButton
              icon="➕"
              ariaLabel="Incrémenter"
              onClick={handleIncrement}
            />
            <Button onClick={handleReset} variant="secondary" size="small">
                            Reset
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;