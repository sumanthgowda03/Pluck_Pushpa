import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { Toaster } from "sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { Categories } from "./components/Categories";
import { Footer } from "./components/Footer";
import { AdminDashboard } from "./components/AdminDashboard";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "bold",
          },
        }}
      />
    </div>
  );
}

function Content() {
  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
  const loggedInUser = useQuery(api.auth.loggedInUser);
  const [showAdmin, setShowAdmin] = useState(false);

  // ✅ Safe state reset (no render-loop)
  useEffect(() => {
    if (loggedInUser?.email !== ADMIN_EMAIL) {
      setShowAdmin(false);
    }
  }, [loggedInUser, ADMIN_EMAIL]);

  if (loggedInUser === undefined) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-purple-600 mx-auto mb-4" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl animate-pulse">🌸</span>
            </div>
          </div>
          <p className="text-lg text-gray-600 font-medium">
            Loading beautiful flowers... ✨
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <Categories />
      <ProductGrid />

      <Authenticated>
        {loggedInUser?.email === ADMIN_EMAIL && (
          <>
            <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-12 relative overflow-hidden">
              <div className="absolute top-4 left-10 w-8 h-8 bg-yellow-300 rounded-full opacity-30 animate-bounce" />
              <div className="absolute bottom-4 right-10 w-6 h-6 bg-pink-300 rounded-full opacity-40 animate-pulse" />

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-purple-200">
                  <div className="text-6xl mb-4 animate-bounce">👋</div>

                  <h2 className="text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Welcome, Admin!
                    </span>
                  </h2>

                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    🎉 You're logged in as an administrator! You can now manage
                    your beautiful bouquet collection and upload stunning new
                    flower photos to showcase your artistry! ✨
                  </p>

                  <button
                    onClick={() => setShowAdmin((prev) => !prev)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-400/50 flex items-center space-x-3 mx-auto"
                  >
                    <span>{showAdmin ? "🌐" : "⚙️"}</span>
                    <span>
                      {showAdmin ? "View Website" : "Manage Products"}
                    </span>
                    <span>{showAdmin ? "✨" : "🌸"}</span>
                  </button>
                </div>
              </div>
            </div>

            {showAdmin && <AdminDashboard />}
          </>
        )}
      </Authenticated>

      <Unauthenticated>
        <div className="py-16 bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">
          <div className="max-w-md mx-auto p-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-purple-200">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4 animate-pulse">🔐</div>

                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Admin Access
                  </span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                  🌸 Sign in to upload your beautiful bouquet photos and manage
                  your flower collection! ✨
                </p>
              </div>

              <SignInForm />
            </div>
          </div>
        </div>
      </Unauthenticated>
    </>
  );
}
