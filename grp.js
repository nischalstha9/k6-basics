import { group, check } from "k6";
import http from "k6/http";

export default function () {
  let resp;
  // reconsider this type of code
  group("get post", function () {
    http.get(`https://zite.zite.io`);
  });
  group("list posts", function () {
    const res = http.get(`https://zite.zite.io`);
    check(res, {
      "is status 200": (r) => r.status === 200,
    });
  });
}
