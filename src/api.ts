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

// @ts-ignore
const kernelEnv = typeof window !== "undefined" && window?.document;

export const callModule = kernelEnv ? callModuleKernel : callModuleModule;
export const connectModule = kernelEnv
  ? connectModuleKernel
  : connectModuleModule;
export const log = kernelEnv ? logKernel : logModule;
export const logErr = kernelEnv ? logErrKernel : logErrModule;
