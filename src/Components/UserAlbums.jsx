import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserPhotos from './UserPhotos';
import './Components.css';

const UserAlbums = () => {
	const { albumId } = useParams();
	const userLink = `https://jsonplaceholder.typicode.com/albums/${albumId}`;
	const [albumData, setAlbumData] = useState(null);
	const [showPhotos, setShowPhotos] = useState(false);

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
			<center>
				<div className='container'>{albumData && albumData?.id && <p>Album ID: {albumData?.id}</p>}</div>
				Title: {albumData?.title} <br />
				<button className='photoButton' onClick={() => setShowPhotos(true)}>Photos</button>
				<div className='container'>{showPhotos && <UserPhotos />}</div>
			</center>
		</div>
	);
}

export default UserAlbums;
