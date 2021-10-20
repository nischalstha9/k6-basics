import http from "k6/http";

const url = "https://zite.zite.io/api/v2/user-profile/";

export let options = {
  // thresholds: {
  //   http_req_failed: ["rate<0.01"], // http errors should be less than 1%
  //   http_req_duration: ["p(95)<200"], // 95% of requests should be below 200ms
  // },
  // stages: [
  //target is no of cocurrency
  // { duration: "1s", target: 1 },
  // { duration: "1m", target: 20 },
  // { duration: "1m", target: 0 },
  // ],
  vus: 1, //no of iterations and vus must be same
  iterations: 1, //no of iterations and vus must be same
  // maxDuration: 1000, //timeout for process
};

export default function () {
  const headers = {
    "Content-Type": "application/json",
    "x-csrftoken":
      "Bw2DPkHWEKH0UM5QfS4vPTVw91GREZ6GDxgcQcG29JNpRXeiYq4IkYASTgrkR9Dt",
  };
  const cookies = {
    csrftoken:
      "Bw2DPkHWEKH0UM5QfS4vPTVw91GREZ6GDxgcQcG29JNpRXeiYq4IkYASTgrkR9Dt",
    zite_cookie: "n8q4lnm613dnxmtmt9c3r6tvtth7guoo",
  };
  let res;
  res = http.get(url, { headers: headers, cookies: cookies });
  console.log("Response Data " + String(JSON.stringify(res.body)));
  console.log("Response Status Code: " + String(res.status));
  console.log("Response time: " + String(res.timings.duration) + " ms");
  console.log("Response TLS Version: " + String(res.tls_version));
}
