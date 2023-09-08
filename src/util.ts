// addContextToErr is a helper function that standardizes the formatting of
// adding context to an error.
//
// NOTE: To protect against accidental situations where an Error type or some
// other type is provided instead of a string, we wrap both of the inputs with
// objAsString before returning them. This prevents runtime failures.
import { Err } from "#types.js";

const MAX_UINT_64 = 18446744073709551615n;

function addContextToErr(err: any, context: string): string {
  if (err === null || err === undefined) {
    err = "[no error provided]";
  }
  return objAsString(context) + ": " + objAsString(err);
}

// objAsString will try to return the provided object as a string. If the
// object is already a string, it will be returned without modification. If the
// object is an 'Error', the message of the error will be returned. If the object
// has a toString method, the toString method will be called and the result
// will be returned. If the object is null or undefined, a special string will
// be returned indicating that the undefined/null object cannot be converted to
// a string. In all other cases, JSON.stringify is used. If JSON.stringify
// throws an exception, a message "[could not provide object as string]" will
// be returned.
//
// NOTE: objAsString is intended to produce human readable output. It is lossy,
// and it is not intended to be used for serialization.
function objAsString(obj: any): string {
  // Check for undefined input.
  if (obj === undefined) {
    return "[cannot convert undefined to string]";
  }
  if (obj === null) {
    return "[cannot convert null to string]";
  }

  // Parse the error into a string.
  if (typeof obj === "string") {
    return obj;
  }

  // Check if the object is an error, and return the message of the error if
  // so.
  if (obj instanceof Error) {
    return obj.message;
  }

  // Check if the object has a 'toString' method defined on it. To ensure
  // that we don't crash or throw, check that the toString is a function, and
  // also that the return value of toString is a string.
  if (Object.prototype.hasOwnProperty.call(obj, "toString")) {
    if (typeof obj.toString === "function") {
      const str = obj.toString();
      if (typeof str === "string") {
        return str;
      }
    }
  }

  // If the object does not have a custom toString, attempt to perform a
  // JSON.stringify. We use a lot of bigints in libskynet, and calling
  // JSON.stringify on an object with a bigint will cause a throw, so we add
  // some custom handling to allow bigint objects to still be encoded.
  try {
    return JSON.stringify(obj, (_, v) => {
      if (typeof v === "bigint") {
        return v.toString();
      }
      return v;
    });
  } catch (err: any) {
    if (err !== undefined && typeof err.message === "string") {
      return `[stringify failed]: ${err.message}`;
    }
    return "[stringify failed]";
  }
}

// decodeU64 is the opposite of encodeU64, it takes a uint64 encoded as 8 bytes
// and decodes them into a BigInt.
function decodeU64(u8: Uint8Array): [bigint, Err] {
  // Check the input.
  if (u8.length !== 8) {
    return [0n, "input should be 8 bytes"];
  }

  // Process the input.
  let num = 0n;
  for (let i = u8.length - 1; i >= 0; i--) {
    num *= 256n;
    num += BigInt(u8[i]);
  }
  return [num, null];
}

// encodeU64 will encode a bigint in the range of a uint64 to an 8 byte
// Uint8Array.
function encodeU64(num: bigint): [Uint8Array, Err] {
  // Check the bounds on the bigint.
  if (num < 0) {
    return [new Uint8Array(0), "expected a positive integer"];
  }
  if (num > MAX_UINT_64) {
    return [new Uint8Array(0), "expected a number no larger than a uint64"];
  }

  // Encode the bigint into a Uint8Array.
  const encoded = new Uint8Array(8);
  for (let i = 0; i < encoded.length; i++) {
    encoded[i] = Number(num & 0xffn);
    num = num >> 8n;
  }
  return [encoded, null];
}

function bufToB64(buf: Uint8Array): string {
  const b64Str = btoa(String.fromCharCode(...buf));
  return b64Str.replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

export { objAsString, addContextToErr, encodeU64, decodeU64, bufToB64 };
