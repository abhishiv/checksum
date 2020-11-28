import { md5 } from "pure-md5";

export function checksum(obj: any) {
  return md5(JSON.stringify(obj));
}
