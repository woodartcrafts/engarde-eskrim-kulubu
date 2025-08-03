// Blog yazıları için ortak veri yönetimi
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
  readTime: string;
  likes: number;
  comments: number;
  status: "published" | "draft";
  views: number;
}

// Başlangıç blog verileri
export const initialBlogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "eskrim-teknikleri-baslangic",
    title: "Eskrim Teknikleri: Başlangıç Rehberi",
    excerpt: "Eskrime yeni başlayanlar için temel teknikler ve ipuçları. Doğru duruş, saldırı ve savunma teknikleri hakkında detaylı bilgi.",
    content: "Eskrime yeni başlayanlar için temel teknikler ve ipuçları. Doğru duruş, saldırı ve savunma teknikleri hakkında detaylı bilgi. Bu rehberde eskrim sporunun temellerini öğreneceksiniz.",
    author: "Engarde Eğitmenleri",
    date: "2024-01-15",
    image: "/UzayKutluEskrim.jpg",
    tags: ["Teknik", "Başlangıç"],
    readTime: "5 dk",
    likes: 24,
    comments: 8,
    status: "published",
    views: 1247
  },
  {
    id: 2,
    slug: "turnuva-basari-hikayesi",
    title: "2024 İstanbul Eskrim Turnuvası Başarı Hikayemiz",
    excerpt: "Kulübümüzün son turnuvadaki başarıları ve öğrencilerimizin gösterdiği performans. Foil, Epee ve Sabre kategorilerinde elde ettiğimiz sonuçlar.",
    content: "2024 İstanbul Eskrim Turnuvası'nda kulübümüz büyük başarılar elde etti. Öğrencilerimiz Foil, Epee ve Sabre kategorilerinde mükemmel performans gösterdi.",
    author: "Engarde Eğitmenleri",
    date: "2024-01-10",
    image: "/UzayKutluEskrim.jpg",
    tags: ["Haber", "Turnuva"],
    readTime: "3 dk",
    likes: 31,
    comments: 12,
    status: "published",
    views: 892
  },
  {
    id: 3,
    slug: "eskrim-ekipman-rehberi",
    title: "Eskrim Ekipmanları: Doğru Seçim Rehberi",
    excerpt: "Foil, Epee ve Sabre için gerekli ekipmanlar. Maske, ceket, eldiven ve kılıç seçiminde dikkat edilmesi gerekenler.",
    content: "Eskrim ekipmanları seçerken dikkat edilmesi gerekenler. Maske, ceket, eldiven ve kılıç seçimi hakkında detaylı bilgi.",
    author: "Engarde Eğitmenleri",
    date: "2024-01-05",
    image: "/UzayKutluEskrim.jpg",
    tags: ["Ekipman", "Rehber"],
    readTime: "7 dk",
    likes: 18,
    comments: 5,
    status: "draft",
    views: 0
  },
  {
    id: 4,
    slug: "eskrim-tarihi-osmanli",
    title: "Osmanlı'da Eskrim: Tarihi Bir Bakış",
    excerpt: "Osmanlı İmparatorluğu döneminde eskrim sanatının gelişimi ve günümüze etkileri. Tarihi belgeler ve anekdotlarla zenginleştirilmiş içerik.",
    content: "Osmanlı İmparatorluğu döneminde eskrim sanatı nasıl gelişti? Tarihi belgeler ve anekdotlarla zenginleştirilmiş içerik.",
    author: "Engarde Eğitmenleri",
    date: "2024-01-01",
    image: "/UzayKutluEskrim.jpg",
    tags: ["Tarih", "Kültür"],
    readTime: "8 dk",
    likes: 42,
    comments: 15,
    status: "published",
    views: 2156
  }
];

// LocalStorage'dan blog verilerini al
export const getBlogPosts = (): BlogPost[] => {
  if (typeof window === 'undefined') {
    return initialBlogPosts;
  }
  
  const stored = localStorage.getItem('blogPosts');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return initialBlogPosts;
    }
  }
  
  return initialBlogPosts;
};

// LocalStorage'a blog verilerini kaydet
export const saveBlogPosts = (posts: BlogPost[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }
};

// Yayınlanan blog yazılarını al
export const getPublishedBlogPosts = (): BlogPost[] => {
  return getBlogPosts().filter(post => post.status === "published");
}; 