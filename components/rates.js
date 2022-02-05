import styles from './rates.module.css';

export default function Rates({ rates }) {
    return (
        <>
            <table className={styles.ratesTable}>
                <thead>
                    <th>From</th>
                    <th>To</th>
                    <th>Cost</th>
                </thead>
                {rates.map((rate, i) => (
                    <tr key={i}>
                        <td>{rate.from}</td>
                        <td>{rate.to}</td>
                        <td>{rate.cost}</td>
                    </tr>
                ))}
            </table>
        </>
    );
}
