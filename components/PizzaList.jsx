import styles from "../styles/PizzaList.module.css";
import React from "react";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit
        sapiente commodi velit itaque neque cum, assumenda, sint ea, saepe quam
        temporibus magnam similique molestiae voluptatum odio est nemo suscipit.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza, i) => (
          <PizzaCard key={i} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
