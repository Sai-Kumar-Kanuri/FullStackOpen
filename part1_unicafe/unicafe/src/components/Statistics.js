import Preview from './Preview';

const Statistics = ({ clicks }) => {

    const total = clicks.good + clicks.bad + clicks.neutral;
    const average = (clicks.good * 1 + clicks.bad * -1) / total;
    const positive = clicks.good * (100 / total);

    if (total === 0) {
        return (
            <div>
                No Feedback Given
            </div>
        )
    }


    return (
        <table>
            <tbody>
                <Preview review='good' rating={clicks.good} />
                <Preview review='neutral' rating={clicks.neutral} />
                <Preview review='bad' rating={clicks.bad} />
                <Preview review='total' rating={total} />
                <Preview review='average' rating={average} />
                <Preview review='positive' rating={positive} />
            </tbody>
        </table>

    )
}

export default Statistics;