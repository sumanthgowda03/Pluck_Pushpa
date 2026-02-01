import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  const products = useQuery(api.products.list, {}) || [];

  // Example products for demo with more colorful data
  const exampleProducts = [
    {
      _id: "1" as any,
      name: "🌹 Romantic Rose Bouquet",
      description: "Stunning roses arranged with baby's breath and greenery - perfect for expressing love ❤️",
      price: 450,
      originalPrice: 500,
      imageUrl: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500&h=500&fit=crop&auto=format",
      category: "💕 Romance",
      inStock: true,
      featured: true,
    },
    {
      _id: "2" as any,
      name: "🌈 Rainbow Mixed Bouquet",
      description: "Vibrant mix of colorful flowers including roses, gerberas, and lilies - brings joy to any day! 🌺",
      price: 350,
      imageUrl: "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=500&h=500&fit=crop&auto=format",
      category: "🎉 Celebration",
      inStock: true,
      featured: true,
    },
    {
      _id: "3" as any,
      name: "🤍 Pure White Lily Bouquet",
      description: "Elegant white lilies symbolizing purity and new beginnings - perfect for special moments ✨",
      price: 550,
      originalPrice: 600,
      imageUrl: "https://i.pinimg.com/736x/32/e5/b9/32e5b915136533a4acb23cf77771d785.jpg?w=500&h=500&fit=crop&auto=format",
      category: "💒 Wedding",
      inStock: true,
      featured: false,
    },
    {
      _id: "4" as any,
      name: "👰 Bridal Dream Centerpiece",
      description: "Luxurious wedding centerpiece with white roses, peonies, and eucalyptus - makes your day magical! 💫",
      price: 800,
      imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=500&fit=crop&auto=format",
      category: "💒 Wedding",
      inStock: true,
      featured: true,
    },
    {
      _id: "5" as any,
      name: "🎂 Birthday Celebration Bouquet",
      description: "Bright and cheerful flowers in happy colors - perfect for birthday surprises! 🎈",
      price: 400,
      originalPrice: 450,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_TU8FVwDLI5QuOAtdkvea-djWSWXwqkax6A&sw=500&h=500&fit=crop&auto=format",
      category: "🎉 Birthday",
      inStock: true,
      featured: false,
    },
    {
      _id: "6" as any,
      name: "🍫 Choco Kitti Arrangement",
      description: "Chocolate and flower arrangement for a special memory 🍫",
      price: 650,
      imageUrl: "https://www.bettergiftflowers.com/wp-content/uploads/2019/10/10-kitkat-bouquet-2.jpg?w=400&h=300&fit=crop",
      category: "🍫 Celebration",
      inStock: true,
      featured: false,
    },
    {
      _id: "7" as any,
      name: "🍫 Dark Memory Arrangement",
      description: "Dark chocolate and flower arrangement for a sweet memory 🍫",
      price: 650,
      imageUrl: "https://i.pinimg.com/736x/41/7b/3b/417b3b3e3e06d61a65de303bed6a6792.jpg?w=400&h=300&fit=crop",
      category: "🎉 Celebration",
      inStock: true,
      featured: false,
    },
    {
      _id: "8" as any,
      name: "🌈 Scrunchie Arrangement",
      description: "Multi-Color Pink Teal White Cream, Wedding Party Gift Decor 🎀",
      price: 650,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfFxUafogD1AtyJBd2kUJTFmyjDPok10Br0lKzhepvBJ4cjV5SuFrr6q9iCrYGCk744c&usqp=CAU&w=400&h=300&fit=crop",
      category: "🎉 Celebration",
      inStock: true,
      featured: false,
    },
    {
      _id: "9" as any,
      name: "🌹 Romantic with Red",
      description: "Expressing love with red roses ❤️",
      price: 450,
      originalPrice: 500,
      imageUrl: "https://perfectgiftadda.com/wp-content/uploads/2023/10/IMG_0407-scaled.jpeg?w=500&h=500&fit=crop&auto=format",
      category: "💕 Romance",
      inStock: true,
      featured: true,
    },
    {
      _id: "10" as any,
      name: "🌹 Hair clip Bouquet",
      description: "Valentines Hair Clutcher Bouquet ❤️",
      price: 450,
      originalPrice: 500,
      imageUrl: "https://eileenfloral.com/cdn/shop/files/Screenshot2024-07-11at10.42.43PM.png?v=1720762973&w=500&h=500&fit=crop&auto=format",
      category: "💕 valintine",
      inStock: true,
      featured: true,
    },
  ];

  const displayProducts = products.length > 0 ? products : exampleProducts;

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-10 animate-bounce"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full text-sm uppercase tracking-wide animate-pulse">
              🌸 Featured Collection
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Beautiful Bouquets
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            🌺 Each bouquet is carefully crafted with fresh flowers , Chocolates and arranged with love. 
            Perfect for any occasion or to brighten someone's day! ✨
          </p>
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product, index) => (
            <div key={product._id} className="transform hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 100}ms`}}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
