import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Percent } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sale() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Button variant="ghost" onClick={() => navigate("/")} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Về trang chủ
          </Button>
          <h1 className="text-2xl font-bold text-primary">Khuyến mãi</h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {["Giảm 20% đơn hàng đầu tiên", "Mua 1 tặng 1", "Freeship toàn quốc"].map((offer, i) => (
            <Card key={i} className="p-6 text-center hover:shadow-lg transition">
              <Percent className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{offer}</h3>
              <Button>Áp dụng ngay</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}