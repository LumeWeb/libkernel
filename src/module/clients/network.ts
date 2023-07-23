import { Client } from "../client.js";
import { getNetworkModuleStatus } from "#api.js";

export default abstract class NetworkClient extends Client {
  public async register() {
    return this.callModuleReturn("register");
  }

  public async status(callback?: any): Promise<void | (() => Promise<void>)> {
    return getNetworkModuleStatus(callback, undefined, this.connectModule);
  }

  public async ready() {
    return this.callModuleReturn("ready");
  }
}
