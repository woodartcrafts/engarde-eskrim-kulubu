"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import React from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen w-full max-w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-2 lg:py-1 flex items-center w-full transition-all duration-300" id="header">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-0 py-1 lg:py-0.5 w-full">
          <div className="text-center max-w-6xl mx-auto w-full">
            <div className="flex flex-row items-center justify-between gap-4 mb-0">
              {/* Logo - Sol Taraf */}
              <div className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] lg:w-[10rem] lg:h-[10rem] flex items-center justify-center animate-fade-in ml-2.5">
                <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>}>
                  <Image
                    src="/engardelogo.png"
                    alt="Engarde Eskrim Logo"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    priority
                    quality={90}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </Suspense>
              </div>
              
              {/* Başlık - Tam Ortada */}
              <div className="flex-1 text-center">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-0 animate-fade-in font-cinzel-black knight-text-shadow leading-tight">
                  Engarde Eskrim
                </h1>
                <p className="text-xs md:text-sm lg:text-lg mb-1 text-blue-100 animate-fade-in-delay font-cinzel leading-tight">
                  Modern eskrim kulübü
                </p>
              </div>
              
              {/* Navigation Menu - Sağ Taraf */}
              <div className="flex items-center">
                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-6">
                  <Link href="/" className="text-white hover:text-blue-200 transition-colors font-cinzel-bold text-sm lg:text-base">
                    Ana Sayfa
                  </Link>
                  <Link href="/blog" className="text-white hover:text-blue-200 transition-colors font-cinzel-bold text-sm lg:text-base">
                    Blog
                  </Link>
                  <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full font-cinzel-bold text-sm lg:text-base transition-all duration-300 border border-white/30 hover:border-white/50">
                    İletişim
                  </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMenu}
                  className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                  aria-label="Toggle menu"
                >
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20`}>
              <nav className="flex flex-col space-y-3">
                <Link 
                  href="/" 
                  className="text-white hover:text-blue-200 transition-colors font-cinzel-bold text-base py-2 px-4 rounded hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ana Sayfa
                </Link>
                <Link 
                  href="/blog" 
                  className="text-white hover:text-blue-200 transition-colors font-cinzel-bold text-base py-2 px-4 rounded hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full font-cinzel-bold text-base transition-all duration-300 border border-white/30 hover:border-white/50 w-full text-center">
                  İletişim
                </button>
              </nav>
            </div>
          </div>
        </div>
        
        {/* Enhanced Decorative Elements with Parallax */}
        <div className="absolute top-5 left-10 w-12 h-12 bg-white/10 rounded-full animate-pulse parallax-slow"></div>
        <div className="absolute bottom-5 right-10 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000 parallax-medium"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-500 parallax-fast"></div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-white/5 rounded-full animate-pulse delay-700 parallax-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-white/10 rounded-full animate-pulse delay-300 parallax-medium"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900 relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 parallax-bg"></div>
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 font-cinzel-black knight-text-shadow">
              Kulübümüzün Özellikleri
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-cinzel">
              Profesyonel eğitmenler eşliğinde modern eskrim teknikleri
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Profesyonel Eğitim",
                description: "Deneyimli antrenörler eşliğinde temel ve ileri seviye eskrim teknikleri",
                icon: "🏆",
                color: "from-yellow-50 to-orange-50"
              },
              {
                title: "Modern Ekipman",
                description: "En son teknoloji eskrim ekipmanları ile güvenli antrenman",
                icon: "⚔️",
                color: "from-blue-50 to-indigo-50"
              },
              {
                title: "Yarışma Fırsatları",
                description: "Ulusal ve uluslararası turnuvalara katılım imkanları",
                icon: "🎯",
                color: "from-green-50 to-emerald-50"
              }
            ].map((feature, index) => (
              <div key={index} className={`bg-gradient-to-br ${feature.color} dark:from-slate-800 dark:to-slate-700 p-10 rounded-3xl hover:transform hover:scale-105 transition-all duration-500 knight-border shadow-lg hover:shadow-2xl`}>
                <div className="text-6xl mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-cinzel-bold text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-cinzel text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 dark:from-blue-800/10 dark:to-purple-800/10 parallax-bg-reverse"></div>
        <div className="container mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 font-cinzel-black knight-text-shadow">
                Hakkımızda
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-cinzel leading-relaxed">
                Engarde Eskrim Kulübü, modern eskrim tekniklerini öğretmek ve 
                bu antik sporun inceliklerini yeni nesillere aktarmak amacıyla kurulmuştur. 
                Profesyonel eğitmenlerimiz eşliğinde güvenli ve eğlenceli bir ortamda 
                eskrim sanatını öğrenin.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-base font-medium font-cinzel-bold hover:bg-blue-200 transition-colors">
                  Foil
                </span>
                <span className="bg-green-100 text-green-800 px-6 py-3 rounded-full text-base font-medium font-cinzel-bold hover:bg-green-200 transition-colors">
                  Epee
                </span>
                <span className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full text-base font-medium font-cinzel-bold hover:bg-purple-200 transition-colors">
                  Sabre
                </span>
                <span className="bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-base font-medium font-cinzel-bold hover:bg-orange-200 transition-colors">
                  Antrenman
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-10 rounded-3xl text-white knight-border shadow-2xl">
                <h3 className="text-3xl font-bold mb-6 font-cinzel-black">Eskrim Kategorileri</h3>
                <ul className="space-y-4 font-cinzel text-lg">
                  <li className="flex items-center">
                    <span className="mr-3 text-2xl">⚔️</span>
                    <div>
                      <strong>Foil (Flöre)</strong> - Teknik ve hız odaklı
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 text-2xl">⚔️</span>
                    <div>
                      <strong>Epee (Kılıç)</strong> - Güç ve strateji odaklı
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 text-2xl">⚔️</span>
                    <div>
                      <strong>Sabre (Kılıç)</strong> - Hız ve saldırı odaklı
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 text-2xl">🏆</span>
                    <div>
                      <strong>Yarışma hazırlığı</strong> - Turnuva odaklı eğitim
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-slate-900 w-full">
        <div className="container mx-auto px-4 text-center w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 font-cinzel-black knight-text-shadow">
            İletişime Geçin
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-cinzel leading-relaxed">
            Eskrim dünyasına adım atmak için bizimle iletişime geçin. 
            Ücretsiz deneme dersi için kayıt olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-600 text-white px-12 py-6 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-lg shadow-lg hover:shadow-xl">
              Deneme Dersi
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-12 py-6 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 btn-knight text-lg shadow-lg hover:shadow-xl">
              Bilgi Al
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 w-full">
        <div className="container mx-auto px-4 w-full">
          {/* Ana Footer İçeriği */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Kulüp Bilgileri */}
            <div>
              <h3 className="text-2xl font-bold mb-4 font-cinzel-black">Engarde Eskrim Kulübü</h3>
              <p className="text-gray-400 font-cinzel mb-4">
                Modern eskrim teknikleri ve profesyonel eğitim. 
                Güvenli ve eğlenceli bir ortamda eskrim sanatını öğrenin.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="text-xl">📧</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="text-xl">📱</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="text-xl">📍</span>
                </a>
              </div>
            </div>

            {/* Hızlı Linkler */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-cinzel-bold">Hızlı Linkler</h4>
              <ul className="space-y-2 font-cinzel">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dersler</a></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Eğitmenler</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Galeri</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">İletişim</a></li>
              </ul>
            </div>

            {/* Hizmetler */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-cinzel-bold">Hizmetlerimiz</h4>
              <ul className="space-y-2 font-cinzel">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Foil Eğitimi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Epee Eğitimi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sabre Eğitimi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Yarışma Hazırlığı</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ekipman Satışı</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Özel Dersler</a></li>
              </ul>
            </div>
          </div>

          {/* Yasal Linkler */}
          <div className="border-t border-gray-800 pt-8">
            {/* Copyright - Tek Satır */}
            <div className="text-center mb-4">
              <p className="text-orange-400 font-cinzel">
                © 2024 Engarde Eskrim Kulübü. Tüm hakları saklıdır.
              </p>
            </div>
            {/* Yasal Linkler - Tek Satır */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors font-cinzel">
                  Gizlilik Politikası
                </a>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors font-cinzel">
                  Kullanım Şartları
                </a>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors font-cinzel">
                  Çerez Politikası
                </a>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors font-cinzel">
                  KVKK
                </a>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors font-cinzel">
                  Sorumluluk Reddi
                </a>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors font-cinzel">
                  İletişim
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
