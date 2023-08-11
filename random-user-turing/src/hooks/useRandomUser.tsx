// create a custom react hook:
// - fetch user from https://randomuser.me/api/
// DONE
// - hook must return list of users
// DONE
// - the current user
// DONE
// - a function to fetch the next user
// DONE
// - a function to select the previous user

import { useState } from "react";

const useRandomUser = (
  url: string
): [
  userList: any[],
  current: any | null,
  next: () => void,
  previous: () => void
] => {
  const [userList, setUserList] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1); // -1

  // fetch a user
  const getUser = async () => {
    const res = await fetch(url);
    const json = await res.json();
    setUserList([...userList, ...json.results]);
    setCurrentIndex((prev) => {
      return prev + 1;
    });
  };

  // manage current
  let current;
  if (currentIndex >= 0) {
    current = userList[currentIndex];
  } else {
    current = null;
  }

  // manage next
  const next = () => {
    if (currentIndex === userList.length - 1) {
      // current is last user in userList, fetch
      getUser();
    } else {
      // current should be the next user from userList
      // increment currentIndex
      setCurrentIndex((prev) => {
        return prev + 1;
      });
    }
  };

  // manage previous
  const previous = () => {
    if (currentIndex <= 0) {
      // current is first user in userList
      // do nothing
    } else {
      // current should be prev user in userList
      // decrment currentIndex
      setCurrentIndex((prev) => {
        return prev - 1;
      });
    }
  };

  // [userList, current, next, previous]
  return [userList, current, next, previous];
};

export default useRandomUser;
