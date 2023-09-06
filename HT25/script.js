var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19', true);

const container = document.getElementById('container');


xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		// Отримано вдалу відповідь від сервера
		let responseData = JSON.parse(xhr.responseText);
		// Обробка даних responseData
		var city = responseData.name;
		var temprature = responseData.main.temp;
		var pressure = responseData.main.pressure;
		var description = responseData.weather[0].description;
		var humidity = responseData.main.humidity;
		var speed = responseData.wind.speed;
		var deg = responseData.wind.deg;
		var icon = 'https://openweathermap.org/img/wn/' + responseData.weather[0].icon + '.png';

		//"https://openweathermap.org/img/wn/" + weatherCode + ".png"


		const p = document.createElement('p');
		p.textContent = `Whether in ${city}: temperature: ${temprature}, pressure: ${pressure}, description: ${description}, humidity: ${humidity}, speed: ${speed}, degree: ${deg}`;
		var iconElement = document.createElement("img");
		iconElement.src = icon;
		container.appendChild(p);
		container.appendChild(iconElement);
	}
};

xhr.send();