import React from 'react';
import LiveKitWidget from '../components/ai_avatar/LiveKitWidget.jsx';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const featured = [
  { id: 1, name: 'Tai nghe Bluetooth', price: '₫450.000' },
  { id: 2, name: 'Bình giữ nhiệt', price: '₫250.000' },
  { id: 3, name: 'Bàn phím cơ', price: '₫1.200.000' },
];

const offers = [
  { id: 1, title: 'Giảm 20% đơn hàng đầu tiên' },
  { id: 2, title: 'Mua 1 tặng 1' },
  { id: 3, title: 'Freeship toàn quốc' },
];

const bestsellers = [
  { id: 1, name: 'Chuột không dây', price: '₫320.000' },
  { id: 2, name: 'Sạc dự phòng', price: '₫500.000' },
  { id: 3, name: 'Loa mini', price: '₫600.000' },
  { id: 4, name: 'Ổ cứng SSD', price: '₫2.000.000' },
];

const Index: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="space-y-24">
        <Hero />
        <FeaturedProducts />
        <Offers />
        <BestSellers />
        <Contact />
      </main>
      <LiveKitWidget />
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur border-b z-40">
    <div className="container flex items-center justify-between h-16">
      <div className="text-xl font-bold">ShopEZ</div>
      <div className="flex gap-6 text-sm">
        <a href="#home" className="hover:text-primary">Trang chủ</a>
        <a href="#products" className="hover:text-primary">Sản phẩm</a>
        <a href="#offers" className="hover:text-primary">Ưu đãi</a>
        <a href="#bestsellers" className="hover:text-primary">Bán chạy</a>
        <a href="#contact" className="hover:text-primary">Liên hệ</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="pt-32 container text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">Mua sắm dễ dàng, giá tốt mỗi ngày</h1>
    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
      Khám phá hàng ngàn sản phẩm chất lượng, giao hàng nhanh chóng
    </p>
    <Button>Khám phá ngay</Button>
  </section>
);

const FeaturedProducts = () => (
  <section id="products" className="container">
    <SectionTitle>Sản phẩm nổi bật</SectionTitle>
    <div className="grid gap-6 md:grid-cols-3">
      {featured.map(p => (
        <Card key={p.id}>
          <CardHeader>
            <CardTitle>{p.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-gray-100 rounded mb-3 flex items-center justify-center text-xs text-gray-400">Hình ảnh</div>
            <div className="font-semibold mb-2">{p.price}</div>
            <Button variant="outline">Thêm vào giỏ</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const Offers = () => (
  <section id="offers" className="container">
    <SectionTitle>Ưu đãi đặc biệt</SectionTitle>
    <div className="grid gap-6 md:grid-cols-3">
      {offers.map(o => (
        <Card key={o.id}>
          <CardHeader>
            <CardTitle>{o.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Nhanh tay áp dụng hôm nay!</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const BestSellers = () => (
  <section id="bestsellers" className="container">
    <SectionTitle>Sản phẩm bán chạy</SectionTitle>
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
      {bestsellers.map(b => (
        <Card key={b.id}>
          <CardHeader>
            <CardTitle className="text-sm">{b.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-20 bg-gray-100 rounded mb-2 flex items-center justify-center text-[10px] text-gray-400">Hình ảnh</div>
            <div className="text-xs font-medium">{b.price}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="container pb-24">
    <SectionTitle>Liên hệ</SectionTitle>
    <div className="space-y-2 text-sm">
      <p>Điện thoại: 0123 456 789</p>
      <p>Email: support@shopez.vn</p>
      <p>Địa chỉ: 123 Đường ABC, Hà Nội</p>
    </div>
  </section>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-bold mb-8">{children}</h2>
);

export default Index;
