import PropTypes from 'prop-types';
import styles from "./statistics.module.css";



const Statistics = ({ title, stats, id }) => {
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

  const element = stats.map(stats => <li key={stats.id} style={{ backgroundColor: getRandomHexColor() }} className={styles.itemStats}><span className={styles.label}>{stats.label}</span><span className={styles.percentage}>{stats.percentage}%</span></li>)
  return (
    <div className={styles.containerStat}>
      <section className={styles.section}>
      {title && <h2 className={styles.titleTable}>{title}</h2>}
      <ul className={styles.listStats}>{element}</ul>
    </section>
    </div>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};




export default Statistics;