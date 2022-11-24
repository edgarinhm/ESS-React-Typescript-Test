import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { option } from "../../components/Select/Select";
import CountryService from "../../services/country-service";
import StateService from "../../services/state-service";
import CityService from "../../services/city-service";

const useTaxManager = () => {
  const [countries, setCountries] = useState<option[]>([]);
  const [states, setStates] = useState<option[]>([]);
  const [cities, setCities] = useState<option[]>([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const getCountries = async (): Promise<void> => {
    const response = CountryService.getCountries();
    setCountries(await response);
  };

  const getStates = useCallback(async () => {
    const response = selectedCountry
      ? StateService.getStates(selectedCountry)
      : [];
    setStates(await response);
  }, [selectedCountry]);

  const getCities = useCallback(async () => {
    const response = selectedState ? CityService.getCities(selectedState) : [];
    setCities(await response);
  }, [selectedState]);

  const handleCountryId = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectValue = event.target.value;
    setSelectedCountry(selectValue);
    if (!selectValue) {
      setSelectedState(selectValue);
      setSelectedCity(selectValue);
    }
  };

  const handleStateId = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectValue = event.target.value;
    setSelectedState(selectValue);
  };

  const handleCityId = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectValue = event.target.value;
    setSelectedCity(selectValue);
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    getStates();
  }, [getStates]);

  useEffect(() => {
    getCities();
  }, [getCities]);

  return {
    countries,
    states,
    cities,
    handleCountryId,
    handleStateId,
    handleCityId,
    selectedCountry,
    selectedState,
    selectedCity
  };
};

export default useTaxManager;
