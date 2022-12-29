import useTranslation from 'next-translate/useTranslation';
import LinkNext from 'next/link';
import { Link } from 'react-scroll';
import { monaLisa } from '../pages';
import { useState } from 'react';
import styles from '../styles/Header.module.css';

export const Header = () => {
	const { t } = useTranslation('header');
	const listLinks = t('links', [], { returnObjects: true });
	const [nav, setNav] = useState(false);

	return (
		<div className={styles.header}>
			<div className={nav === true ? styles.nav : styles.nav__disable}>
				<svg
					onClick={() => setNav(false)}
					viewBox="0 0 24 24"
					fill="none"
					width="44"
					height="44"
					xlmns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L12 10.9393L7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L10.9393 12L6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L12 13.0607L16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L13.0607 12L17.5303 7.53033Z"
						fill="currentColor"
					></path>
				</svg>
				<ul className={styles.nav__links}>
					{listLinks.map((link) => (
						<li key={link.id}>
							<Link
								onClick={() => setNav(false)}
								activeClass="active"
								to={link.id}
								smooth={true}
								offset={link.offset}
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.container}>
				<svg
					onClick={() => setNav(true)}
					viewBox="0 0 32 32"
					fill="none"
					width="24"
					height="24"
					xlmns="http://www.w3.org/2000/svg"
					className={styles.menu}
				>
					<path
						d="M5.05366 12.0074H26.9346C27.52 12.0074 28 11.5527 28 10.9982C28 10.4436 27.52 10 26.9346 10H5.05366C4.46829 10 4 10.4436 4 10.9982C4 11.5416 4.46829 12.0074 5.05366 12.0074ZM5.05366 16.9982H26.9346C27.52 16.9982 28 16.5434 28 16C28 15.4344 27.52 14.9797 26.9346 14.9797H5.05366C4.46829 14.9797 4 15.4344 4 16C4 16.5434 4.46829 16.9982 5.05366 16.9982ZM5.05366 22H26.9346C27.52 22 28 21.5453 28 20.9797C28 20.4251 27.52 19.9815 26.9346 19.9815H5.05366C4.46829 19.9815 4 20.4362 4 20.9797C4 21.5342 4.46829 22 5.05366 22Z"
						fill="currentColor"
					></path>
				</svg>
				<ul className={styles.header__links}>
					{listLinks.map((link) => (
						<li key={link.id}>
							<Link
								activeClass="active"
								to={link.id}
								smooth={true}
								offset={link.offset}
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
				<div className={styles.header__menu}>
					<LinkNext
						className={styles.locale}
						href="/"
						locale={t('langSwitcher')}
					>
						{t('langSwitcher').toUpperCase()}
					</LinkNext>
					<LinkNext
						href="tg://resolve?domain=webdeceased"
						className={monaLisa.className}
					>
						{t('contact')}
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5.83334 14.1667L14.1667 5.83334"
								stroke="#048A89"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M5.83334 5.83334H14.1667V14.1667"
								stroke="#048A89"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</LinkNext>
				</div>
			</div>
		</div>
	);
};
