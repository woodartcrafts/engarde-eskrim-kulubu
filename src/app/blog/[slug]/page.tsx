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
      <section className="relative overflow-hidden bg-slate-800 text-white py-4 lg:py-6 flex items-center justify-center w-full min-h-[200px]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 w-full h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto w-full">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 animate-fade-in font-cinzel-black knight-text-shadow leading-tight text-center">
              {post.title}
            </h1>
            
            {/* Excerpt */}
            <p className="text-base md:text-lg mb-6 text-blue-100 animate-fade-in-delay font-cinzel leading-relaxed max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            
            {/* Author and Date */}
            <div className="flex items-center justify-center gap-4 animate-fade-in-delay-2 text-sm font-cinzel">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">EE</span>
                </div>
                <span>{post.author}</span>
              </div>
              <span className="text-blue-300">•</span>
              <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Decorative Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse parallax-slow"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/5 rounded-full animate-pulse delay-1000 parallax-medium"></div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-white relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 parallax-bg"></div>
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative h-48 md:h-64 lg:h-80 rounded-2xl overflow-hidden mb-8 knight-border bg-gray-100 dark:bg-gray-800 shadow-lg">
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
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium font-cinzel-bold border border-blue-200">
                  #{tag}
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
              <h3 className="text-xl font-bold text-gray-900 mb-6 font-cinzel-bold text-center">
                Bu Yazıyı Paylaş
              </h3>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <button className="bg-[#1877F2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#166FE5] transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-sm font-cinzel-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
                <button className="bg-[#1DA1F2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1A91DA] transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-sm font-cinzel-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </button>
                <button className="bg-[#E4405F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#D6336C] transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-sm font-cinzel-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                  Instagram
                </button>
                <button className="bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-sm font-cinzel-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </button>
                <button className="bg-[#0077B5] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#006097] transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-sm font-cinzel-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
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
              <p className="text-orange-400 font-cinzel text-sm">
                © 2024 Engarde Eskrim Kulübü. Tüm hakları saklıdır.
              </p>
            </div>
            {/* Yasal Linkler - Tek Satır */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-3 text-xs">
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