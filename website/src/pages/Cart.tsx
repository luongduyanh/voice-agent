import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(items);
  }, []);

  const updateCart = (items: CartItem[]) => {
    setCartItems(items);
    localStorage.setItem('cart', JSON.stringify(items));
  };

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    updateCart(updatedItems);
    toast({
      title: "Đã xóa sản phẩm",
      description: "Sản phẩm đã được xóa khỏi giỏ hàng",
    });
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }

    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    updateCart(updatedItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[₫,]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Giỏ hàng trống",
        description: "Vui lòng thêm sản phẩm vào giỏ hàng",
        variant: "destructive"
      });
      return;
    }

    // Clear cart and navigate to order confirmation
    localStorage.removeItem('cart');
    navigate('/orderconfirmation?name=Khách hàng&email=customer@example.com&product=' + cartItems[0].name + '&quantity=' + cartItems[0].quantity + '&price=' + cartItems[0].price.replace(/[₫,]/g, '') + '&address=123 Đường ABC, Hà Nội&phone=0123456789');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Button variant="ghost" onClick={() => navigate("/")} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Về trang chủ
          </Button>
          <h1 className="text-2xl font-bold text-primary">Giỏ hàng</h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {cartItems.length === 0 ? (
          <Card className="p-6 text-center">
            <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Giỏ hàng trống</h3>
            <p className="text-gray-600 mb-4">Hãy thêm sản phẩm vào giỏ hàng</p>
            <Button onClick={() => navigate("/")}>Tiếp tục mua sắm</Button>
          </Card>
        ) : (
          <div className="grid gap-6">
            {cartItems.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded"></div>
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-primary font-bold">{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Tổng cộng</h3>
                <p className="text-2xl font-bold text-primary">
                  ₫{getTotalPrice().toLocaleString('vi-VN')}
                </p>
              </div>
              <Button className="w-full" size="lg" onClick={handleCheckout}>
                Thanh toán
              </Button>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}