import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
              <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white/20 rounded-full flex items-center justify-center animate-fade-in knight-border overflow-hidden">
                <Image
                  src="/engardelogo"
                  alt="Engarde Eskrim Logo"
                  width={120}
                  height={120}
                  className="w-24 h-24 lg:w-32 lg:h-32 rounded-full"
                  priority
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in font-cinzel-black knight-text-shadow">
                  Engarde Eskrim
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-delay font-cinzel whitespace-nowrap">
                  Modern eskrim kulübü - Kılıç sanatının inceliklerini keşfedin
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 btn-knight knight-border">
                Üye Ol
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 btn-knight">
                Dersler
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-cinzel-black knight-text-shadow">
              Kulübümüzün Özellikleri
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-cinzel">
              Profesyonel eğitmenler eşliğinde modern eskrim teknikleri
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Profesyonel Eğitim",
                description: "Deneyimli antrenörler eşliğinde temel ve ileri seviye eskrim teknikleri",
                icon: "🏆"
              },
              {
                title: "Modern Ekipman",
                description: "En son teknoloji eskrim ekipmanları ile güvenli antrenman",
                icon: "⚔️"
              },
              {
                title: "Yarışma Fırsatları",
                description: "Ulusal ve uluslararası turnuvalara katılım imkanları",
                icon: "🎯"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 knight-border">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-cinzel-bold">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-cinzel">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-cinzel-black knight-text-shadow">
                Hakkımızda
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 font-cinzel">
                Engarde Eskrim Kulübü, modern eskrim tekniklerini öğretmek ve 
                bu antik sporun inceliklerini yeni nesillere aktarmak amacıyla kurulmuştur. 
                Profesyonel eğitmenlerimiz eşliğinde güvenli ve eğlenceli bir ortamda 
                eskrim sanatını öğrenin.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium font-cinzel-bold">
                  Foil
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium font-cinzel-bold">
                  Epee
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium font-cinzel-bold">
                  Sabre
                </span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium font-cinzel-bold">
                  Antrenman
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white knight-border">
                <h3 className="text-2xl font-bold mb-4 font-cinzel-black">Eskrim Kategorileri</h3>
                <ul className="space-y-2 font-cinzel">
                  <li className="flex items-center">
                    <span className="mr-2">⚔️</span>
                    Foil (Flöre) - Teknik ve hız
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">⚔️</span>
                    Epee (Kılıç) - Güç ve strateji
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">⚔️</span>
                    Sabre (Kılıç) - Hız ve saldırı
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🏆</span>
                    Yarışma hazırlığı
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-cinzel-black knight-text-shadow">
            İletişime Geçin
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-cinzel">
            Eskrim dünyasına adım atmak için bizimle iletişime geçin. 
            Ücretsiz deneme dersi için kayıt olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 btn-knight knight-border">
              Deneme Dersi
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 btn-knight">
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
