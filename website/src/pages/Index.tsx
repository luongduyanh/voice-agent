import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, Percent, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import LiveKitWidget from "@/components/ai_avatar/LiveKitWidget";

// Import images
import balo from "@/assets/balo.jpg";
import tainghe from "@/assets/tai-nghe.png";
import giay from "@/assets/giay.jpg";
import dongho from "@/assets/dongho.jpg";
import tuixach from "@/assets/tuixach.jpg";
import ao from "@/assets/ao.png";


export default function Index() {
  const [showSupport, setShowSupport] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">ShopEZ</h1>
          <nav className="hidden md:flex gap-6 text-gray-700">
            <a href="#home" className="hover:text-primary">Trang chủ</a>
            <a href="#products" className="hover:text-primary">Sản phẩm</a>
            <a href="#offers" className="hover:text-primary">Ưu đãi</a>
            <a href="#bestsellers" className="hover:text-primary">Bán chạy</a>
            <a href="#contact" className="hover:text-primary">Liên hệ</a>
          </nav>
          <Button variant="outline" size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" /> Giỏ hàng
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gray-50 py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Mua sắm dễ dàng, giá tốt mỗi ngày</h2>
          <p className="text-gray-600 mb-6">Khám phá hàng ngàn sản phẩm chất lượng, giao hàng nhanh chóng</p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              Xem sản phẩm <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Khuyến mãi hôm nay
            </Button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10 text-center">Sản phẩm nổi bật</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Tai nghe Bluetooth", price: "₫450.000", img: tainghe },
              { title: "Balo Thời Trang", price: "₫280.000", img: balo },
              { title: "Giày Sneaker", price: "₫800.000", img: giay }
            ].map((p, i) => (
              <Card key={i} className="overflow-hidden border hover:shadow-lg transition">
                <div className="h-48 bg-gray-100">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-lg">{p.title}</h4>
                  <p className="text-primary font-bold mb-3">{p.price}</p>
                  <Button variant="secondary" className="w-full">
                    Thêm vào giỏ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="offers" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Ưu đãi đặc biệt</h3>
          <p className="text-gray-600 mb-8">Tiết kiệm hơn với các chương trình khuyến mãi</p>
          <div className="grid md:grid-cols-3 gap-8">
            {["Giảm 20% đơn hàng đầu tiên", "Mua 1 tặng 1", "Freeship toàn quốc"].map((offer, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center">
                <Percent className="h-10 w-10 text-primary mb-4" />
                <p className="font-medium">{offer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section id="bestsellers" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10 text-center">Sản phẩm bán chạy</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Đồng hồ nam", price: "₫1.200.000", img: dongho },
              { title: "Túi xách nữ", price: "₫650.000", img: tuixach },
              { title: "Áo hoodie", price: "₫400.000", img: ao },
              { title: "Tai nghe gaming", price: "₫1.050.000", img: tainghe }
            ].map((p, i) => (
              <Card key={i} className="overflow-hidden border hover:shadow-lg transition">
                <div className="h-40 bg-gray-100">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-base">{p.title}</h4>
                  <p className="text-primary font-bold">{p.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-center">Liên hệ</h3>
          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            <div className="flex items-center gap-3">
              <Phone className="text-primary" /> <span>0123 456 789</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-primary" /> <span>support@shopez.vn</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-primary" /> <span>123 Đường ABC, Hà Nội</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} ShopEZ - All rights reserved.
      </footer>

      {/* Floating AI Concierge Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          variant="luxury" 
          size="lg"
          className="rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-2 px-6 py-3"
          onClick={() => setShowSupport(true)}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="font-medium">Talk to AI Assistant</span>
        </Button>
      </div>
      {/* LiveKit Widget */}
      {showSupport && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6 pointer-events-none">
          <div className="pointer-events-auto">
            <LiveKitWidget setShowSupport={setShowSupport} />
          </div>
        </div>
      )}

    </div>
  );
};
