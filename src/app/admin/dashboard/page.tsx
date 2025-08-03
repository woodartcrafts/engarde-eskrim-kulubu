"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getBlogPosts, saveBlogPosts, type BlogPost } from "@/lib/blogData";



// Yorumlar için örnek veri
const comments = [
  {
    id: 1,
    postTitle: "Eskrim Teknikleri: Başlangıç Rehberi",
    author: "Ahmet Yılmaz",
    content: "Çok faydalı bir yazı olmuş. Özellikle temel duruş kısmı çok açıklayıcı. Teşekkürler!",
    date: "2024-01-16",
    status: "approved"
  },
  {
    id: 2,
    postTitle: "Eskrim Teknikleri: Başlangıç Rehberi",
    author: "Zeynep Kaya",
    content: "Yeni başlayanlar için gerçekten çok iyi bir rehber. Antrenman ipuçları özellikle çok değerli.",
    date: "2024-01-16",
    status: "approved"
  },
  {
    id: 3,
    postTitle: "Eskrim Teknikleri: Başlangıç Rehberi",
    author: "Mehmet Demir",
    content: "Savunma teknikleri kısmını daha detaylı açıklayabilir misiniz?",
    date: "2024-01-15",
    status: "pending"
  }
];

export default function AdminDashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<number | null>(null);
  const [editingPost, setEditingPost] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Session kontrolü
    const adminLoggedIn = sessionStorage.getItem("adminLoggedIn");
    if (!adminLoggedIn) {
      router.push("/admin");
      return;
    }
    setIsLoggedIn(true);
    
    // Blog verilerini yükle
    const loadedPosts = getBlogPosts();
    setPosts(loadedPosts);
  }, [router]);

  // Debug için editingPost değişikliklerini izle
  useEffect(() => {
    if (editingPost) {
      const postToEdit = posts.find(p => p.id === editingPost);
      console.log('Düzenlenecek yazı bulundu:', postToEdit);
    }
  }, [editingPost, posts]);

  // Posts state değişikliklerini izle
  useEffect(() => {
    console.log('Posts state güncellendi:', posts);
  }, [posts]);

  const handleLogout = () => {
    sessionStorage.removeItem("adminLoggedIn");
    router.push("/admin");
  };

  const handleDeletePost = (postId: number) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    saveBlogPosts(updatedPosts);
    setShowDeleteConfirm(null);
  };

  const handleEditPost = (postId: number) => {
    console.log('=== DÜZENLEME BAŞLATILIYOR ===');
    console.log('Post ID:', postId);
    console.log('Mevcut posts:', posts);
    console.log('Bulunan post:', posts.find(p => p.id === postId));
    
    setEditingPost(postId);
    setActiveTab("new-post");
    console.log('✅ State güncellendi - editingPost:', postId, 'activeTab: new-post');
  };

  // Test için basit bir fonksiyon ekleyelim
  const testFunction = () => {
    console.log('Test fonksiyonu çalışıyor!');
    alert('Test fonksiyonu çalışıyor!');
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submit tetiklendi!');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const title = formData.get('title') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const tags = formData.get('tags') as string;
    const image = formData.get('image') as string;

    alert(`Form verileri: ${title}, ${excerpt}, ${content}, ${tags}, ${image}`);
    alert(`Düzenlenen yazı ID: ${editingPost}`);

    if (editingPost) {
      // Düzenleme işlemi - functional update kullanarak
      setPosts(prevPosts => {
        const updatedPosts = prevPosts.map(post => {
          if (post.id === editingPost) {
            const updatedPost: BlogPost = {
              ...post,
              title,
              excerpt,
              content,
              tags: tags ? tags.split(',').map(tag => tag.trim()) : post.tags,
              image,
              status: "published" as const,
              date: new Date().toISOString().split('T')[0]
            };
            alert(`Güncellenen yazı: ${updatedPost.title}`);
            return updatedPost;
          }
          return post;
        });
        
        // LocalStorage'a kaydet
        saveBlogPosts(updatedPosts);
        alert(`Güncellenmiş posts array uzunluğu: ${updatedPosts.length}`);
        return updatedPosts;
      });
      
      setEditingPost(null);
      setActiveTab("posts");
      alert('Güncelleme başarılı! State güncellendi ve kaydedildi.');
    } else {
      // Yeni yazı ekleme
      const newPost: BlogPost = {
        id: Math.max(...posts.map(p => p.id)) + 1,
        slug: title.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        title,
        excerpt,
        content,
        author: "Engarde Eğitmenleri",
        date: new Date().toISOString().split('T')[0],
        image,
        tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
        readTime: "5 dk",
        likes: 0,
        comments: 0,
        status: "published" as const,
        views: 0
      };
      
      const updatedPosts = [...posts, newPost];
      setPosts(updatedPosts);
      saveBlogPosts(updatedPosts);
      setActiveTab("posts");
      alert('Yeni yazı eklendi!');
    }
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-full bg-gray-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-cinzel-black">
                Engarde Admin
              </h1>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium font-cinzel-bold">
                Çevrimiçi
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="text-blue-600 hover:text-blue-700 font-semibold font-cinzel-bold"
              >
                Siteyi Görüntüle
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 font-cinzel-bold"
              >
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: "overview", label: "Genel Bakış", icon: "📊" },
              { id: "posts", label: "Blog Yazıları", icon: "📝" },
              { id: "comments", label: "Yorumlar", icon: "💬" },
              { id: "new-post", label: "Yeni Yazı", icon: "➕" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-cinzel-bold transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "Toplam Yazı", value: posts.length.toString(), icon: "📝", color: "blue" },
                { label: "Yayınlanan", value: posts.filter(p => p.status === "published").length.toString(), icon: "✅", color: "green" },
                { label: "Taslak", value: posts.filter(p => p.status === "draft").length.toString(), icon: "📄", color: "yellow" },
                { label: "Toplam Görüntüleme", value: posts.reduce((sum, post) => sum + post.views, 0).toLocaleString(), icon: "👁️", color: "purple" }
              ].map((stat) => (
                <div key={stat.label} className="bg-white dark:bg-slate-800 rounded-2xl p-6 knight-border shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-cinzel">
                        {stat.label}
                      </p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white font-cinzel-black">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`text-3xl ${stat.color === "blue" ? "text-blue-600" : stat.color === "green" ? "text-green-600" : stat.color === "yellow" ? "text-yellow-600" : "text-purple-600"}`}>
                      {stat.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 knight-border shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-cinzel-black">
                  Son Yazılar
                </h3>
                <div className="space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white font-cinzel-bold">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-cinzel">
                          {new Date(post.date).toLocaleDateString('tr-TR')}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium font-cinzel-bold ${
                        post.status === "published" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {post.status === "published" ? "Yayında" : "Taslak"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 knight-border shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-cinzel-black">
                  Son Yorumlar
                </h3>
                <div className="space-y-4">
                  {comments.slice(0, 3).map((comment) => (
                    <div key={comment.id} className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white font-cinzel-bold">
                          {comment.author}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium font-cinzel-bold ${
                          comment.status === "approved" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {comment.status === "approved" ? "Onaylandı" : "Beklemede"}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 font-cinzel mb-2">
                        {comment.content}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-cinzel">
                        {comment.postTitle} • {new Date(comment.date).toLocaleDateString('tr-TR')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "posts" && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 knight-border shadow-lg">
                         <div className="flex items-center justify-between mb-6">
               <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-cinzel-black">
                 Blog Yazıları
               </h2>
               <div className="flex gap-2">
                 <button 
                   onClick={testFunction}
                   className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 font-cinzel-bold"
                 >
                   Test
                 </button>
                 <button 
                   onClick={() => setActiveTab("new-post")}
                   className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 btn-knight knight-border font-cinzel-bold"
                 >
                   + Yeni Yazı
                 </button>
               </div>
             </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white font-cinzel-bold">
                      Başlık
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white font-cinzel-bold">
                      Durum
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white font-cinzel-bold">
                      Tarih
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white font-cinzel-bold">
                      Görüntüleme
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white font-cinzel-bold">
                      İşlemler
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.id} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-4 px-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white font-cinzel-bold">
                          {post.title}
                        </h4>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium font-cinzel-bold ${
                          post.status === "published" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {post.status === "published" ? "Yayında" : "Taslak"}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-600 dark:text-gray-400 font-cinzel">
                        {new Date(post.date).toLocaleDateString('tr-TR')}
                      </td>
                      <td className="py-4 px-4 text-gray-600 dark:text-gray-400 font-cinzel">
                        {post.views.toLocaleString()}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => handleEditPost(post.id)}
                            className="text-blue-600 hover:text-blue-700 font-semibold font-cinzel-bold"
                          >
                            Düzenle
                          </button>
                          <button 
                            onClick={() => setShowDeleteConfirm(post.id)}
                            className="text-red-600 hover:text-red-700 font-semibold font-cinzel-bold"
                          >
                            Sil
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Silme Onay Modal */}
            {showDeleteConfirm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 max-w-md w-full mx-4 knight-border shadow-2xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-cinzel-black">
                    Yazıyı Sil
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 font-cinzel">
                    Bu yazıyı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleDeletePost(showDeleteConfirm)}
                      className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 font-cinzel-bold"
                    >
                      Evet, Sil
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(null)}
                      className="bg-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 font-cinzel-bold"
                    >
                      İptal
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "comments" && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 knight-border shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-cinzel-black">
              Yorumlar
            </h2>

            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white font-cinzel-bold">
                        {comment.author}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-cinzel">
                        {new Date(comment.date).toLocaleDateString('tr-TR')}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium font-cinzel-bold ${
                      comment.status === "approved" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {comment.status === "approved" ? "Onaylandı" : "Beklemede"}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-cinzel mb-3">
                    {comment.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-cinzel">
                      Yazı: {comment.postTitle}
                    </span>
                    <div className="flex items-center gap-2">
                      {comment.status === "pending" && (
                        <>
                          <button className="text-green-600 hover:text-green-700 font-semibold font-cinzel-bold">
                            Onayla
                          </button>
                          <button className="text-red-600 hover:text-red-700 font-semibold font-cinzel-bold">
                            Reddet
                          </button>
                        </>
                      )}
                      <button className="text-blue-600 hover:text-blue-700 font-semibold font-cinzel-bold">
                        Yanıtla
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "new-post" && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 knight-border shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-cinzel-black">
              {editingPost ? "Yazıyı Düzenle" : "Yeni Blog Yazısı"}
            </h2>

            <form onSubmit={handleSavePost} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-cinzel-bold">
                  Başlık
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  defaultValue={editingPost ? posts.find(p => p.id === editingPost)?.title : ""}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none font-cinzel"
                  placeholder="Blog yazısı başlığı"
                  required
                />
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-cinzel-bold">
                  Özet
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  rows={3}
                  defaultValue={editingPost ? posts.find(p => p.id === editingPost)?.excerpt || "" : ""}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none font-cinzel resize-none"
                  placeholder="Blog yazısı özeti"
                ></textarea>
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-cinzel-bold">
                  İçerik
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows={10}
                  defaultValue={editingPost ? posts.find(p => p.id === editingPost)?.content || "" : ""}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none font-cinzel resize-none"
                  placeholder="Blog yazısı içeriği..."
                  required
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-cinzel-bold">
                    Etiketler
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    defaultValue={editingPost ? posts.find(p => p.id === editingPost)?.tags || "" : ""}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none font-cinzel"
                    placeholder="Etiketler (virgülle ayırın)"
                  />
                </div>

                                 <div>
                   <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-cinzel-bold">
                     Görsel URL
                   </label>
                   <input
                     type="text"
                     id="image"
                     name="image"
                     defaultValue={editingPost ? posts.find(p => p.id === editingPost)?.image || "" : ""}
                     className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none font-cinzel"
                     placeholder="Görsel URL'si (örn: /engardelogo.png)"
                   />
                 </div>
              </div>

                                             <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 btn-knight knight-border font-cinzel-bold"
                  >
                    {editingPost ? "Güncelle" : "Yayınla"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("posts");
                      setEditingPost(null);
                    }}
                    className="bg-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 btn-knight knight-border font-cinzel-bold"
                  >
                    İptal
                  </button>
                </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
} 