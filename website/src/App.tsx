import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import SpaWellness from "./pages/SpaWellness";
import FitnessCenter from "./pages/FitnessCenter";
import ValetParking from "./pages/ValetParking";
import NotFound from "./pages/NotFound";
import BookingConfirmation from "./pages/BookingConfirmation";
import CategoryPhone from "./pages/CategoryPhone";
import CategoryLaptop from "./pages/CategoryLaptop";
import Sale from "./pages/Sale";
import Cart from "./pages/Cart";
import OrderConfirmation from "./pages/OrderConfirmation";
import DiscordSupport from "./pages/DiscordSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category/phone" element={<CategoryPhone />} />
          <Route path="/category/laptop" element={<CategoryLaptop />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orderconfirmation" element={<OrderConfirmation />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/spa-wellness" element={<SpaWellness />} />
          <Route path="/fitness-center" element={<FitnessCenter />} />
          <Route path="/valet-parking" element={<ValetParking />} />
          <Route path="/bookingconfirmation" element={<BookingConfirmation />} />
          <Route path="/discord-support" element={<DiscordSupport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
