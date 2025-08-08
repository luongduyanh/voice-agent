import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

export default function CategoryLaptop() {
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

  const laptops = [
    { title: "Dell XPS 13", price: "₫28.000.000", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop" },
    { title: "MacBook Air M2", price: "₫32.990.000", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop" },
    { title: "Asus ROG Gaming", price: "₫35.990.000", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Button variant="ghost" onClick={() => navigate("/")} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Về trang chủ
          </Button>
          <h1 className="text-2xl font-bold text-primary">Laptop</h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {laptops.map((laptop, i) => (
            <Card key={i} className="overflow-hidden border hover:shadow-lg transition">
              <div className="h-48 bg-gray-100">
                <img src={laptop.img} alt={laptop.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-lg">{laptop.title}</h4>
                <p className="text-primary font-bold mb-3">{laptop.price}</p>
                <Button
                  className="w-full"
                  onClick={() => handleAddToCart(laptop.title, laptop.price)}
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