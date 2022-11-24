import { ICity } from "../interfaces/city";
import { option } from "../components/Select/Select";
import HttpClient from "../http-client/http-client";

class CityService {
  static async getCities(filter?: string) {
    const cityData: ICity[] = await HttpClient.get("data/City.json");
    const cityOptions: option[] = cityData
      .filter((city: ICity) => city.state_id === filter)
      .map((city: ICity) => {
        return { value: city.city_id, label: city.city_name };
      });
    return cityOptions;
  }
}

export default CityService;
