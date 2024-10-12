import { HeaderPage, LayoutContent } from "@shared/";

import { Slider } from "./slider";


const HomePage = () => (
  <div className="w-full">
    <HeaderPage title="Профессиональная фотосъемка в Тюмени" />
    <LayoutContent>
      <Slider />
    </LayoutContent>
  </div>
);

export default HomePage;
