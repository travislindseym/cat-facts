import axios from "axios";

const endpoint = "https://catfact.ninja/fact";

const getRandom = () => {
  const config = {
    method: "GET",
    url: `${endpoint}?max_length=400`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

const getPaginated = (page) => {
  const config = {
    method: "GET",
    url: `${endpoint}s?page=${page}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

const catFactService = {
  getRandom,
  getPaginated,
};

export default catFactService;
