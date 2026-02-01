interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  category: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappNumber = "919353395096"; // Replace with actual business WhatsApp number
  
  const handleWhatsAppClick = () => {
  const message = `Hello 👋
  
I’m interested in this product:

🛍️ Name: ${product.name}
🏷️ Category: ${product.category}
💰 Price: ₹${product.price}
🖼️ Image: ${product.imageUrl}

Please share more details 😊`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
};


  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-pink-200">
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Discount badge */}
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
            <span className="flex items-center space-x-1">
              <span>💰</span>
              <span>Save ₹{product.originalPrice - product.price}</span>
            </span>
          </div>
        )}
        
        {/* Stock status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl">
              😔 Out of Stock
            </div>
          </div>
        )}
        
        {/* Category badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          {product.category}
        </div>
      </div>
      
      <div className="p-6">        
        <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
          {product.name}
        </h3>
        
        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          
          {product.inStock && (
            <div className="flex items-center space-x-1 text-green-600 font-semibold">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>In Stock</span>
            </div>
          )}
        </div>
        
        <button
          onClick={handleWhatsAppClick}
          disabled={!product.inStock}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/50 flex items-center justify-center space-x-3"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
          </svg>
          <span className="text-lg">
            {product.inStock ? '💬 Buy on WhatsApp' : '😔 Out of Stock'}
          </span>
          {product.inStock && <span className="animate-bounce">🛒</span>}
        </button>
      </div>
    </div>
  );
}
