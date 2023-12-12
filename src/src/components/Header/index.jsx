import styles from './styles.module.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<img src={logo} alt="Logo da Liga" className={styles.logo}/>
				<div className={styles.container__icones}>
					<button className={styles.button}>Login</button>
					<img src={menu} alt="Ícone de menu" className={styles.menu}/>
				</div>
			</div>
		</header>
	);
}