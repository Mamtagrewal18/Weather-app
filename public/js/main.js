const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_value = document.getElementById('temp_real_value');
const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Please write the name before you search`;
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=cdfbc34515510137cf6d000099c1b11c`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data]; //array of an object
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_value.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;
            //conditions to check sunny or cloudy
            if (tempMood == 'clear') {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == 'Clouds') {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == 'Rain') {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain' style='color: #a40b3;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }

        } catch {
            city_name.innerText = `Please enter the city name properly`;
        }

    }
}
submitBtn.addEventListener('click', getInfo);
const getCurrentDay = () => {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let currentTime = new Date();
    let days = weekday[currentTime.getDay()];
    let w_day = document.getElementById('day');
    w_day.innerText = days;
};
getCurrentDay();