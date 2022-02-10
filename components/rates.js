import styles from './rates.module.css';

export default function Rates({ rates }) {
    return (
        <>
            <h3>Rates</h3>
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
                </tbody>
            </table>
        </>
    );
}
