import Emittery from "emittery";
import { callModule, connectModule, log, logErr } from "../api.js";
import { DataFn, ErrTuple } from "@lumeweb/libweb";

type callModuleBound = (method: string, data?: any) => Promise<ErrTuple>;
type connectModuleBound = (
  method: string,
  data: any,
  receiveUpdate: DataFn,
) => [sendUpdate: DataFn, response: Promise<ErrTuple>];

interface ModuleBag {
  callModule: typeof callModule;
  connectModule: typeof connectModule;
  log: typeof log;
  logErr: typeof logErr;
}

interface ModuleBagBound extends ModuleBag {
  callModule: callModuleBound;
  connectModule: connectModuleBound;
}

export abstract class Client extends Emittery {
  private _module: string;

  constructor(module: string) {
    super();
    this._module = module;
  }

  get callModule(): callModuleBound {
    return this.getBound(this._module).callModule;
  }

  get connectModule(): connectModuleBound {
    return this.getBound(this._module).connectModule;
  }

  public getBound(module: string): ModuleBagBound {
    return {
      callModule: callModule.bind(undefined, module),
      connectModule: connectModule.bind(undefined, module),
    } as ModuleBagBound;
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
    const ret = await this.callModule(method, data);

    return ret[0];
  }
}

type ClientConstructor<U> = new (module: string, ...args: any[]) => U;

export const factory = function <T extends Client = Client>(
  type: ClientConstructor<T>,
  module: string,
) {
  return function (...args: any): T {
    return new type(module, ...args);
  };
};
