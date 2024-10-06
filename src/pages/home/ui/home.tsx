import { Button, Input } from "@shared/index";


const HomePage = () => (
  <div>
    <Button>
      Привет мир!
    </Button>
    <Input isError name="name" placeholder="Имя" />
  </div>
);

export default HomePage;
