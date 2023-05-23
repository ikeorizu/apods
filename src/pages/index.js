import Head from 'next/head';
import { Inter } from 'next/font/google';
import PlanetGrid from './components/PlanetGrid';
import MetaDataHead from './components/Meta/Head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<MetaDataHead
				title='Astronomy Pictures of the Day'
				description='Create a one-page React app that displays 12 random “Astronomy Pictures of the Day” (aka APODs) from the below NASA API'
			/>
			<main className='apod-home'>
				<h1 className='text-center my-5'>Astronomy Pictures of the Day</h1>
				<PlanetGrid />
			</main>
		</>
	);
}
