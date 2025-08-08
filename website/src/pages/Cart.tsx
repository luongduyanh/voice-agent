import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

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
        <Card className="p-6 text-center">
          <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Giỏ hàng trống</h3>
          <p className="text-gray-600 mb-4">Hãy thêm sản phẩm vào giỏ hàng</p>
          <Button onClick={() => navigate("/")}>Tiếp tục mua sắm</Button>
        </Card>
      </div>
    </div>
  );
}