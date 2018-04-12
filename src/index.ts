import {
  parseHash,
  parseHostname,
  parseProtocol,
  parsePathname,
  parseSearch,
  parseUsername,
  parseUserPassword, parseOrigin, parsePort
} from "./utils/parser";

export function parserURI(string: string) {
  const urlObject = new URL(string)
  return {
    hash: parseHash(urlObject),
    host: parseHostname(urlObject),
    origin: parseOrigin(urlObject),
    password: parseUserPassword(urlObject),
    pathname: parsePathname(urlObject),
    port: parsePort(urlObject),
    protocol: parseProtocol(urlObject),
    query: parseSearch(urlObject),
    user: parseUsername(urlObject)
  }
}