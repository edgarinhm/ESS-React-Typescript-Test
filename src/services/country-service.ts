import { ICountry } from "../interfaces/country";
import { option } from "../components/Select/Select";
import HttpClient from "../http-client/http-client";

class CountryService {
  static async getCountries(filter?: string) {
    const countryData = await HttpClient.get("data/Country.json");
    const countryOptions: option[] = countryData.map((country: ICountry) => {
      return { value: country.country_id, label: country.country_name };
    });
    return countryOptions;
  }
}

export default CountryService;
