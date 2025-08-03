"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basit authentication (gerçek uygulamada API'den gelecek)
    if (username === "admin" && password === "engarde2024") {
      // Session'a admin bilgisini kaydet
      sessionStorage.setItem("adminLoggedIn", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Kullanıcı adı veya şifre hatalı!");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo ve Başlık */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 font-cinzel-black knight-text-shadow">
              Engarde Admin
            </h1>
            <p className="text-blue-100 font-cinzel">
              Blog yönetim paneli
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 knight-border shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center font-cinzel-black">
              Giriş Yap
            </h2>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 font-cinzel">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-cinzel-bold">
                  Kullanıcı Adı
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none font-cinzel"
                  placeholder="Kullanıcı adınız"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-cinzel-bold">
                  Şifre
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none font-cinzel"
                  placeholder="Şifreniz"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 btn-knight knight-border font-cinzel-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Giriş Yapılıyor..." : "Giriş Yap"}
              </button>
            </form>

            {/* Demo Bilgileri */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2 font-cinzel-bold">
                Demo Giriş Bilgileri:
              </h3>
              <div className="text-sm text-blue-700 dark:text-blue-300 font-cinzel">
                <p><strong>Kullanıcı Adı:</strong> admin</p>
                <p><strong>Şifre:</strong> engarde2024</p>
              </div>
            </div>

            {/* Ana Sayfaya Dön */}
            <div className="mt-6 text-center">
              <Link 
                href="/"
                className="text-blue-600 hover:text-blue-700 font-semibold font-cinzel-bold"
              >
                ← Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full animate-pulse parallax-slow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full animate-pulse delay-1000 parallax-medium"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-500 parallax-fast"></div>
    </div>
  );
} 