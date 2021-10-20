import http from "k6/http";
const base_url = "https://aakogako.herokuapp.com/api/v1/";

export let options = {
  thresholds: {
    http_req_failed: ["rate<0.01"], // http errors should be less than 1%
    http_req_duration: ["p(95)<200"], // 95% of requests should be below 200ms
  },
  stages: [
    //target is no of cocurrency
    { duration: "3m", target: 100 },
    { duration: "1m", target: 20 },
    { duration: "1m", target: 0 },
  ],
  // vus: 1000, //no of iterations and vus must be same
  // iterations: 1000, //no of iterations and vus must be same
  // maxDuration: 1000, //timeout for process
};

export default function () {
  const headers = {
    "Content-Type": "application/json",
  };

  http.get("https://random-data-api.com/api/users/random_user", {
    headers: headers,
  });
}
