import React from 'react';
import { Star, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://customer-assets.emergentagent.com/job_meliana-clichy/artifacts/wi1ex98k_unnamed%20%282%29.jpg')`
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">À propos de La Meliana</h1>
          <p className="text-xl">L'histoire d'une passion pour la cuisine rapide de qualité</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p className="text-xl mb-8">
              Depuis notre ouverture à Clichy-sous-Bois, La Meliana s'est imposée comme une référence 
              incontournable de la restauration rapide de qualité dans la région.
            </p>
            
            <p className="mb-6">
              Notre aventure a commencé avec une vision simple mais ambitieuse : proposer des plats 
              savoureux, préparés avec des ingrédients frais et de qualité, dans un cadre accueillant 
              et à des prix accessibles. Nous croyons fermement que la restauration rapide ne doit 
              pas être synonyme de compromis sur la qualité.
            </p>
            
            <p className="mb-6">
              Spécialisés dans les burgers, grecs, pizzas, sandwichs et assiettes, nous mettons un 
              point d'honneur à préparer chaque commande avec soin et passion. Nos recettes uniques 
              et nos sauces maison font toute la différence et créent cette expérience gustative 
              que nos clients apprécient tant.
            </p>
            
            <p className="mb-8">
              Au fil des années, La Meliana est devenue bien plus qu'un simple restaurant : 
              c'est un lieu de convivialité où se retrouvent familles, amis et habitants du quartier, 
              unis par l'amour de la bonne cuisine.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600">Ce qui nous guide au quotidien</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Qualité</h3>
              <p className="text-gray-600">
                Sélection rigoureuse de nos ingrédients pour garantir des saveurs authentiques
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Convivialité</h3>
              <p className="text-gray-600">
                Un accueil chaleureux et un service attentionné pour chaque client
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rapidité</h3>
              <p className="text-gray-600">
                Service efficace sans compromis sur la préparation soignée de vos plats
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600">
                L'amour de la cuisine se ressent dans chaque plat que nous préparons
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Spécialités</h2>
            <p className="text-xl text-gray-600">Ce qui fait la réputation de La Meliana</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Une Cuisine Variée et Savoureuse</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Burgers Artisanaux</h4>
                    <p className="text-gray-600">Steaks hachés frais, pains briochés maison et sauces secrètes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Grecs Généreux</h4>
                    <p className="text-gray-600">Garnitures fraîches et viandes marinées dans nos tortillas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pizzas Traditionnelles</h4>
                    <p className="text-gray-600">Pâte fine, ingrédients de qualité et cuisson parfaite</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Assiettes Complètes</h4>
                    <p className="text-gray-600">Portions généreuses avec accompagnements frais</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://customer-assets.emergentagent.com/job_meliana-clichy/artifacts/hkp3lwp8_unnamed.jpg"
                alt="Restaurant La Meliana" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Message */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Un Message de Notre Équipe</h2>
          <p className="text-xl leading-relaxed mb-8">
            "Chaque jour, nous mettons tout notre savoir-faire et notre passion au service de votre satisfaction. 
            Votre fidélité nous motive à nous dépasser constamment pour vous offrir le meilleur de la cuisine rapide. 
            Merci de faire confiance à La Meliana !"
          </p>
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;