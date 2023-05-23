import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import PlanetImage from './image';
import PlanetVoteButton from './voteButton';

const PlanetGrid = () => {
	const [planets, setPlanets] = useState([]);
	const [hoverScale, setHoverScale] = useState(1);
	const imgRef = useRef();

	useEffect(() => {
		fetch('/api/apod')
			.then((response) => response.json())
			.then((data) => setPlanets(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='row'>
			{planets.map((planet, i) => {
				return (
					<div className='col-sm-12 col-md-3 mb-4' key={i}>
						<div className='planet-card'>
							<div className='planet-title'>
								<h2>{planet.title}</h2>
							</div>
							<PlanetImage src={planet.url} alt={planet.title} />
							<PlanetVoteButton planetId={i} />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default PlanetGrid;
