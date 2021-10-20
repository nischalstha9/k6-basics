import http from "k6/http";
import { check } from "k6";

const base_url = "https://aakogako.herokuapp.com/api/v1/";
const url = base_url + "auth/login/";

export let options = {
  // thresholds: {
  //   http_req_failed: ["rate<0.01"], // http errors should be less than 1%
  //   http_req_duration: ["p(95)<200"], // 95% of requests should be below 200ms
  // },
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
  const data = {
    username: "k6",
    password: "admin123@",
  };
  let res = http.post(url, JSON.stringify(data), { headers: headers });

  check(res, {
    "is status 200": (r) => r.status === 200,
    "body has token": (r) => r.body.includes("access_token"),
  });
  let access = JSON.parse(res.body).access_token;
  headers["Authorization"] = "JWT " + access;
  const book_cr_url = base_url + "account-books/";

  // res = http.post(book_cr_url, JSON.stringify({ title: "This" }), {
  //   headers: headers,
  // });

  res = http.get(book_cr_url, { headers: headers });
  console.log("Response Status Code: " + String(res.status));
  console.log("Response time: " + String(res.timings.duration) + " ms");
  console.log("Response TLS Version: " + String(res.tls_version));
}
