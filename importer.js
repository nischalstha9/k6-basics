import http from "k6/http";
// const data = require("./apis.json");
const ITERATION = 1000;

const requests = [
  {
    url: "https://zite.zite.io",
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "x-csrftoken":
        "Bw2DPkHWEKH0UM5QfS4vPTVw91GREZ6GDxgcQcG29JNpRXeiYq4IkYASTgrkR9Dt",
    },
    cookies: {
      csrftoken:
        "Bw2DPkHWEKH0UM5QfS4vPTVw91GREZ6GDxgcQcG29JNpRXeiYq4IkYASTgrkR9Dt",
      zite_cookie: "n8q4lnm613dnxmtmt9c3r6tvtth7guoo",
    },
    data: {},
  },
  {},
];

export let options = {
  //   stages: [
  //     //target is no of cocurrency
  //     { duration: "3m", target: 100 },
  //     { duration: "1m", target: 20 },
  //     { duration: "1m", target: 0 },
  //   ],
  vus: ITERATION, //no of iterations and vus must be same
  iterations: ITERATION, //no of iterations and vus must be same
  // maxDuration: 1000, //timeout for process
};

export default function () {
  requests.forEach(function (api, index) {
    const headers = api.headers;
    const cookies = api.cookies;
    const url = api.url;

    if (url !== null || url !== "") {
      switch (api.method) {
        case "get":
          let res;
          res = http.get(url, { headers: headers, cookies: cookies });
          console.log("Response Status Code: " + String(res.status));
          console.log("Response time: " + String(res.timings.duration) + " ms");
          console.log("Response TLS Version: " + String(res.tls_version));
          break;

        default:
          break;
      }
    }
  });
}
