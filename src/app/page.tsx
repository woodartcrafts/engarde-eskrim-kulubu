import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-1 lg:py-2 flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-0 lg:py-1">
          <div className="text-center max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 mb-0">
              <div className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] flex items-center justify-center animate-fade-in lg:mr-auto">
                <img
                  src="/engardelogo.png"
                  alt="Engarde Eskrim Logo"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  style={{maxWidth: '100%', maxHeight: '100%'}}
                />
              </div>
              <div className="lg:max-w-xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-0 animate-fade-in font-cinzel-black knight-text-shadow leading-tight whitespace-nowrap">
                  Engarde Eskrim
                </h1>
                <p className="text-base md:text-lg lg:text-xl mb-1 text-blue-100 animate-fade-in-delay font-cinzel leading-tight whitespace-nowrap">
                  Modern eskrim kulübü - Kılıç sanatının inceliklerini keşfedin
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 btn-knight knight-border text-sm">
                    Üye Ol
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 btn-knight text-sm">
                    Dersler
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Decorative Elements with Parallax */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full animate-pulse parallax-slow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full animate-pulse delay-1000 parallax-medium"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-500 parallax-fast"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-700 parallax-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-300 parallax-medium"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 parallax-bg"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-cinzel-black knight-text-shadow">
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 dark:from-blue-800/10 dark:to-purple-800/10 parallax-bg-reverse"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 font-cinzel-black knight-text-shadow">
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
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 font-cinzel-black knight-text-shadow">
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
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
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 font-cinzel">
                  © 2024 Engarde Eskrim Kulübü. Tüm hakları saklıdır.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-cinzel">
                  Gizlilik Politikası
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-cinzel">
                  Kullanım Şartları
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-cinzel">
                  Çerez Politikası
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-cinzel">
                  KVKK
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-cinzel">
                  Sorumluluk Reddi
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-cinzel">
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
