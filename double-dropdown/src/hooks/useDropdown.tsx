import { useState, useEffect } from "react";

interface TData {
  name: string;
  value: string;
  cities: string[];
}

type TReturn = [
  (e: React.ChangeEvent<HTMLSelectElement>) => void,
  TData[],
  string,
  (e: React.ChangeEvent<HTMLSelectElement>) => void,
  string[],
  string
];

const useDropdown = (data: TData[]): TReturn => {
  const [countries, setCountries] = useState<TData[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");

  // add countries to state on load

  useEffect(() => {
    // manage countries
    setCountries(data);
  }, []);

  const onCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // manage selected country
    setSelectedCountry(e.target.value);

    // manage cities to display
    let foundCountry = {
      name: "",
      value: "",
      cities: [""],
    };

    const search = countries.find((country) => {
      return country.value === e.target.value;
    });

    if (search) {
      foundCountry = { ...search };
    }

    setCities(foundCountry.cities);

    // reset selectedCity
    setSelectedCity("");
  };

  const onCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // manage selected city
    setSelectedCity(e.target.value);
  };

  return [
    onCountryChange,
    countries,
    selectedCountry,
    onCityChange,
    cities,
    selectedCity,
  ];
};

export default useDropdown;
