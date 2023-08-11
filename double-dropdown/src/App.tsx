import useDropdown from "./hooks/useDropdown";

const App = () => {
  const data = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "Bangladesh",
      value: "BG",
      cities: ["Dhaka", "Chittagong"],
    },
  ];

  const [
    onCountryChange,
    countries,
    selectedCountry,
    onCityChange,
    cities,
    selectedCity,
  ] = useDropdown(data);

  return (
    <>
      <select
        onChange={(e) => {
          onCountryChange(e);
        }}
        value={selectedCountry}
      >
        <option value="" disabled>
          ---
        </option>
        {countries.length >= 0 &&
          countries.map((country) => {
            return (
              <option key={country.value} value={country.value}>
                {country.name}
              </option>
            );
          })}
      </select>
      <select
        onChange={(e) => {
          onCityChange(e);
        }}
        value={selectedCity}
      >
        <option value="" disabled>
          ---
        </option>
        {cities.length >= 0 &&
          cities.map((city) => {
            return (
              <option key={city} value={city}>
                {city}
              </option>
            );
          })}
      </select>
    </>
  );
};

export default App;
