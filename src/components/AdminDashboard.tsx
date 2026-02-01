import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";


interface ProductForm {
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  category: string;
  inStock: boolean;
  featured: boolean;
}

export function AdminDashboard() {
  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

  const loggedInUser = useQuery(api.auth.loggedInUser);

  // While user info is loading
  if (loggedInUser === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Checking access…
      </div>
    );
  }

  // Gatekeeper check
  if (!loggedInUser || loggedInUser.email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">
            🚫 Access Denied
          </h1>
          <p className="text-gray-600">
            You are not authorized to access this page.
          </p>
        </div>
      </div>
    );
  }

  // ✅ admin-only dashboard continues below


  const [showForm, setShowForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  
  const [form, setForm] = useState<ProductForm>({
    name: "",
    description: "",
    price: "",
    originalPrice: "",
    category: "🌹 Romance",
    inStock: true,
    featured: false,
  });

  const products = useQuery(api.products.list, {}) || [];
  const generateUploadUrl = useMutation(api.admin.generateUploadUrl);
  const createProduct = useMutation(api.admin.createProductWithImage);
  const deleteProduct = useMutation(api.admin.deleteProduct);

  const categories = [
    "🌹 Romance",
    "💒 Wedding", 
    "🎉 Birthday",
    "💝 Anniversary",
    "🕊️ Sympathy",
    "🏢 Corporate",
    "🌸 Seasonal"
  ];

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedImage) {
      toast.error("Please select an image 📸");
      return;
    }

    if (!form.name || !form.description || !form.price) {
      toast.error("Please fill in all required fields ✏️");
      return;
    }

    setIsUploading(true);

    try {
      // Step 1: Get upload URL
      const uploadUrl = await generateUploadUrl();

      // Step 2: Upload the image
      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": selectedImage.type },
        body: selectedImage,
      });

      if (!result.ok) {
        throw new Error("Failed to upload image");
      }

      const { storageId } = await result.json();

      // Step 3: Create the product
      await createProduct({
        name: form.name,
        description: form.description,
        price: parseFloat(form.price),
        originalPrice: form.originalPrice ? parseFloat(form.originalPrice) : undefined,
        storageId,
        category: form.category,
        inStock: form.inStock,
        featured: form.featured,
      });

      toast.success("🎉 Product created successfully!");
      
      // Reset form
      setForm({
        name: "",
        description: "",
        price: "",
        originalPrice: "",
        category: "🌹 Romance",
        inStock: true,
        featured: false,
      });
      setSelectedImage(null);
      setImagePreview(null);
      setShowForm(false);

    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("❌ Failed to create product");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (productId: string) => {
    if (confirm("Are you sure you want to delete this product? 🗑️")) {
      try {
        await deleteProduct({ productId: productId as any });
        toast.success("🗑️ Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error("❌ Failed to delete product");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-8">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              🌸 Admin Dashboard
            </h1>
            <p className="text-gray-600">Manage your beautiful bouquet collection</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-400/50 flex items-center space-x-2"
          >
            <span>{showForm ? "❌ Cancel" : "➕ Add New Product"}</span>
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-2 border-purple-100">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ✨ Add New Bouquet
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center space-x-2">
                    <span>🏷️</span>
                    <span>Product Name *</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-6 py-4 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 text-lg"
                    placeholder="e.g., 🌹 Romantic Red Rose Bouquet"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center space-x-2">
                    <span>🎨</span>
                    <span>Category *</span>
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-6 py-4 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 text-lg"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center space-x-2">
                    <span>💰</span>
                    <span>Price (₹) *</span>
                  </label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="w-full px-6 py-4 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 text-lg"
                    placeholder="500"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center space-x-2">
                    <span>🏷️</span>
                    <span>Original Price (₹) - Optional</span>
                  </label>
                  <input
                    type="number"
                    value={form.originalPrice}
                    onChange={(e) => setForm({ ...form, originalPrice: e.target.value })}
                    className="w-full px-6 py-4 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 text-lg"
                    placeholder="600"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center space-x-2">
                  <span>📝</span>
                  <span>Description *</span>
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={4}
                  className="w-full px-6 py-4 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 text-lg"
                  placeholder="Describe your beautiful bouquet... 🌸"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center space-x-2">
                  <span>📸</span>
                  <span>Product Image *</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="w-full px-6 py-4 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 text-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                  required
                />
                {imagePreview && (
                  <div className="mt-6 flex justify-center">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-40 h-40 object-cover rounded-2xl border-4 border-purple-200 shadow-lg"
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-8">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.inStock}
                    onChange={(e) => setForm({ ...form, inStock: e.target.checked })}
                    className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <span className="font-semibold text-gray-700">✅ In Stock</span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                    className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <span className="font-semibold text-gray-700">⭐ Featured Product</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isUploading}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-8 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/50 flex items-center justify-center space-x-3"
              >
                {isUploading ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Uploading... 📤</span>
                  </>
                ) : (
                  <>
                    <span>🎉</span>
                    <span>Create Beautiful Product</span>
                    <span>✨</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-2xl border-2 border-purple-100">
          <div className="p-8 border-b border-purple-100">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center space-x-2">
              <span>🌺</span>
              <span>Your Beautiful Products ({products.length})</span>
            </h2>
          </div>
          
          <div className="p-8">
            {products.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🌸</div>
                <p className="text-xl text-gray-500 mb-4">No products yet!</p>
                <p className="text-gray-400">Add your first beautiful bouquet above to get started ✨</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div key={product._id} className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 text-gray-800">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-bold text-green-600">₹{product.price}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          product.inStock 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {product.inStock ? '✅ In Stock' : '❌ Out of Stock'}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-400 text-white py-3 px-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-400/50 flex items-center justify-center space-x-2"
                      >
                        <span>🗑️</span>
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
