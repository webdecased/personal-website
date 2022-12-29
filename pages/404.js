import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/NotFound.module.css';

export default function NotFound() {
	const { t } = useTranslation('404');
	return (
		<>
			<Head>
				<title>{t('title')}</title>
				<meta name="description" content="webdeceased personal website" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</Head>
			<div className={styles.container}>
				<h2>404 | {t('title')}</h2>
			</div>
		</>
	);
}
