"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import React from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Instagram galeri verileri (örnek)
  const instagramPosts = [
    {
      id: 1,
      image: "/UzayKutluEskrim.jpg",
      caption: "Eskrim antrenmanı",
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      image: "/UzayKutluEskrim.jpg",
      caption: "Turnuva hazırlığı",
      likes: 31,
      comments: 12
    },
    {
      id: 3,
      image: "/UzayKutluEskrim.jpg",
      caption: "Yeni başlayanlar",
      likes: 18,
      comments: 5
    },
    {
      id: 4,
      image: "/UzayKutluEskrim.jpg",
      caption: "Ekipman tanıtımı",
      likes: 42,
      comments: 15
    },
    {
      id: 5,
      image: "/UzayKutluEskrim.jpg",
      caption: "Eğitmenlerimiz",
      likes: 28,
      comments: 9
    },
    {
      id: 6,
      image: "/UzayKutluEskrim.jpg",
      caption: "Kulüp etkinlikleri",
      likes: 35,
      comments: 11
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, instagramPosts.length - 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen w-full max-w-full">
      {/* Hero Section */}
      <section className="header-background text-white py-2 lg:py-1 flex items-center w-full transition-all duration-300" id="header">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-0 py-1 lg:py-0.5 w-full">
          <div className="text-center max-w-6xl mx-auto w-full">
            <div className="flex flex-row items-center justify-between gap-4 mb-0">
              {/* Logo - Sol Taraf */}
              <Link href="/" className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] lg:w-[10rem] lg:h-[10rem] flex items-center justify-center animate-fade-in ml-2.5 hover:scale-105 transition-transform duration-300">
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
              </Link>
              
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
                  <Link href="/contact" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full font-cinzel-bold text-sm lg:text-base transition-all duration-300 border border-white/30 hover:border-white/50">
                    İletişim
                  </Link>
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
                <Link href="/contact" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full font-cinzel-bold text-base transition-all duration-300 border border-white/30 hover:border-white/50 w-full text-center">
                  İletişim
                </Link>
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
      <section className="py-12 features-section relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 parallax-bg"></div>
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 font-cinzel-black knight-text-shadow">
              Kulübümüzün Özellikleri
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-cinzel">
              Profesyonel eğitmenler eşliğinde modern eskrim teknikleri
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
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
              <div key={index} className={`bg-gradient-to-br ${feature.color} dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-500 knight-border shadow-lg hover:shadow-2xl`}>
                <div className="text-4xl mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-cinzel-bold text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-cinzel text-center leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 about-section relative w-full">
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
      <section className="py-12 contact-section w-full">
        <div className="container mx-auto px-4 text-center w-full">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 font-cinzel-black knight-text-shadow">
            İletişime Geçin
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-cinzel leading-relaxed">
            Eskrim dünyasına adım atmak için bizimle iletişime geçin. 
            Ücretsiz deneme dersi için kayıt olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-base shadow-lg hover:shadow-xl">
              Deneme Dersi
            </Link>
            <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 btn-knight text-base shadow-lg hover:shadow-xl">
              Bilgi Al
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Section */}
      <section className="py-12 instagram-section relative w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 font-cinzel-black knight-text-shadow">
              Instagram Galerisi
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-cinzel">
              Kulübümüzden anlar ve güncel paylaşımlar
            </p>
          </div>
          
          {/* Gallery Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Gallery Container */}
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
                  {instagramPosts.map((post, index) => (
                    <div key={post.id} className="w-1/4 flex-shrink-0 px-2">
                      <div className="group relative overflow-hidden rounded-xl knight-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="aspect-square relative">
                          <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse"></div>}>
                            <Image
                              src={post.image}
                              alt={post.caption}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                              sizes="25vw"
                            />
                          </Suspense>
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          {/* Caption */}
                          <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="font-cinzel-bold text-sm mb-1 truncate">{post.caption}</p>
                            <div className="flex items-center gap-3 text-xs">
                              <span className="flex items-center gap-1">
                                <span>❤️</span>
                                <span>{post.likes}</span>
                              </span>
                              <span className="flex items-center gap-1">
                                <span>💬</span>
                                <span>{post.comments}</span>
                              </span>
                            </div>
                          </div>
                          {/* Instagram Icon */}
                          <div className="absolute top-2 right-2 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 hover:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                disabled={currentSlide >= instagramPosts.length - 4}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 hover:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Instagram Follow Button */}
          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-base shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
              Instagram'da Takip Et
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800 text-white py-8 w-full">
        <div className="container mx-auto px-4 w-full">
          {/* Ana Footer İçeriği */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Kulüp Bilgileri */}
            <div>
              <h3 className="text-xl font-bold mb-3 font-cinzel-black">Engarde Eskrim Kulübü</h3>
              <p className="text-gray-400 font-cinzel mb-3 text-sm">
                Modern eskrim teknikleri ve profesyonel eğitim. 
                Güvenli ve eğlenceli bir ortamda eskrim sanatını öğrenin.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="text-lg">📧</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="text-lg">📱</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="text-lg">📍</span>
                </a>
              </div>
            </div>

            {/* Hızlı Linkler */}
            <div>
              <h4 className="text-base font-semibold mb-3 font-cinzel-bold">Hızlı Linkler</h4>
              <ul className="space-y-1 font-cinzel text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</a></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Eğitmenler</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">İletişim</a></li>
              </ul>
            </div>

            {/* Hizmetler */}
            <div>
              <h4 className="text-base font-semibold mb-3 font-cinzel-bold">Hizmetlerimiz</h4>
              <ul className="space-y-1 font-cinzel text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Foil Eğitimi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Epee Eğitimi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sabre Eğitimi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ekipman Satışı</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Özel Dersler</a></li>
              </ul>
            </div>
          </div>

          {/* Yasal Linkler */}
          <div className="border-t border-gray-800 pt-6">
            {/* Copyright - Tek Satır */}
            <div className="text-center mb-3">
              <p className="text-orange-300 font-cinzel text-xs font-light">
                © 2024 Engarde Eskrim Kulübü. Tüm hakları saklıdır.
              </p>
            </div>
            {/* Yasal Linkler - Tek Satır */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-3 text-xs">
                <a href="#" className="text-orange-300 hover:text-orange-200 transition-colors font-cinzel font-light">
                  Gizlilik Politikası
                </a>
                <a href="#" className="text-orange-300 hover:text-orange-200 transition-colors font-cinzel font-light">
                  Kullanım Şartları
                </a>
                <a href="#" className="text-orange-300 hover:text-orange-200 transition-colors font-cinzel font-light">
                  Çerez Politikası
                </a>
                <a href="#" className="text-orange-300 hover:text-orange-200 transition-colors font-cinzel font-light">
                  KVKK
                </a>
                <a href="#" className="text-orange-300 hover:text-orange-200 transition-colors font-cinzel font-light">
                  Sorumluluk Reddi
                </a>
                <a href="#" className="text-orange-300 hover:text-orange-200 transition-colors font-cinzel font-light">
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
