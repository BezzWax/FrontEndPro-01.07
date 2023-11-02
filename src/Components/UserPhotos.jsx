import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const UserPhotos = () => {
	const { albumId } = useParams();
	const photoLink = `https://jsonplaceholder.typicode.com/photos/${albumId}`;
	const [photoData, setPhotoData] = useState(null);

	useEffect(() => {
		const fetchInfo = async () => {
			try {
				const response = await fetch(photoLink);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setPhotoData(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchInfo();
	}, [photoLink]);

	return (
		<div>
			{photoData?.id}<br />
			{photoData?.title}<br />
			{photoData?.url && <img src={photoData.url} alt="Photo 1" />} <br />
			<img src={photoData?.thumbnailUrl} alt="Photo 2" />

		</div>
	);
}

export default UserPhotos;
