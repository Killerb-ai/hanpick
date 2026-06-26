import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { TabBar } from '@/components/TabBar';
import { SettingsDrawer, useSettingsDrawer } from '@/components/SettingsDrawer';
import { HomePage } from '@/pages/Home';
import { ProductsPage } from '@/pages/Products';
import { ProductDetailPage } from '@/pages/ProductDetail';
import { CartPage } from '@/pages/Cart';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Shell() {
  const { open, openDrawer, closeDrawer } = useSettingsDrawer();
  const [drawer, setDrawer] = useState(false);
  const openSettings = () => {
    openDrawer();
    setDrawer(true);
  };
  const closeSettings = () => {
    closeDrawer();
    setDrawer(false);
  };

  return (
    <div className="app-shell pb-tabbar">
      <Header onOpenSettings={openSettings} />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <TabBar onOpenSettings={openSettings} />
      <SettingsDrawer open={drawer || open} onClose={closeSettings} />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  );
}
