import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';
import { restaurantInfo } from '../mock';

const Contact = () => {
  const handleCall = () => {
    window.location.href = `tel:${restaurantInfo.phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${restaurantInfo.email}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Nous Contacter</h1>
          <p className="text-xl">Trouvez-nous, contactez-nous, venez nous voir !</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address */}
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Adresse</h3>
              <p className="text-gray-600">
                {restaurantInfo.address}
              </p>
            </div>

            {/* Phone */}
            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Téléphone</h3>
              <button 
                onClick={handleCall}
                className="text-gray-600 hover:text-red-600 transition-colors font-medium"
              >
                {restaurantInfo.phone}
              </button>
            </div>

            {/* Email */}
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <button 
                onClick={handleEmail}
                className="text-gray-600 hover:text-red-600 transition-colors font-medium"
              >
                {restaurantInfo.email}
              </button>
            </div>

            {/* Hours */}
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Horaires</h3>
              <p className="text-gray-600">
                Lun - Dim<br />
                11:00 - 00:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Horaires Détaillés</h2>
            <p className="text-gray-600">Nous sommes ouverts 7j/7 pour vous servir</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium text-gray-900 capitalize">{day}</span>
                  <span className="text-red-600 font-semibold">{hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <Clock size={16} className="inline mr-1" />
                Horaires pouvant varier les jours fériés
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nous Trouver</h2>
            <p className="text-gray-600">La Meliana est facilement accessible à Clichy-sous-Bois</p>
          </div>

          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.123!2d2.533!3d48.909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e612!2s1%20All.%20de%20Coubron%2C%2093390%20Clichy-sous-Bois!5e0!3m2!1sen!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Meliana Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Suivez-nous</h2>
          <p className="text-xl mb-8">Restez connectés pour nos dernières actualités et offres !</p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href={restaurantInfo.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
            >
              <Instagram size={32} />
            </a>
            <a 
              href={restaurantInfo.socialMedia.facebook}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
            >
              <Facebook size={32} />
            </a>
            <a 
              href={restaurantInfo.socialMedia.tiktok}
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-gray-800 p-4 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
            >
              <div className="w-8 h-8 rounded-full bg-white text-black text-xl flex items-center justify-center font-bold">
                T
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Prêt à Commander ?</h2>
          <p className="text-xl mb-8">
            N'attendez plus, appelez-nous maintenant !
          </p>
          <button
            onClick={handleCall}
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 mx-auto transform hover:scale-105"
          >
            <Phone size={22} />
            <span>{restaurantInfo.phone}</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;