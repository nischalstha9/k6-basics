import http from "k6/http";
import { group } from "k6";
import grpObj from "./group.js";
import requestList from "./requests.js";
import getOpt from "./options.js";

const ITERATION = __ENV.ITERATION ? __ENV.ITERATION : 1;

let TOKENS = [];

if (!__ENV.TOKENS) {
  console.error(
    "No tokens given!! Please give token variable like \n TOKEN=<TOKEN_VALUE1>,<TOKEN_VALUE2>"
  );
}

TOKENS = __ENV.TOKENS.split(",");

const requests = requestList;

const groups = [];

TOKENS.forEach(function (token, index) {
  groups.push(grpObj(token));
});

export let options = getOpt(ITERATION);

export default function () {
  if (groups.length > 0) {
    groups.forEach(function (grp, index) {
      console.log("==== TEST FOR GROUP ", grp.group_name, " STARTED ====");
      group(grp.group_name, function () {
        const headers = grp.headers;
        const cookies = grp.cookies;
        const header_params = { headers: headers, cookies: cookies };
        let res;
        grp.requests.forEach(function (req, index) {
          let url = req.url;
          switch (req.method) {
            case "get":
              res = http.get(url, header_params);
              break;
            case "post":
              res = http.post(url, req.data, header_params);
              break;
            case "put":
              res = http.put(url, req.data, header_params);
              break;
            case "patch":
              res = http.patch(url, req.data, header_params);
              break;
            case "delete":
              res = http.del(url, header_params);
              break;
            default:
              break;
          }
          console.log("================ Test Data ==============");
          console.log("URL: " + url);
          console.log("Token: " + grp.headers.Authorization);
          console.log("Response Status Code: " + String(res.status));
          console.log("Response time: " + String(res.timings.duration) + " ms");
          console.log("================ xxxxx =============");
        });
      });
      console.log("==== TEST FOR GROUP ", grp.group_name, " ENDED ====");
      // console.log("GROUP DURATION ", grp.token);
    });
  }
  // ==========REQUEST=============
  if (requests.length > 0) {
    requests.forEach(function (api, index) {
      const headers = api.headers;
      const cookies = api.cookies;
      const header_params = { headers: headers, cookies: cookies };
      const url = api.url;

      if (url !== null || url !== "") {
        let res;
        switch (api.method) {
          case "get":
            res = http.get(url, header_params);
            break;
          case "post":
            res = http.post(url, api.data, header_params);
            break;
          case "put":
            res = http.put(url, api.data, header_params);
            break;
          case "patch":
            res = http.patch(url, api.data, header_params);
            break;
          case "delete":
            res = http.delete(url, header_params);
            break;
          default:
            break;
        }
        console.log("================ Test Data ==============");
        console.log("URL: " + api.url);
        console.log("Response Status Code: " + String(res.status));
        console.log("Response time: " + String(res.timings.duration) + " ms");
        console.log("================ xxxxx =============");
      }
    });
  }
}
