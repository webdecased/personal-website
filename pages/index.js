import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { About } from '../components/about';
import { Whatido } from '../components/whatido';
import { Skills } from '../components/skills';
import { Projects } from '../components/projects';

import localFont from '@next/font/local';
import { Letswork } from '../components/letswork';
import { Footer } from '../components/footer';

export const monaLisa = localFont({
	src: [
		{
			path: './fonts/MonaLisa/MonoLisa-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/MonaLisa/MonoLisa-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
});

export default function Home() {
	const { t } = useTranslation('common');
	return (
		<>
			<Head>
				<title>webdeceased</title>
				<meta name="description" content="webdeceased personal website" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</Head>
			<div className={monaLisa.className}>
				<Header />
				<Hero />
				<About />
				<div className="container">
					<Whatido />
					<Skills />
					<Projects />
				</div>
				<Letswork />
				<Footer />
			</div>
		</>
	);
}
