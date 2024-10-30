import { useState } from 'react'; 
import styles from '../styles/ResultsCard.module.css';
import data from '../data.json';

export default function ResultsCard() {
    const [averageScore, setAverageScore] = useState(0); 

    const handleContinueClick = () => {
        const totalScore = data.reduce((sum, item) => sum + item.score, 0);
        const avgScore = Math.round(totalScore / data.length);
        
        setAverageScore(avgScore); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.resultBox}>
                <h3>Your Result</h3>
                <div className={styles.scoreCircle}>
                    <span className={styles.tscore}>{averageScore}</span>
                    <span className={styles.toutOf} style={{ color: '#c0c0c0' }}>of 100</span>
                </div>
                <p className={styles.status}>Great</p>
                <p className={styles.description} style={{ color: '#dad4d4' }}>
                    You scored higher than 65% of the people who have taken these tests.
                </p>
            </div>
            <div className={styles.summaryBox}>
                <h3>Summary</h3>
                <ul>
                    {data.map((item, index) => (
                        <li
                            key={index}
                            className={styles.item}
                            style={{
                                color: `var(--${item.color})`,
                                backgroundColor: `var(--${item.backgroundColor})`
                            }}
                        >
                            <img className={styles.icon} src={item.icon} alt={`${item.category} icon`} />
                            <span className={styles.category} style={{ color: `var(--${item.color})` }}>
                                {item.category}
                            </span>
                            <span className={styles.score}>
                                {item.score} <span className={styles.faded}>/ 100</span>
                            </span>
                        </li>
                    ))}
                </ul>
                <button className={styles.continueButton} onClick={handleContinueClick}>
                    Continue
                </button>
            </div>

        </div>
    );
}
