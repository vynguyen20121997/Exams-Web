import { lazy } from "react";

export default function lazyWithRetry(component, retries, interval) {
  return lazy(() => retry(component, retries, interval));
}

function retry(fn, retriesLeft = 3, interval = 1000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
}
