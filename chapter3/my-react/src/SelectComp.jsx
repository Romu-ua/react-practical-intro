import { useRef } from 'react';
import './Banners.css';
import { BannerEnv, BannerMember, BannerNew } from './Banners';

export default function SelectComp() {
  const components = [BannerMember, BannerEnv, BannerNew];
  const randomIndex = useRef(Math.floor(Math.random() * components.length));
  const SelectedComponent = components[randomIndex.current];

  return (
    <div className="Banner">
      <SelectedComponent />
    </div>
  );
}
