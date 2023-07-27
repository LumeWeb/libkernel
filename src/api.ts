import {
  callModule as callModuleKernel,
  connectModule as connectModuleKernel,
  log as logKernel,
  logErr as logErrKernel,
} from "#kernel/index.js";
import {
  callModule as callModuleModule,
  connectModule as connectModuleModule,
  log as logModule,
  logErr as logErrModule,
} from "#module/index.js";
import defer, { DeferredPromise } from "p-defer";
import { connectModuleBound } from "#module/client.js";

// @ts-ignore
const kernelEnv = typeof window !== "undefined" && window?.document;

export const callModule = kernelEnv ? callModuleKernel : callModuleModule;
export const connectModule = kernelEnv
  ? connectModuleKernel
  : connectModuleModule;
export const log = kernelEnv ? logKernel : logModule;
export const logErr = kernelEnv ? logErrKernel : logErrModule;

export function getNetworkModuleStatus(
  callback?: any,
  module?: string,
  // @ts-ignore
  CM: connectModuleBound = connectModule.bind(null, module),
): Promise<void> | (() => Promise<void>) {
  let recvUpdate = (data) => {
    callback?.(data);
  };

  const [close, resp] = CM("status", null, (data) => {
    recvUpdate(data);
  });

  if (!callback) {
    return new Promise(async (resolve) => {
      const d = defer();
      recvUpdate = (data) => {
        resolve(data);
        d.resolve();
      };

      await d.promise;
      close();
    });
  }

  let closed = false;

  return async () => {
    if (closed) {
      return;
    }

    closed = true;
    close();
  };
}
