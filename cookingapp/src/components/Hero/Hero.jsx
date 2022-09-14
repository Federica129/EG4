import styles from "./index.module.scss";

function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.title}>
        <h1>Fatto in casa</h1>
        <h2>da Lorem</h2>
      </div>
    </div>
  );
}

export default Hero;
