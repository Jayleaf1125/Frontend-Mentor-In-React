import styles from "./styles.module.css";

export default function Results_Summary_Component() {
  return (
    <div className={styles.container}>
      {/* Result Container */}
      <div className={styles.resultsContainer}>
        <h3>Your Result</h3>
        <h1 className={styles.ellipse}>
          {" "}
          76 <span className={styles.numbersInResult}> of 100</span>
        </h1>
        <h2>Great</h2>
        <p className={styles.resultsBio}>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      {/* Summary Container */}
      <div className={styles.summaryContainer}>
        <h2>Summary</h2>
        <ul>
          <li>
            <span className={styles.textOne}>Reaction</span>
            <span className={styles.numbers}>
              <b>80</b> / 100
            </span>
          </li>
          <li>
            <span className={styles.textTwo}>Memory</span>{" "}
            <span className={styles.numbers}>
              <b>92</b> / 100
            </span>
          </li>
          <li>
            <span className={styles.textThree}>Verbal</span>
            <span className={styles.numbers}>
              <b>61</b> / 100
            </span>
          </li>
          <li>
            <span className={styles.textFour}>Visual</span>
            <span className={styles.numbers}>
              <b>72</b> / 100
            </span>
          </li>
          <button>Continue</button>
        </ul>
      </div>
    </div>
  );
}
