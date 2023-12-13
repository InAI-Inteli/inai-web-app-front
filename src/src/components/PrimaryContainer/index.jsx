import styles from './styles.module.css';

export default function PrimaryContainer() {
	return (
		<div className={styles.primaryContainer}>
			<h1 className={styles.title}>Eventos</h1>
			<h2 className={styles.subtitle}>
				Saiba dos eventos que serão{' '}
				<span className={styles.highlight}>realizados pela InAI</span>
			</h2>
		</div>
	);
}