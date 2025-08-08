import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

export default function CategoryPhone() {
  const navigate = useNavigate();

  const handleAddToCart = (productName: string, price: string) => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem = {
      id: Date.now(),
      name: productName,
      price: price,
      quantity: 1,
      image: ""
    };

    cartItems.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cartItems));

    toast({
      title: "Đã thêm vào giỏ hàng",
      description: `${productName} đã được thêm vào giỏ hàng`,
    });
  };

  const phones = [
    { title: "iPhone 15 Pro", price: "₫29.990.000", img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop" },
    { title: "Samsung Galaxy S24", price: "₫22.990.000", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop" },
    { title: "Xiaomi 14", price: "₫15.990.000", img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Button variant="ghost" onClick={() => navigate("/")} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Về trang chủ
          </Button>
          <h1 className="text-2xl font-bold text-primary">Điện thoại</h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {phones.map((phone, i) => (
            <Card key={i} className="overflow-hidden border hover:shadow-lg transition">
              <div className="h-48 bg-gray-100">
                <img src={phone.img} alt={phone.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-lg">{phone.title}</h4>
                <p className="text-primary font-bold mb-3">{phone.price}</p>
                <Button
                  className="w-full"
                  onClick={() => handleAddToCart(phone.title, phone.price)}
                >
                  Thêm vào giỏ
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}