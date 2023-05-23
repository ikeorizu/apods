export default async function handler(req, res) {
	const url = 'https://api.nasa.gov/planetary/apod?count=12&api_key=Sz84XoOwuxKvE8YFI9VoSLucNXbsc8wcfCdB5L5R';

	try {
		const response = await fetch(url);
		const data = await response.json();

		res.status(200).json(data);
	} catch (err) {
		res.status(500).json({ message: 'Error getting Planets' });
	}
}
