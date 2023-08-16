import { useState, useRef } from "react";

const App = () => {
  const [locations, setLocations] = useState([]);
  const headers = locations[0] ? Object.keys(locations[0]).sort() : [];
  const [activeHeader, setActiveHeader] = useState("");
  const inputRef = useRef("");

  // flatten and store result of passed obj
  const flatten = (value, key, result) => {
    // test if value is obj
    if (typeof value === "object") {
      // loop through each property of object
      for (const key in value) {
        flatten(value[key], key, result);
      }
    } else if (Array.isArray(value)) {
      // loop through each index of array
      value.forEach((index, i) => {
        flatten(index[i], key, result);
      });
    } else {
      // reached primitive type
      if (key !== null) {
        // add new property and value to result obk
        result[key] = value;
      }
    }
  };

  // fetch data
  const handleGetData = async () => {
    const url = "https://randomuser.me/api/?results=20";
    const res = await fetch(url);
    const json = await res.json();

    // store results of flatten()
    const flattenResults = [];

    // loop through each index of json.results
    json.results.forEach((result, i) => {
      // add
      flattenResults.push({});
      flatten(result.location, null, flattenResults[i]);
    });

    // add flattenResults to state
    setLocations(flattenResults);
  };

  // sort locations by selected header
  const hanldeSort = (header) => {
    // is header selected
    if (header === activeHeader) {
      // true, reverse sorted array
      const locationsCpy = [...locations];
      locationsCpy.reverse();
      setLocations(locationsCpy);
    } else {
      console.log("here");
      // false, sort
      setActiveHeader(header);
      const locationsCpy = [...locations];
      locationsCpy.sort((a, b) => {
        if (typeof a[header] === "string") {
          if (a[header] < b[header]) {
            return -1;
          } else {
            return 1;
          }
        } else {
          return a[header] - b[header];
        }
      });
      setLocations(locationsCpy);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newLocations = [];
          const search = inputRef.current.value;
          locations.forEach((location) => {
            // flatten the values of location into an array
            const locationValues = Object.values(location);
            if (locationValues.includes(search)) {
              newLocations.push(location);
            }
          });
          setLocations(newLocations);
        }}
      >
        <input type="text" ref={inputRef} />
        <button>Search</button>
      </form>
      <table>
        <thead>
          <tr>
            {headers.map((header) => {
              return (
                <th
                  onClick={() => {
                    hanldeSort(header);
                  }}
                >
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {locations.length >= 1 &&
            locations.map((location, i) => {
              return (
                <tr>
                  {headers.length >= 1 &&
                    headers.map((header) => {
                      return <td>{location[header]}</td>;
                    })}
                </tr>
              );
            })}
        </tbody>
      </table>
      <button onClick={handleGetData}>Get Data</button>
    </>
  );
};

export default App;
