import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"


const UserList = () => {
	const userLink = 'https://jsonplaceholder.typicode.com/users';
	const [userdata, setData] = useState([]);

	const fetchInfo = () => {
		return fetch(userLink)
			.then((res) => res.json())
			.then((d) => setData(d))
			.catch(error => console.error('Error fetching data:', error));
	}

	useEffect(() => {
		fetchInfo();
	}, []);

	return (
		<center>
			<div>
				{userdata.map((dataObj) => (
					<div key={dataObj.id}>
						<div className='userContainer'>
							<p>{dataObj.name}</p>
							<p>Id: {dataObj.id}</p>
						</div>
						<Link to={`/albums/${dataObj.id}`}> Go  </Link>
					</div>
				))}

			</div>
		</center>
	);
}

export default UserList;