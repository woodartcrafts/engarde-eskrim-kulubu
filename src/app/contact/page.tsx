"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simüle edilmiş form gönderimi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus("success");
    setIsSubmitting(false);
    
    // Formu temizle
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setSubmitStatus("idle");
    }, 3000);
  };

  return (
    <div className="min-h-screen w-full max-w-full">
      {/* Hero Section */}
      <section className="header-background text-white py-2 lg:py-1 flex items-center w-full transition-all duration-300">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Hero */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-900 dark:to-slate-800 relative w-full">
        <div className="container mx-auto px-4 text-center w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-cinzel-black knight-text-shadow">
            İletişim
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-cinzel leading-relaxed">
            Eskrim dünyasına adım atmak için bizimle iletişime geçin. 
            Sorularınızı yanıtlamaktan ve size yardımcı olmaktan mutluluk duyarız.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 contact-section relative w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-3xl knight-border shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 font-cinzel-black knight-text-shadow">
                Mesaj Gönderin
              </h2>
              
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg font-cinzel">
                  ✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-cinzel-bold">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-cinzel transition-all duration-300"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-cinzel-bold">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-cinzel transition-all duration-300"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-cinzel-bold">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-cinzel transition-all duration-300"
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-cinzel-bold">
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-cinzel transition-all duration-300"
                    >
                      <option value="">Konu seçiniz</option>
                      <option value="deneme-dersi">Deneme Dersi</option>
                      <option value="kayit">Kayıt ve Ücretler</option>
                      <option value="ekipman">Ekipman Satışı</option>
                      <option value="yarisma">Yarışma Bilgileri</option>
                      <option value="genel">Genel Bilgi</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-cinzel-bold">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-cinzel transition-all duration-300 resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Gönderiliyor...
                    </span>
                  ) : (
                    "Mesaj Gönder"
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-cinzel-black knight-text-shadow">
                  İletişim Bilgileri
                </h3>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl knight-border shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white font-cinzel-bold">E-posta</h4>
                      <p className="text-gray-600 dark:text-gray-300 font-cinzel">info@engarde-eskrim.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl knight-border shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white font-cinzel-bold">Telefon</h4>
                      <p className="text-gray-600 dark:text-gray-300 font-cinzel">+90 212 XXX XX XX</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl knight-border shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white font-cinzel-bold">Adres</h4>
                      <p className="text-gray-600 dark:text-gray-300 font-cinzel">
                        Eskrim Spor Salonu<br />
                        İstanbul, Türkiye
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-2xl knight-border shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-cinzel-bold">Çalışma Saatleri</h4>
                <div className="space-y-2 font-cinzel text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Pazartesi - Cuma</span>
                    <span className="text-gray-900 dark:text-white font-semibold">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Cumartesi</span>
                    <span className="text-gray-900 dark:text-white font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Pazar</span>
                    <span className="text-gray-900 dark:text-white font-semibold">10:00 - 16:00</span>
                  </div>
                </div>
              </div>

                             {/* Social Media */}
               <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-6 rounded-2xl knight-border shadow-lg">
                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-cinzel-bold">Sosyal Medya</h4>
                 <div className="flex space-x-4">
                   {/* Facebook */}
                   <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                     </svg>
                   </a>
                   
                                       {/* Instagram */}
                    <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                   
                   {/* Twitter/X */}
                   <a href="#" className="w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                     </svg>
                   </a>
                   
                   {/* YouTube */}
                   <a href="#" className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                     </svg>
                   </a>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 contact-section relative w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 font-cinzel-black knight-text-shadow">
              Konum
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-cinzel">
              Salonumuzu ziyaret etmek için haritayı kullanabilirsiniz
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-3xl knight-border shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">🗺️</span>
                <p className="text-gray-600 dark:text-gray-300 font-cinzel text-lg">
                  Harita burada görünecek
                </p>
                <p className="text-gray-500 dark:text-gray-400 font-cinzel text-sm mt-2">
                  Google Maps entegrasyonu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 about-section relative w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 font-cinzel-black knight-text-shadow">
              Sık Sorulan Sorular
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-cinzel">
              En çok sorulan sorular ve cevapları
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Deneme dersi için nasıl kayıt olabilirim?",
                answer: "Deneme dersi için iletişim formumuzu doldurabilir veya telefon ile bize ulaşabilirsiniz. Size en uygun zamanı belirleyip ücretsiz deneme dersi ayarlayacağız."
              },
              {
                question: "Hangi yaş grupları için eğitim veriyorsunuz?",
                answer: "7 yaş ve üzeri tüm yaş grupları için eskrim eğitimi veriyoruz. Yaş gruplarına göre özel programlarımız bulunmaktadır."
              },
              {
                question: "Ekipman satışı yapıyor musunuz?",
                answer: "Evet, profesyonel eskrim ekipmanları satışı yapıyoruz. Yeni başlayanlar için uygun fiyatlı setlerimiz mevcuttur."
              },
              {
                question: "Yarışmalara katılım nasıl oluyor?",
                answer: "Kulübümüz düzenli olarak ulusal ve uluslararası turnuvalara katılmaktadır. Yarışma takımımıza katılmak için seviye değerlendirmesi yapılır."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl knight-border shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 font-cinzel-bold">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-cinzel leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
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
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</a></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Eğitmenler</a></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">İletişim</Link></li>
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
                 <Link href="/contact" className="text-orange-300 hover:text-orange-200 transition-colors font-cinzel font-light">
                   İletişim
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 