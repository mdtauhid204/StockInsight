import { Slider } from "@material-ui/core";
const Slider2 = ({ mini, maxi, defualt }) => {
  return <Slider value={defualt} max={maxi} min={mini} />;
};

export default Slider2;
