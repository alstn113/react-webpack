import Button from "./Button";

export default {
  title: "components/common/Button",
  component: Button,
  argTypes: {},
};

export const Default = () => (
  <div>
    <Button color="primary">버튼</Button>
    <Button color="secondary">버튼</Button>
    <Button color="error">버튼</Button>
    <Button color="success">버튼</Button>
    <Button color="warning">버튼</Button>
  </div>
);
