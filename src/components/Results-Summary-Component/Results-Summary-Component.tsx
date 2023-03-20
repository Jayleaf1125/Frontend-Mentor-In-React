
import styles from "./styles.module.css";

export default function Results_Summary_Component()
{
    return (
        <div className={styles.container}>
        {/* Result Container */}
        <div className={styles.resultsContainer}>
            <h2>Your Result</h2>
        </div>
        {/* Summary Container */}
        <div className={styles.summaryContainer}>
            <h2>Summary</h2>
            <h3>Reaction 80 / 100</h3>
            <h3>Memory 92 / 100</h3>
            <h3>Verbal 61 / 100</h3>
            <h3>Visual 72 / 100</h3>
            <button>Continue</button>
        </div>
        </div>
    )
}