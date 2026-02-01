export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-300 rounded-full opacity-25 animate-bounce delay-300"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold rounded-full text-sm uppercase tracking-wide animate-pulse">
              ✨ Fresh Flowers Daily ✨
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent">
              Beautiful Bouquets
            </span>
            <span className="block text-white drop-shadow-lg">
              Made with 💖 Love
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-pink-100 max-w-3xl mx-auto leading-relaxed">
            🌸 Discover stunning, fresh flower arrangements crafted with passion. 
            Each bouquet tells a story of beauty, love, and celebration! 🌺
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#products"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/50"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>🛍️ Shop Beautiful Bouquets</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            
            <a 
              href="https://wa.me/1234567890?text=Hi! I'd like to know more about your beautiful bouquets 🌸"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-400 to-emerald-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-green-300 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-400/50"
            >
              <span className="flex items-center justify-center space-x-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
                </svg>
                <span>💬 Chat with Us</span>
                <span className="group-hover:animate-bounce">📱</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
