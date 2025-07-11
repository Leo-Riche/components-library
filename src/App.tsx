import { useState } from 'react';
import { Button } from './components/Button';
import { IconButton } from './components/IconButton';
import { Card } from './components/Card';
import { ProgressBar } from './components/ProgressBar';

function App() {
    const [progress, setProgress] = useState(65);

    const incrementProgress = () => {
        setProgress(prev => Math.min(prev + 10, 100));
    };

    const decrementProgress = () => {
        setProgress(prev => Math.max(prev - 10, 0));
    };

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

                {/* Section Card */}
                <section className="mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Composant Card
                    </h2>

                    {/* Différentes variantes */}
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-700 mb-3">Variantes de couleur</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Card variant="default" title="Card Default" subtitle="Carte par défaut">
                                <p>Contenu de la carte par défaut avec du texte d'exemple.</p>
                            </Card>

                            <Card variant="primary" title="Card Primary" subtitle="Carte primaire">
                                <p>Contenu de la carte primaire avec un style bleu.</p>
                            </Card>

                            <Card variant="success" title="Card Success" subtitle="Carte de succès">
                                <p>Contenu de la carte de succès avec un style vert.</p>
                            </Card>

                            <Card variant="warning" title="Card Warning" subtitle="Carte d'avertissement">
                                <p>Contenu de la carte d'avertissement avec un style jaune.</p>
                            </Card>

                            <Card variant="danger" title="Card Danger" subtitle="Carte de danger">
                                <p>Contenu de la carte de danger avec un style rouge.</p>
                            </Card>

                            <Card variant="secondary" title="Card Secondary" subtitle="Carte secondaire">
                                <p>Contenu de la carte secondaire avec un style gris.</p>
                            </Card>
                        </div>
                    </div>

                    {/* Différentes tailles */}
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-700 mb-3">Tailles</h3>
                        <div className="space-y-4">
                            <Card size="small" title="Petite carte" shadow="small">
                                <p>Carte avec un padding réduit.</p>
                            </Card>

                            <Card size="medium" title="Carte moyenne" shadow="medium">
                                <p>Carte avec un padding standard et une ombre moyenne.</p>
                            </Card>

                            <Card size="large" title="Grande carte" shadow="large">
                                <p>Carte avec un padding étendu et une grande ombre pour plus d'impact visuel.</p>
                            </Card>
                        </div>
                    </div>

                    {/* Cartes interactives */}
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-700 mb-3">Cartes interactives</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card
                                clickable
                                onClick={() => alert('Carte cliquée!')}
                                title="Carte cliquable"
                                variant="primary"
                            >
                                <p>Cliquez sur cette carte pour voir l'interaction.</p>
                            </Card>

                            <Card
                                clickable
                                onClick={() => alert('Deuxième carte cliquée!')}
                                title="Autre carte cliquable"
                                variant="secondary"
                            >
                                <p>Cette carte est également interactive.</p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Section ProgressBar */}
                <section className="mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Composant ProgressBar
                    </h2>

                    {/* Différentes variantes */}
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-700 mb-3">Variantes de couleur</h3>
                        <div className="space-y-4">
                            <ProgressBar value={25} variant="default" label="Progression par défaut" showPercentage />
                            <ProgressBar value={50} variant="primary" label="Progression primaire" showPercentage />
                            <ProgressBar value={75} variant="success" label="Progression de succès" showPercentage />
                            <ProgressBar value={60} variant="warning" label="Progression d'avertissement" showPercentage />
                            <ProgressBar value={30} variant="danger" label="Progression de danger" showPercentage />
                            <ProgressBar value={85} variant="secondary" label="Progression secondaire" showPercentage />
                        </div>
                    </div>

                    {/* Différentes tailles */}
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-700 mb-3">Tailles</h3>
                        <div className="space-y-4">
                            <ProgressBar value={40} size="small" label="Petite barre" showPercentage />
                            <ProgressBar value={65} size="medium" label="Barre moyenne" showPercentage />
                            <ProgressBar value={80} size="large" label="Grande barre" showPercentage />
                        </div>
                    </div>

                    {/* Barre interactive */}
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-700 mb-3">Barre interactive</h3>
                        <div className="space-y-4">
                            <ProgressBar
                                value={progress}
                                variant="primary"
                                label="Progression contrôlable"
                                showPercentage
                                animated
                            />
                            <div className="flex gap-2">
                                <Button onClick={decrementProgress} size="small" variant="secondary">
                                    - 10%
                                </Button>
                                <Button onClick={incrementProgress} size="small">
                                    + 10%
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Barres sans étiquette */}
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-gray-700 mb-3">Barres simples</h3>
                        <div className="space-y-2">
                            <ProgressBar value={20} variant="danger" />
                            <ProgressBar value={50} variant="warning" />
                            <ProgressBar value={80} variant="success" />
                            <ProgressBar value={100} variant="primary" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}


export default App;

