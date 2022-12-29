import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import styles from '../styles/Skills.module.css';

const baseSkills = [
	{
		name: 'React JS',
		img: 'react',
	},
	{
		name: 'React Native',
		img: 'reactn',
	},
	{
		name: 'Next JS',
		img: 'next',
	},
	{
		name: 'Gatsby JS',
		img: 'gatsby',
	},
	{
		name: 'HTML5',
		img: 'html',
	},
	{
		name: 'CSS3',
		img: 'css',
	},
];

const frontendSkills = [
	{
		name: 'Typescript',
		img: 'ts',
	},
	{
		name: 'Javascript',
		img: 'js',
	},
	{
		name: 'Yarn',
		img: 'yarn',
	},
	{
		name: 'Git',
		img: 'git',
	},
	{
		name: 'Figma',
		img: 'figma',
	},
	{
		name: 'Docker',
		img: 'docker',
	},
];

const otherSkills = [
	{
		name: 'ESlint',
		img: 'eslint',
	},
	{
		name: 'Prettier',
		img: 'prettier',
	},
];

export const Skills = () => {
	const { t } = useTranslation('skills');
	return (
		<div className={styles.container} id="skills">
			<h2>{t('title')}</h2>
			<div className={styles.skills}>
				<div className={styles.cards}>
					<div className="base">
						{baseSkills.map((skill) => (
							<div key={skill.img} className={styles.card}>
								<Image
									src={'/icons/' + skill.img + '.svg'}
									alt={skill.img}
									width={60}
									height={60}
								/>
								<span>{skill.name}</span>
							</div>
						))}
					</div>
					<div>
						{frontendSkills.map((skill) => (
							<div key={skill.img} className={styles.card}>
								<Image
									src={'/icons/' + skill.img + '.svg'}
									alt={skill.img}
									width={60}
									height={60}
								/>
								<span>{skill.name}</span>
							</div>
						))}
					</div>
					<div>
						{otherSkills.map((skill) => (
							<div key={skill.img} className={styles.card}>
								<Image
									src={'/icons/' + skill.img + '.svg'}
									alt={skill.img}
									width={60}
									height={60}
								/>
								<span>{skill.name}</span>
							</div>
						))}
					</div>
				</div>
				<Image
					className={styles.man}
					src="/man.png"
					alt="man"
					width={388}
					height={609}
				/>
			</div>
		</div>
	);
};
