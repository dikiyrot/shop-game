import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import CartBlock from '../CartBlock/CartBlock';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<Link to="/shop-game" className={styles.header__title}>
					Game store
				</Link>
				<div className={styles.header__cartBtn}>
					<CartBlock />
				</div>
			</div>
		</div>
	);
};

export default Header;
