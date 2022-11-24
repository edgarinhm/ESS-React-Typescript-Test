import Select from "../../components/Select/Select";
import useTaxManager from "../../pages/TaxManager/useTaxManager";
import Header from "../../components/Header/Header";
import Table from "./components/Table/Table";
import "./tax-manager.css";

const TaxManager = () => {
  const TITLE = "Tax Manager";

  const Form = () => {
    const SET_LOCATION = "Set Location";
    const COUNTRY_TITLE = "Country";
    const STATE_TITLE = "State";
    const CITY_TITLE = "City";
    const LOCATION_CODE_TITLE = "Code";

    const {
      countries,
      states,
      cities,
      handleCountryId,
      handleStateId,
      selectedCountry,
      selectedState,
      handleCityId,
      selectedCity
    } = useTaxManager();

    return (
      <form className="form">
        <div>
          <label htmlFor="set-location">{SET_LOCATION}</label>
          <div className="select_cascade">
            {countries && (
              <Select
                id={COUNTRY_TITLE}
                name={COUNTRY_TITLE}
                options={countries}
                onChange={handleCountryId}
              />
            )}

            {selectedCountry && (
              <Select
                id={STATE_TITLE}
                name={STATE_TITLE}
                options={states}
                onChange={handleStateId}
              />
            )}

            {selectedState && (
              <Select
                id={CITY_TITLE}
                name={CITY_TITLE}
                options={cities}
                onChange={handleCityId}
              />
            )}
            {selectedCity && (
              <Select
                id={LOCATION_CODE_TITLE}
                name={LOCATION_CODE_TITLE}
                options={[]}
              />
            )}
          </div>
        </div>
      </form>
    );
  };

  return (
    <div>
      <Header title={TITLE} />
      {Form()}
      <Table />
    </div>
  );
};

export default TaxManager;
