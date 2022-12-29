import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Projects.module.css';

export const Projects = () => {
	const { t } = useTranslation('projects');
	return (
		<div className={styles.container} id="projects">
			<h2>{t('title')}</h2>
			<div className={styles.projects}>
				<Link
					className={styles.project}
					href="https://gasprice-flame.vercel.app/"
				>
					<Image
						src="/projects/gasprice.png"
						alt="logo"
						width={64}
						height={64}
					/>
					<div className={styles.detail}>
						<h3>gasprice</h3>
						<p>{t('project', {}, { returnObjects: true }).description}</p>
					</div>
				</Link>
			</div>
		</div>
	);
};
