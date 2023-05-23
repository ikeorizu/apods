import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const PlanetImage = ({ src, alt }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className='planet-img'
			style={{
				width: isHovered ? 'calc(100% + 10px)' : '100%',
				height: isHovered ? 'calc(100% + 10px)' : '100%',
				transition: '0.3s ease',
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<Image
				src={src}
				alt={alt}
				width={600}
				height={390}
				sizes='100vw'
				style={{
					width: '100%',
					height: 'auto',
				}}
			/>
		</div>
	);
};

export default PlanetImage;
