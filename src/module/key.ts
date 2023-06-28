import { ActiveQuery, DataFn } from "./messages.js";

// Define a set of helper variables that track whether the key has been
// received by the kernel yet.
let resolveKey: DataFn;
const keyPromise: Promise<Uint8Array> = new Promise((resolve) => {
  resolveKey = resolve;
});

// dataFromKernel will hold any data that is sent by the kernel in the
// 'presentKey' call that happens at startup.
//
// dataFromKernel should not be accessed until 'keyPromise' has been resolved.
let dataFromKernel: any;

// getKey will return a promise that resolves when the key is available.
function getKey(): Promise<Uint8Array> {
  return keyPromise;
}

// getDataFromKernel will resolve with the data that was provided by the kernel
// in 'presentKey' once that data is available.
function getDataFromKernel(): Promise<any> {
  return new Promise((resolve) => {
    keyPromise.then(() => {
      resolve(dataFromKernel);
    });
  });
}

// handlePresentKey will accept a key from the kernel and unblock any method
// that is waiting for the key.
function handlePresentKey(aq: ActiveQuery) {
  dataFromKernel = aq.callerInput;
  resolveKey(aq.callerInput.key);
}

export { getDataFromKernel, getKey, handlePresentKey };
