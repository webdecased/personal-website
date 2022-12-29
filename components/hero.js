import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { WordAnimation } from './wordanimation';
import styles from '../styles/Hero.module.css';

const word = 'webdecased';

export const Hero = () => {
	const { t } = useTranslation('hero');
	return (
		<div className={styles.hero} id="home">
			<div className={styles.container}>
				<div className={styles.details}>
					<h1>
						{word.split('').map((char, i) => {
							return <WordAnimation char={char} key={i} id={i} />;
						})}
					</h1>
					<p>{t('description')}</p>
					<Link
						to="projects"
						smooth={true}
						offset={-135}
						className={styles.button}
					>
						<div className={styles.dot} />
						<span>{t('button')}</span>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 18L21 12L15 6"
								stroke="#048A89"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M3 12H20"
								stroke="#048A89"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M21 12H20"
								stroke="#048A89"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Link>
				</div>
				<Image src="/logo.png" alt="logo" width={300} height={300} />
			</div>
		</div>
	);
};
