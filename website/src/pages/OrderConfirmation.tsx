import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, MapPin, Phone, Mail, ArrowLeft, Package } from "lucide-react";

const OrderConfirmation = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Extract order details from URL parameters
  const customerName = searchParams.get('name') || '';
  const customerEmail = searchParams.get('email') || '';
  const productName = searchParams.get('product') || '';
  const quantity = searchParams.get('quantity') || '';
  const price = searchParams.get('price') || '';
  const address = searchParams.get('address') || '';
  const phone = searchParams.get('phone') || '';

  const totalPrice = parseInt(price) * parseInt(quantity);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Về trang chủ
              </Button>
              <h1 className="text-2xl font-bold text-primary">
                FPT Shop
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Confirmation Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Đặt hàng thành công!</h1>
            <p className="text-muted-foreground text-lg">
              Cảm ơn bạn đã mua sắm tại FPT Shop. Đơn hàng của bạn đã được xác nhận.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Customer Information */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Thông tin khách hàng
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Tên khách hàng</label>
                  <p className="text-lg font-semibold">{customerName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <p className="text-lg">{customerEmail}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Số điện thoại</label>
                  <p className="text-lg">{phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Địa chỉ giao hàng</label>
                  <p className="text-lg">{address}</p>
                </div>
              </CardContent>
            </Card>

            {/* Order Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Chi tiết đơn hàng
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Sản phẩm</label>
                  <p className="text-lg font-semibold">{productName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Số lượng</label>
                  <p className="text-lg">{quantity}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Đơn giá</label>
                  <p className="text-lg">{parseInt(price).toLocaleString('vi-VN')} VND</p>
                </div>
                <Separator />
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Tổng tiền</label>
                  <p className="text-2xl font-bold text-primary">{totalPrice.toLocaleString('vi-VN')} VND</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <Card className="shadow-lg mt-6">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Thông tin giao hàng</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Thời gian giao hàng</h4>
                  <p className="text-muted-foreground">2-5 ngày làm việc</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Chính sách bảo hành</h4>
                  <p className="text-muted-foreground">Bảo hành chính hãng 12 tháng</p>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div>
                <h3 className="font-semibold mb-3">Thông tin liên hệ</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>0123 456 789</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>support@fptshop.vn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>123 Đường ABC, Hà Nội</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Chúng tôi sẽ liên hệ để xác nhận và tiến hành giao hàng.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Button
              size="lg"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              Tiếp tục mua sắm
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.print()}
              className="flex items-center gap-2"
            >
              In đơn hàng
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderConfirmation;