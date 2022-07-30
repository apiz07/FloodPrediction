import axios from "axios";
export class apiService {
    async getWeather() {
        const response = await axios.get(
            "https://api.openweathermap.org/data/2.5/onecall?lat=6.351&lon=116.4305&appid=bbc47ca2dc662302c8d40838684910f9"
            
        );
        let i;
        let ChanceRain = [8];

        for(i = 0; i < 7; i++){
            // response.data.daily[i].pop;
            ChanceRain[i] = Math.round(response.data.daily[i].pop*100);
        }
        
        return ChanceRain;
    }
}