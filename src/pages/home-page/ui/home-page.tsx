import { HeaderPage } from "@shared/";

import { Slider } from "./slider";


const HomePage = () => (
  <div className="w-full">
    <HeaderPage title="Профессиональная фотосъемка в Тюмени" />
    <Slider />
  </div>
);

export default HomePage;
