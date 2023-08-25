import Title from "../components/Title";
import Food from "./food";

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <Title title="Home" />
      <Food />
    </div>
  );
};
