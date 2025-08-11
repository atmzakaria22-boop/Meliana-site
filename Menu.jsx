import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { menuItems, restaurantInfo } from '../mock';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('sandwichs');

  const categories = [
    { id: 'sandwichs', name: 'Sandwichs', items: menuItems.sandwichs },
    { id: 'tacos', name: 'Tacos', items: menuItems.tacos },
    { id: 'menusandwichs', name: 'Menus Sandwichs', items: menuItems.menusandwichs },
    { id: 'menuburgers', name: 'Menus Burgers', items: menuItems.menuburgers },
    { id: 'menupaninis', name: 'Menus Paninis', items: menuItems.menupaninis },
    { id: 'menuhummers', name: 'Menus Hummers', items: menuItems.menuhummers },
    { id: 'menuassiettes', name: 'Menus Assiettes', items: menuItems.menuassiettes },
    { id: 'texmex', name: 'Tex-Mex', items: menuItems.texmex },
    { id: 'salades', name: 'Salades', items: menuItems.salades },
    { id: 'assiettes', name: 'Assiettes', items: menuItems.assiettes },
    { id: 'paninis', name: 'Paninis', items: menuItems.paninis },
    { id: 'pizzastomate', name: 'Pizzas Base Tomate', items: menuItems.pizzastomate },
    { id: 'pizzascreme', name: 'Pizzas Base Crème', items: menuItems.pizzascreme },
    { id: 'barquettes', name: 'Barquettes', items: menuItems.barquettes },
    { id: 'desserts', name: 'Desserts', items: menuItems.desserts },
    { id: 'boissons', name: 'Boissons', items: menuItems.boissons }
  ];

  const handleCall = () => {
    window.location.href = `tel:${restaurantInfo.phone}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Notre Menu</h1>
          <p className="text-xl">Découvrez tous nos délicieux plats préparés avec passion</p>
        </div>
      </section>

      {/* Menu Navigation */}
      <div className="sticky top-20 bg-white shadow-md z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-red-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.name}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                  >
                    {item.image && (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                          {item.popular === true && (
                            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mt-1">
                              Populaire
                            </span>
                          )}
                          {typeof item.popular === 'string' && (
                            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mt-1">
                              {item.popular}
                            </span>
                          )}
                        </div>
                        <span className="text-2xl font-bold text-red-600">{item.price}</span>
                      </div>
                      
                      {item.description && (
                        <p className="text-gray-600 mb-3">{item.description}</p>
                      )}
                      
                      {item.rating && (
                        <div className="flex items-center mb-4">
                          <div className="flex items-center">
                            <span className="text-green-600 text-sm font-medium mr-1">👍</span>
                            <span className="text-green-600 text-sm font-medium">{item.rating}</span>
                          </div>
                        </div>
                      )}
                      
                      <button
                        onClick={handleCall}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Phone size={18} />
                        <span>Commander</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Une envie soudaine ?</h2>
          <p className="text-xl mb-8">
            Appelez-nous pour commander vos plats préférés !
          </p>
          <button
            onClick={handleCall}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 mx-auto transform hover:scale-105"
          >
            <Phone size={22} />
            <span>{restaurantInfo.phone}</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Menu;