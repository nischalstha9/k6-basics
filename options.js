export default function options(iteration) {
  return {
    //   stages: [
    //     //target is no of cocurrency
    //     { duration: "3m", target: 100 },
    //     { duration: "1m", target: 20 },
    //     { duration: "1m", target: 0 },
    //   ],
    vus: iteration, //no of iterations and vus must be same
    iterations: iteration, //no of iterations and vus must be same
    // maxDuration: 1000, //timeout for process
  };
}
