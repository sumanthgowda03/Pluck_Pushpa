export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-10 animate-bounce"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-2xl">🌸</span>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                3Petals
              </h3>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-lg">
              🌺 We create beautiful, fresh flower arrangements that bring joy and love to every occasion. 
              Each bouquet is crafted with passion and delivered with care! ✨
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/+911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-green-400/50"
              >
                <svg className="w-8 h-8 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
                </svg>
              </a>
              
              <a 
                href="#"
                className="group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-400/50"
              >
                <span className="text-xl group-hover:animate-bounce">📧</span>
              </a>
              
              <a 
                href="#"
                className="group bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-pink-400/50"
              >
                <span className="text-xl group-hover:animate-bounce">📱</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <span>🔗</span>
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#products" className="hover:text-pink-400 transition-colors flex items-center space-x-2 group">
                  <span>🌺</span>
                  <span className="group-hover:translate-x-1 transition-transform">Products</span>
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-pink-400 transition-colors flex items-center space-x-2 group">
                  <span>🎨</span>
                  <span className="group-hover:translate-x-1 transition-transform">Categories</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-pink-400 transition-colors flex items-center space-x-2 group">
                  <span>💝</span>
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-400 transition-colors flex items-center space-x-2 group">
                  <span>📞</span>
                  <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <span>📍</span>
              <span>Contact Info</span>
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <span className="text-green-400">📱</span>
                <span>+91 9353395096</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">📧</span>
                <span>sumanthmanjunath2295@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-pink-400">🏪</span>
                <span>Beautiful Bouquet with love</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-yellow-400">⏰</span>
                <span>Support : 12:00 AM – 12:00 PM Daily</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg flex items-center justify-center space-x-2">
            <span>© 3Petals.</span>
            <span className="animate-pulse">💖</span>
            <span>Made with love — for every bond, every joy, every celebration.!</span>
            <span className="animate-bounce">🌸</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
