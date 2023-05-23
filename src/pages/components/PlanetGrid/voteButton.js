import { useState } from 'react';

const PlanetVoteButton = () => {
	const [voteCount, setVoteCount] = useState(0);

	const upvote = () => {
		let newCount = voteCount + 1;
		setVoteCount(newCount);
	};

	return (
		<button type='button' className='btn btn-primary btn-lg active btn-block mt-3' onClick={upvote}>
			Vote <span className='vote-inc-num'>{voteCount}</span>
		</button>
	);
};

export default PlanetVoteButton;
