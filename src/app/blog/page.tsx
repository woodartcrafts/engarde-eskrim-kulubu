"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import React, { useEffect } from "react";
import { getPublishedBlogPosts, type BlogPost } from "@/lib/blogData";

// Blog yazıları için örnek veri (fallback)
const fallbackBlogPosts = [
  {
    id: 1,
    slug: "eskrim-teknikleri-baslangic",
    title: "Eskrim Teknikleri: Başlangıç Rehberi",
    excerpt: "Eskrime yeni başlayanlar için temel teknikler ve ipuçları. Doğru duruş, saldırı ve savunma teknikleri hakkında detaylı bilgi.",
    content: "Eskrime yeni başlayanlar için temel teknikler ve ipuçları...",
    author: "Engarde Eğitmenleri",
    date: "2024-01-15",
    image: "/UzayKutluEskrim.jpg",
    tags: ["Teknik", "Başlangıç"],
    readTime: "5 dk",
    likes: 24,
    comments: 8
  },
  {
    id: 2,
    slug: "turnuva-basari-hikayesi",
    title: "2024 İstanbul Eskrim Turnuvası Başarı Hikayemiz",
    excerpt: "Kulübümüzün son turnuvadaki başarıları ve öğrencilerimizin gösterdiği performans. Foil, Epee ve Sabre kategorilerinde elde ettiğimiz sonuçlar.",
    content: "2024 İstanbul Eskrim Turnuvası'nda kulübümüz...",
    author: "Engarde Eğitmenleri",
    date: "2024-01-10",
    image: "/UzayKutluEskrim.jpg",
    tags: ["Haber", "Turnuva"],
    readTime: "3 dk",
    likes: 31,
    comments: 12
  },
  {
    id: 3,
    slug: "eskrim-ekipman-rehberi",
    title: "Eskrim Ekipmanları: Doğru Seçim Rehberi",
    excerpt: "Foil, Epee ve Sabre için gerekli ekipmanlar. Maske, ceket, eldiven ve kılıç seçiminde dikkat edilmesi gerekenler.",
    content: "Eskrim ekipmanları seçerken dikkat edilmesi gerekenler...",
    author: "Engarde Eğitmenleri",
    date: "2024-01-05",
    image: "/UzayKutluEskrim.jpg",
    tags: ["Ekipman", "Rehber"],
    readTime: "7 dk",
    likes: 18,
    comments: 5
  },
  {
    id: 4,
    slug: "eskrim-tarihi-osmanli",
    title: "Osmanlı'da Eskrim: Tarihi Bir Bakış",
    excerpt: "Osmanlı İmparatorluğu döneminde eskrim sanatının gelişimi ve günümüze etkileri. Tarihi belgeler ve anekdotlarla zenginleştirilmiş içerik.",
    content: "Osmanlı İmparatorluğu döneminde eskrim sanatı...",
    author: "Engarde Eğitmenleri",
    date: "2024-01-01",
    image: "/UzayKutluEskrim.jpg",
    tags: ["Tarih", "Kültür"],
    readTime: "8 dk",
    likes: 42,
    comments: 15
  }
];

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Yayınlanan blog yazılarını yükle
    const publishedPosts = getPublishedBlogPosts();
    setBlogPosts(publishedPosts);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-full">
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

      {/* Blog Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900 text-white py-1 lg:py-2 flex items-center w-full">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 py-0 lg:py-1 w-full">
          <div className="text-center max-w-4xl mx-auto w-full">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-0 animate-fade-in font-cinzel-black knight-text-shadow leading-tight">
              Engarde Blog
            </h1>
          </div>
        </div>
        
        {/* Enhanced Decorative Elements */}
        <div className="absolute top-5 left-10 w-12 h-12 bg-white/10 rounded-full animate-pulse parallax-slow"></div>
        <div className="absolute bottom-5 right-10 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000 parallax-medium"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-500 parallax-fast"></div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 features-section relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 parallax-bg"></div>
        <div className="container mx-auto px-4 w-full">
                     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             {blogPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 knight-border hover:transform hover:scale-105">
                                 {/* Blog Image */}
                                 <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse"></div>}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-contain transition-transform duration-500 hover:scale-110"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </Suspense>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium font-cinzel-bold">
                      {post.tags[0]}
                    </span>
                  </div>
                </div>

                                 {/* Blog Content */}
                 <div className="p-4">
                   <div className="flex items-center gap-4 mb-1 text-sm text-gray-500 dark:text-gray-400 font-cinzel">
                     <span>{post.author}</span>
                     <span>•</span>
                     <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                   </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-cinzel-bold leading-tight line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-3 font-cinzel leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium font-cinzel">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Interaction Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-cinzel">
                      <span className="flex items-center gap-1">
                        <span>👍</span>
                        <span>{post.likes}</span>
                      </span>
                                             <span className="flex items-center gap-1">
                         <span>💬</span>
                         <span>{Math.floor(post.comments / 2)}</span>
                       </span>
                    </div>

                    {/* Social Share Buttons */}
                    <div className="flex items-center gap-2">
                      <button className="text-gray-400 hover:text-blue-600 transition-colors p-1">
                        <span className="text-lg">📘</span>
                      </button>
                      <button className="text-gray-400 hover:text-blue-400 transition-colors p-1">
                        <span className="text-lg">🐦</span>
                      </button>
                      <button className="text-gray-400 hover:text-green-500 transition-colors p-1">
                        <span className="text-lg">📱</span>
                      </button>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-block mt-3 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-sm font-cinzel-bold"
                  >
                    Devamını Oku
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-lg font-cinzel-bold shadow-lg hover:shadow-xl">
              Daha Fazla Yazı
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-1 about-section relative w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 dark:from-blue-800/10 dark:to-purple-800/10 parallax-bg-reverse"></div>
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white font-cinzel-black knight-text-shadow">
                Blog Güncellemelerini Kaçırmayın
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-cinzel">
                Yeni blog yazılarımızdan haberdar olmak için e-posta listemize katılın.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="px-4 py-2 rounded-full border-2 border-gray-300 focus:border-blue-600 focus:outline-none font-cinzel text-sm"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 btn-knight knight-border font-cinzel-bold text-sm">
                  Abone Ol
                </button>
              </div>
            </div>
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