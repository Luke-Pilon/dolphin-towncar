import styles from './rates.module.css';

export default function Rates({ rates }) {
    return (
        <div className={styles.ratesContainer}>
            <h1>Rates</h1>
            <table className={styles.ratesTable}>
                <thead>
                    <tr>
                        <th className={styles.tableCell}>From</th>
                        <th className={styles.tableCell}>To</th>
                        <th className={styles.tableCell}>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {rates.map((rate, i) => (
                        <tr key={i}>
                            <td className={styles.tableCell}>{rate.from}</td>
                            <td className={styles.tableCell}>{rate.to}</td>
                            <td className={styles.tableCell}>{rate.cost}</td>
                        </tr>
                    ))}
                    <tr>
                        <td className={styles.tableCell}>Hourly Rate:</td>
                        <td className={styles.tableCell}>
                            $120 (minimum 2 hours)
                        </td>
                        <td className={styles.tableCell}></td>
                    </tr>
                </tbody>
            </table>
            <p>All other trips based off of mileage and time.</p>
        </div>
    );
}
