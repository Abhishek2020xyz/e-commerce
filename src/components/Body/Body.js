import classes from "./Body.module.css";
import Availableitem from './Availableitem'

const Body = () => {
  return (
    <div>
      <div className={classes.body}>
        <h1>The Generics</h1>
      </div>
      <div><h4>
        MUSIC
      </h4>
      <Availableitem/>
      </div>
    </div>
  );
};

export default Body;