import { Button, Input, TextArea } from "@shared/index";


const HomePage = () => (
  <div>
    <Button>
      Привет мир!
    </Button>
    <Input isError name="name" placeholder="Имя" />
    <TextArea />
  </div>
);

export default HomePage;
