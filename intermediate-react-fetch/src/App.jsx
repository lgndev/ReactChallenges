import "./App.css";
import { useState, useEffect, useMemo } from "react";

// 1) Display all location data from fetch
// 2) Flatten location data
// 3) Sort table data by selected header
// 4) Be able to toggle between ascending and descending
// 5) Add input to search for a value
// - only rows should be returned that have this value in one of their columns - NOT DONE

function App() {
  const [userData, setUserData] = useState({ results: [] });
  const [groupLocationData, setGroupLocationData] = useState([]);
  const [flattenedData, setFlattenedData] = useState([]);

  const tableHeaders = useMemo(() => {
    return [
      "city",
      "latitude",
      "longitude",
      "country",
      "first",
      "last",
      "title",
      "postcode",
      "state",
      "name",
      "number",
      "description",
      "offset",
    ];
  }, []);

  const [sortHeaderDir, setSortHeaderDir] = useState({
    city: 0,
    latitude: 0,
    longitude: 0,
    country: 0,
    first: 0,
    last: 0,
    title: 0,
    postcode: 0,
    state: 0,
    name: 0,
    number: 0,
    description: 0,
    offset: 0,
  });

  useEffect(() => {
    const getRandomUser = async () => {
      const url = "https://randomuser.me/api/?results=20";
      const res = await fetch(url);
      const data = await res.json();
      setUserData(data);
    };
    getRandomUser();
  }, []);

  useEffect(() => {
    if (userData.results.length > 0) {
      const locationArr = [];
      userData.results.map((user) => {
        locationArr.push({ name: { ...user.name }, ...user.location });
      });
      console.log("locationArr: ", locationArr);
      setGroupLocationData(locationArr);
    }
  }, [userData]);

  useEffect(() => {
    const tempArr = [];
    groupLocationData.forEach((personData) => {
      let tempObj = {};
      for (const key in personData) {
        switch (key) {
          case "coordinates":
            tempObj.latitude = personData[key].latitude;
            tempObj.longitude = personData[key].longitude;
            break;
          case "name":
            tempObj.first = personData[key].first;
            tempObj.last = personData[key].last;
            tempObj.title = personData[key].title;
            break;
          case "street":
            tempObj.name = personData[key].name;
            tempObj.number = personData[key].number;
            break;
          case "timezone":
            tempObj.description = personData[key].description;
            tempObj.offset = personData[key].offset;
            break;
          default:
            tempObj[key] = personData[key];
            break;
        }
      }

      tempArr.push(tempObj);
    });
    setFlattenedData(tempArr);
  }, [groupLocationData]);

  const sort = (e) => {
    const sortValue = e.target.innerText;
    const sortedArr = [...flattenedData];

    const direction = sortHeaderDir[sortValue];
    if (direction === 0) {
      setSortHeaderDir((prev) => {
        return { ...prev, [sortValue]: 1 };
      });
    } else if (direction === 1) {
      setSortHeaderDir((prev) => {
        return { ...prev, [sortValue]: 2 };
      });
    } else if (direction === 2) {
      setSortHeaderDir((prev) => {
        return { ...prev, [sortValue]: 1 };
      });
    }

    const ascend = (a, b) => {
      let sortValueA = "";
      let sortValueB = "";

      if (typeof a[sortValue] === "string") {
        sortValueA = a[sortValue].toUpperCase();
      } else {
        sortValueA = a[sortValue];
      }

      if (typeof b[sortValue] === "string") {
        sortValueB = b[sortValue].toUpperCase();
      } else {
        sortValueB = b[sortValue];
      }

      if (sortValueA < sortValueB) {
        return -1;
      }
      if (sortValueA > sortValueB) {
        return 1;
      }
    };

    const descend = (a, b) => {
      let sortValueA = "";
      let sortValueB = "";

      if (typeof a[sortValue] === "string") {
        sortValueA = a[sortValue].toUpperCase();
      } else {
        sortValueA = a[sortValue];
      }

      if (typeof b[sortValue] === "string") {
        sortValueB = b[sortValue].toUpperCase();
      } else {
        sortValueB = b[sortValue];
      }

      if (sortValueA < sortValueB) {
        return 1;
      }
      if (sortValueA > sortValueB) {
        return -1;
      }
    };

    if (direction === 0 || direction === 2) {
      sortedArr.sort(ascend);
    } else if (direction === 1) {
      sortedArr.sort(descend);
    }

    setFlattenedData(sortedArr);
  };

  console.log("sortHeaderDir: ", sortHeaderDir);

  return (
    <>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, i) => {
              return (
                <td key={i} onClick={sort}>
                  {header}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {flattenedData.map((person, i) => {
            return (
              <tr key={i}>
                {tableHeaders.map((header, j) => {
                  return <td key={j}>{person[header]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
