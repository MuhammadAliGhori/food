import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "../styles/detail.module.css";
function MealsTab({ ingredients, allergens }) {
  return (
    <div className="py-3 py-lg-4">
      <Tabs
        defaultActiveKey="home"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Meat">
        <h5 className="fw-600 pt-2 green">Meat</h5>

          <h5 className="fw-600 pt-2">Ingredients</h5>
          {ingredients}
          <h5 className="fw-600 pt-2">Allergens:</h5>
          {allergens}
        </Tab>
        <Tab eventKey="profile" title="Weight Loss">
        <h5 className="fw-600 pt-2 green">Weight Loss</h5>

          <h5 className="fw-600 pt-2">Ingredients</h5>
          {ingredients}
          <h5 className="fw-600 pt-2">Allergens:</h5>
          {allergens}
        </Tab>
        <Tab eventKey="longer-tab" title="Meat & Fish">
        <h5 className="fw-600 pt-2 green">Meat & Fish</h5>

          <h5 className="fw-600 pt-2">Ingredients</h5>
          {ingredients}
          <h5 className="fw-600 pt-2">Allergens:</h5>
          {allergens}
        </Tab>
        <Tab eventKey="contact" title="Maintain">
          <h5 className="fw-600 pt-2 green">Maintain</h5>

          <h5 className="fw-600 pt-2">Ingredients</h5>
          {ingredients}
          <h5 className="fw-600 pt-2">Allergens:</h5>
          {allergens}
        </Tab>
        {/* <Tab eventKey="gain" title="Muscle Gain">
            Tab content for Muscle Gain
            </Tab> */}
      </Tabs>
    </div>
  );
}

export default MealsTab;
