import http from "k6/http";
import { check, group, sleep, fail } from "k6";

export let options = {
  iterations: 1,
  duration: "120m",
};

export default () => {
  let str = __ENV.TOKENS;
  console.log(str);

  let TOKENS = str.split(",");
  console.log(TOKENS);
};
