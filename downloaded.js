// import { sleep, check, group } from "k6";
// import http from "k6/http";

// export const options = {
//   ext: { loadimpact: { distribution: {} } },
//   stages: [
//     { target: 10, duration: "1m" },
//     { target: 20, duration: "1m" },
//   ],
//   thresholds: {
//     "http_req_duration{url:https://zite.zite.io/api/v2/user-profile/}": [
//       "p(90)<200",
//     ],
//   },
// };

// export default function main() {
//   let response;

//   // TryGet
//   response = http.get("https://zite.zite.io/api/v2/user-profile/", {
//     headers: {
//       "Content-Type": "application/json",
//       "x-csrftoken":
//         "Bw2DPkHWEKH0UM5QfS4vPTVw91GREZ6GDxgcQcG29JNpRXeiYq4IkYASTgrkR9Dt",
//     },
//   });
//   check(response, {
//     "status equals 200": (response) => response.status.toString() === "200",
//   });

//   group("CRUD", function () {
//     // done
//     response = http.get("https://shrestha-nischal.com.np");
//     check(response, {
//       "body contains django": (response) => response.body.includes("django"),
//     });
//   });

//   // Automatically added sleep
//   sleep(1);
// }

import { sleep, check, group } from "k6";
import http from "k6/http";

export const options = {
  ext: { loadimpact: { distribution: {} } },
  stages: [
    { target: 10, duration: "1m" },
    { target: 20, duration: "1m" },
  ],
  thresholds: {
    "http_req_duration{url:https://zite.zite.io/api/v2/user-profile/}": [
      "p(90)<200",
    ],
  },
};

export default function main() {
  let response;

  // TryGet
  response = http.get("https://zite.zite.io/api/v2/user-profile/", {
    headers: {
      "Content-Type": "application/json",
      "x-csrftoken":
        "Bw2DPkHWEKH0UM5QfS4vPTVw91GREZ6GDxgcQcG29JNpRXeiYq4IkYASTgrkR9Dt",
      cookie: "zite_cookie=n8q4lnm613dnxmtmt9c3r6tvtth7guoo;",
    },
  });
  check(response, {
    "status equals 200": (response) => response.status.toString() === "200",
  });

  // Automatically added sleep
  sleep(1);
}
