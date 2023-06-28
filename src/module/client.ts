import EventEmitter from "eventemitter2";
import { callModule } from "../api.js";
import { ErrTuple } from "@lumeweb/libweb";

export abstract class Client extends EventEmitter {
  private async _callModule(...args) {
    // @ts-ignore
    const ret = await callModule(...args);
    this.handleError(ret);
    return ret;
  }

  protected handleError(ret: ErrTuple): void {
    if (ret[1]) {
      throw new Error(ret[1]);
    }
  }

  protected handleErrorOrReturn(ret: ErrTuple): any {
    this.handleError(ret);
    return ret[0];
  }

  protected async callModuleReturn(method: string, data?: any): Promise<any> {
    const ret = await callModule(method, data);

    return ret[0];
  }
}
