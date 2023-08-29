import Title from "../components/Title";
import Food from "./food";

export default function food({ data }) {
  console.log(data);
  return (
    <div>
      <Title title="Home" />
      <Food />
    </div>
  );
};
