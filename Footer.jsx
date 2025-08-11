import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { restaurantInfo } from '../mock';

const Footer = () => {
  const handleCall = () => {
    window.location.href = `tel:${restaurantInfo.phone}`;
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-xl w-fit mb-4">
              La Meliana
            </div>
            <p className="text-gray-300 mb-4">
              {restaurantInfo.slogan}
            </p>
            <p className="text-gray-400 text-sm">
              Votre restaurant de cuisine rapide de qualité à Clichy-sous-Bois.
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  {restaurantInfo.address}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-yellow-400 flex-shrink-0" />
                <button 
                  onClick={handleCall}
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  {restaurantInfo.phone}
                </button>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              <Clock size={20} className="inline mr-2" />
              Horaires
            </h3>
            <div className="space-y-1">
              <p className="text-gray-300 text-sm">Lundi - Dimanche</p>
              <p className="text-white font-medium">11:00 - 00:00</p>
              <p className="text-gray-400 text-xs mt-2">
                Horaires pouvant varier les jours fériés
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a 
                href={restaurantInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={restaurantInfo.socialMedia.facebook}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={restaurantInfo.socialMedia.tiktok}
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <div className="w-5 h-5 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">
                  T
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 La Meliana. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;