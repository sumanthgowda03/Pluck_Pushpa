import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export function Categories() {
  const categories = useQuery(api.categories.list) || [];

  // Example categories for demo with emojis and colors
  const exampleCategories = [
    { 
      name: "🌹 Rose Bouquets", 
      description: "Classic red roses for love & romance", 
      imageUrl: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop",
      color: "from-red-400 to-pink-500"
    },
    { 
      name: "💐 Mixed Bouquets", 
      description: "Colorful mixed flowers for any occasion", 
      imageUrl: "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=400&h=300&fit=crop",
      color: "from-purple-400 to-pink-500"
    },
    { 
      name: "🤍 White Elegance", 
      description: "Pure white flowers for special moments", 
      imageUrl: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=300&fit=crop",
      color: "from-gray-300 to-blue-400"
    },
    { 
      name: "🍫 Choco Bouquets", 
      description: "Complete your gift with chocolate delights", 
      imageUrl: "https://www.bettergiftflowers.com/wp-content/uploads/2019/10/10-kitkat-bouquet-2.jpg?w=400&h=300&fit=crop",
      color: "from-red-400 to-pink-500"
    },
  ];

  const displayCategories = categories.length > 0 ? categories : exampleCategories;

  return (
    <section id="categories" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full text-sm uppercase tracking-wide">
              🎨 Our Collections
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
               Categories
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            🌈 Explore our diverse range of beautiful flower arrangements, each category 
            designed to capture different emotions and celebrations! ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayCategories.map((category, index) => (
            <div key={index} className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="relative aspect-square">
                  <img
                    src={category.imageUrl || `https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&auto=format`}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${(category as any).color || 'from-purple-400 to-pink-500'} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Floating emoji */}
                  <div className="absolute top-4 right-4 text-3xl animate-bounce">
                    {category.name.split(' ')[0]}
                  </div>
                </div>
                
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${(category as any).color || 'from-purple-500 to-pink-500'} text-white p-6`}>
                  <h3 className="text-xl font-bold mb-2 drop-shadow-lg">
                    {category.name}
                  </h3>
                  <p className="text-sm opacity-90 drop-shadow">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
