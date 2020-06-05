import {
  parseHash,
  parseHostname,
  parseProtocol,
  parsePathname,
  parseSearch,
  parseUsername,
  parseUserPassword,
  parseOrigin,
  parsePort
} from "./utils/parser";

export function parseURI(string: string) {
  if (string.indexOf('://') === -1) {
    let urlObject = new URL("http://" + string)
    return {
      hash: parseHash(urlObject).value || null,
      host: parseHostname(urlObject).value || null,
      origin: parseOrigin(urlObject, true).value || null,
      password: parseUserPassword(urlObject).value || null,
      pathname: parsePathname(urlObject).value || null,
      port: parsePort(urlObject).value || null,
      protocol: null,
      query: parseSearch(urlObject).value || null,
      user: parseUsername(urlObject).value || null
    }
  }
  let urlObject = new URL(string)
  return {
    hash: parseHash(urlObject).value || null,
    host: parseHostname(urlObject).value || null,
    origin: parseOrigin(urlObject).value || null,
    password: parseUserPassword(urlObject).value || null,
    pathname: parsePathname(urlObject).value || null,
    port: parsePort(urlObject).value || null,
    protocol: parseProtocol(urlObject).value || null,
    query: parseSearch(urlObject).value || null,
    user: parseUsername(urlObject).value || null
  }
}