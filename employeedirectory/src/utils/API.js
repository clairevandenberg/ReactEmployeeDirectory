import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default {
    getRandomDog: function() {
      return axios.get("https://....");
    },
};