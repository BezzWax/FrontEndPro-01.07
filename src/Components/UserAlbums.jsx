import React, { useState, useEffect } from 'react';

const UserAlbums = ({ id }) => {
	const albumId = id;
	const userLink = `https://jsonplaceholder.typicode.com/albums/${albumId}`;
	const [albumData, setAlbumData] = useState(null); // Початковий стан повинен бути null, оскільки дані ще не завантажені

	useEffect(() => {
		const fetchInfo = async () => {
			try {
				const response = await fetch(userLink);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setAlbumData(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchInfo();
	}, [userLink]);
	return (
		<div>
			{albumData.id}

		</div>
	);
}

export default UserAlbums;