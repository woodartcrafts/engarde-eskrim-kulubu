"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import React, { useEffect } from "react";
import { getBlogPosts, BlogPost } from "../../../lib/blogData";

// Blog yazısı verisi (localStorage'dan gelecek)
const getBlogPost = (slug: string): BlogPost | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
};

// Yorum verisi
const comments = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    date: "2024-01-16",
    content: "Çok faydalı bir yazı olmuş. Özellikle temel duruş kısmı çok açıklayıcı. Teşekkürler!",
    avatar: "AY"
  },
  {
    id: 2,
    name: "Zeynep Kaya",
    date: "2024-01-16",
    content: "Yeni başlayanlar için gerçekten çok iyi bir rehber. Antrenman ipuçları özellikle çok değerli.",
    avatar: "ZK"
  },
  {
    id: 3,
    name: "Mehmet Demir",
    date: "2024-01-15",
    content: "Savunma teknikleri kısmını daha detaylı açıklayabilir misiniz? Parry teknikleri hakkında daha fazla bilgi almak istiyorum.",
    avatar: "MD"
  }
];

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const resolvedParams = React.use(params);

  useEffect(() => {
    if (resolvedParams.slug) {
      const foundPost = getBlogPost(resolvedParams.slug);
      setPost(foundPost);
      setLoading(false);
    }
  }, [resolvedParams.slug]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600 font-cinzel">Yazı yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-cinzel-black">
            Yazı Bulunamadı
          </h1>
          <Link 
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Blog&apos;a Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-full">
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

      {/* Blog Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-8 lg:py-12 flex items-center w-full">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-0 lg:py-1 w-full">
          <div className="text-center max-w-4xl mx-auto w-full">
            <div className="flex items-center justify-center gap-4 mb-4 text-sm font-cinzel">
              <Link href="/blog" className="text-blue-200 hover:text-white transition-colors">
                ← Blog&apos;a Dön
              </Link>
              <span>•</span>
              <span>{post.tags[0]}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
                         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in font-cinzel-black knight-text-shadow leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
               {post.title}
             </h1>
            <p className="text-lg md:text-xl mb-6 text-blue-100 animate-fade-in-delay font-cinzel leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-center gap-6 animate-fade-in-delay-2 text-sm font-cinzel">
              <span>{post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Decorative Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full animate-pulse parallax-slow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full animate-pulse delay-1000 parallax-medium"></div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 parallax-bg"></div>
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-4xl mx-auto">
                         {/* Featured Image */}
             <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8 knight-border bg-gray-100 dark:bg-gray-800">
               <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse"></div>}>
                 <Image
                   src={post.image}
                   alt={post.title}
                   fill
                   className="object-contain"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                   placeholder="blur"
                   blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                 />
               </Suspense>
             </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium font-cinzel-bold">
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none font-cinzel leading-relaxed text-gray-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Social Share */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-cinzel-bold">
                Bu Yazıyı Paylaş
              </h3>
              <div className="flex items-center gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-sm font-cinzel-bold">
                  📘 Facebook
                </button>
                <button className="bg-blue-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-sm font-cinzel-bold">
                  🐦 Twitter
                </button>
                <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-sm font-cinzel-bold">
                  📱 WhatsApp
                </button>
                <button className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-sm font-cinzel-bold">
                  💼 LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 parallax-bg-reverse"></div>
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-cinzel-black knight-text-shadow">
              Yorumlar ({comments.length})
            </h2>

            {/* Comment Form */}
            <div className="bg-white rounded-2xl p-6 mb-8 knight-border shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-cinzel-bold">
                Yorum Yap
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Adınız"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none font-cinzel"
                  />
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none font-cinzel"
                  />
                </div>
                <textarea
                  placeholder="Yorumunuz..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none font-cinzel resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 btn-knight knight-border font-cinzel-bold"
                >
                  Yorum Gönder
                </button>
              </form>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-white rounded-2xl p-6 knight-border shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold font-cinzel-bold">
                      {comment.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h4 className="font-bold text-gray-900 font-cinzel-bold">
                          {comment.name}
                        </h4>
                        <span className="text-sm text-gray-500 font-cinzel">
                          {new Date(comment.date).toLocaleDateString('tr-TR')}
                        </span>
                      </div>
                      <p className="text-gray-700 font-cinzel leading-relaxed">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 parallax-bg"></div>
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-cinzel-black knight-text-shadow text-center">
              İlgili Yazılar
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 knight-border shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-cinzel-bold">
                  Eskrim Ekipmanları: Doğru Seçim Rehberi
                </h3>
                <p className="text-gray-600 mb-4 font-cinzel">
                  Foil, Epee ve Sabre için gerekli ekipmanlar hakkında detaylı bilgi.
                </p>
                <Link 
                  href="/blog/eskrim-ekipman-rehberi"
                  className="text-blue-600 hover:text-blue-700 font-semibold font-cinzel-bold"
                >
                  Devamını Oku →
                </Link>
              </div>
              <div className="bg-white rounded-2xl p-6 knight-border shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-cinzel-bold">
                  2024 İstanbul Eskrim Turnuvası Başarı Hikayemiz
                </h3>
                <p className="text-gray-600 mb-4 font-cinzel">
                  Kulübümüzün son turnuvadaki başarıları ve öğrencilerimizin performansı.
                </p>
                <Link 
                  href="/blog/turnuva-basari-hikayesi"
                  className="text-blue-600 hover:text-blue-700 font-semibold font-cinzel-bold"
                >
                  Devamını Oku →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 