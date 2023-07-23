import defer from "p-defer";
export { defer };

export { log, logErr } from "./log.js";
export { ActiveQuery, addHandler, handleMessage } from "./messages.js";
export { callModule, connectModule, newKernelQuery } from "./queries.js";
export { getDataFromKernel, getKey, handlePresentKey } from "./key.js";
export { moduleQuery, presentKeyData } from "./types.js";
export { Client, factory } from "./client.js";

import NetworkClient from "./clients/network.js";

export { NetworkClient };
