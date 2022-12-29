import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/Footer.module.css';

export const Footer = () => {
	const { t } = useTranslation('footer');
	return (
		<div className={styles.container}>
			<div className={styles.footer}>
				<p>
					© 2022 <Link href="/">webdeceased</Link>
				</p>
				<p>
					{t('title')}{' '}
					<Link href="https://github.com/webdeceased/personal-website">
						github
					</Link>
					.
				</p>
			</div>
		</div>
	);
};
