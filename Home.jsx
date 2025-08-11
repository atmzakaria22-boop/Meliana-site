import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Star, Clock, MapPin, Quote } from 'lucide-react';
import { restaurantInfo, specialOffers, customerReviews } from '../mock';

const Home = () => {
  const handleCall = () => {
    window.location.href = `tel:${restaurantInfo.phone}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://customer-assets.emergentagent.com/job_meliana-clichy/artifacts/4ehxfqy9_unnamed%20%284%29.jpg')`
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            La Meliana
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-yellow-300 font-medium">
            {restaurantInfo.slogan}
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Découvrez nos sandwichs, tacos, pizzas et menus préparés avec passion dans notre restaurant de Clichy-sous-Bois.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCall}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
            >
              <Phone size={22} />
              <span>Commander Maintenant</span>
            </button>
            <Link
              to="/menu"
              className="bg-transparent border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Voir le Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Offres Spéciales</h2>
            <p className="text-xl text-gray-600">Profitez de nos promotions exceptionnelles</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="bg-red-600 text-white p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-red-100">{offer.description}</p>
                </div>
                <div className="p-6 text-center">
                  <div className="mb-4">
                    <span className="text-gray-500 line-through text-lg mr-2">{offer.originalPrice}</span>
                    <span className="text-3xl font-bold text-red-600">{offer.specialPrice}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{offer.validUntil}</p>
                  <button
                    onClick={handleCall}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-medium transition-all duration-300 w-full"
                  >
                    Commander cette offre
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir La Meliana ?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-red-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Qualité Premium</h3>
              <p className="text-gray-600">
                Ingrédients frais sélectionnés avec soin pour des saveurs authentiques et une qualité irréprochable.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Service Rapide</h3>
              <p className="text-gray-600">
                Commandes préparées rapidement sans compromis sur la qualité. Votre satisfaction est notre priorité.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Local & Accessible</h3>
              <p className="text-gray-600">
                Situé au cœur de Clichy-sous-Bois, facilement accessible avec un accueil chaleureux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Nos Spécialités</h2>
            <p className="text-xl text-gray-300">Un aperçu de nos délicieux plats</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://customer-assets.emergentagent.com/job_meliana-clichy/artifacts/5ezud0v3_unnamed%20%281%29.jpg"
                alt="Pizza Meliana" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-xl">Nos Pizzas</span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://customer-assets.emergentagent.com/job_meliana-clichy/artifacts/msfwhp4e_unnamed%20%283%29.jpg"
                alt="Grec Meliana" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-xl">Nos Grecs</span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://customer-assets.emergentagent.com/job_meliana-clichy/artifacts/4ehxfqy9_unnamed%20%284%29.jpg"
                alt="Menu complet Meliana" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-xl">Nos Menus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600">La satisfaction de nos clients fait notre fierté</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerReviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Quote className="text-red-600 mr-2" size={20} />
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "{review.comment}"
                </p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 px-6 py-3 rounded-full">
              <Star className="text-yellow-500 fill-current" size={20} />
              <span className="font-bold text-gray-900">4.8/5</span>
              <span className="text-gray-600">• Basé sur plus de 200 avis</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Prêt à commander ?</h2>
          <p className="text-xl mb-8">
            Appelez-nous dès maintenant et savourez nos spécialités en quelques minutes !
          </p>
          <button
            onClick={handleCall}
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            {restaurantInfo.phone}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;