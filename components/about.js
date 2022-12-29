import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/About.module.css';

export const About = () => {
	const { t } = useTranslation('about');
	return (
		<div className={styles.about} id="about">
			<h2>{t('title')}</h2>
			<p>{t('description')}</p>
			<div className={styles.progress}>
				<div className={styles.progress__item}>
					<span>5</span>
					<p>{t('years')}</p>
				</div>
				<div className={styles.progress__item}>
					<span>60+</span>
					<p>{t('projects')}</p>
				</div>
			</div>
		</div>
	);
};
