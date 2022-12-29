import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import styles from '../styles/Letswork.module.css';

export const Letswork = () => {
	const { t } = useTranslation('letswork');
	return (
		<div className={styles.container} id="contacts">
			<div className={styles.letswork}>
				<div className={styles.details}>
					<h2>{t('title')}</h2>
					<p>{t('description')}</p>
				</div>
				<Link href="tg://resolve?domain=webdeceased">
					{t('button')}
					<svg
						width="25"
						height="25"
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
				</Link>
			</div>
		</div>
	);
};
