// pages/index.js
import MenuHeader from '@/components/MenuHeader';
import SauceOption from '@/components/SauceOption';
import MenuItem from '@/components/MenuItem';
import DrinkItem from '@/components/DrinkItem';
import MenuSection from '@/components/MenuSection';
import AdSense from '@/components/AdSense';

import { sauces, foodItems, drinks } from '@/data/menuData';

export default function Frango() {
  return (
    <div className='w-full overflow-hidden'>
      <MenuHeader />
      <div className="bg-white font-sans px-6">
        {/* Sos Seçenekleri Bölümü */}
        <MenuSection title="Soslarımız">
          <div className="flex flex-wrap justify-center gap-4">
            {sauces.map((sauce) => (
              <SauceOption key={sauce.name} {...sauce} />
            ))}
          </div>
        </MenuSection>

        {/* Banner Reklam Bölümü */}
        <AdSense clientId="ca-pub-1234567890" slotId="1234567890" />

        {/* Dönerler Bölümü */}
        <MenuSection title="Yiyecekler">
          {foodItems.map((item) => (
            <MenuItem key={item.title} {...item} />
            
          ))}
        </MenuSection>

        {/* İçecekler Bölümü */}
        <MenuSection title="İçecekler">
          <div className="grid grid-cols-1 gap-4 w-full mx-auto">
            {drinks.map((drink) => (
              <DrinkItem key={drink.name} {...drink} />
            ))}
          </div>
        </MenuSection>
      </div>
    </div>
  );
}
