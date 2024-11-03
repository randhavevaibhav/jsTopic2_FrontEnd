import { localStorageTopicName } from "../../constants/constants";

export const localTopics = () => {
  return {
    getVal: () => {
      return JSON.parse(localStorage.getItem(localStorageTopicName));
    },

    setVal: (val) => {
      localStorage.setItem(localStorageTopicName, JSON.stringify(val));
    },
  };
};
