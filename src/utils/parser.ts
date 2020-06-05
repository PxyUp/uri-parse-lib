import { mergeWith } from "lodash-es"

export function parseHash(urlObject: URL) {
  if (urlObject.hash.length) {
    return {
      value: urlObject.hash,
    }
  }

  return {
    value: null,
    exist: false
  }
}

export function parseUsername(urlObject: URL) {
  if (urlObject.username.length) {
    return {
      value: urlObject.username,
    }
  }

  return {
    value: null,
    exist: false
  }
}


export function parseUserPassword(urlObject: URL) {
  if (urlObject.password.length) {
    return {
      value: urlObject.password,
    }
  }

  return {
    value: null,
    exist: false
  }
}

export function parseProtocol(urlObject: URL) {
  if (urlObject.protocol.length) {
    return {
      value: urlObject.protocol.replace(':', ''),
    }
  }

  return {
    value: null,
    exist: false
  }
}

export function parseHostname(urlObject: URL) {
  if (urlObject.hostname.length) {
    return {
      value: urlObject.hostname,
    }
  }

  return {
    value: null,
    exist: false
  }
}

export function parseOrigin(urlObject: URL, emptyProtocol = false) {
  if (urlObject.origin.length) {
    if (emptyProtocol) {
      return {
        value: urlObject.origin.substring(7)
      }
    }
    return {
      value: urlObject.origin,
    }
  }

  return {
    value: null,
    exist: false
  }
}

export function parsePathname(urlObject: URL) {
  if (urlObject.pathname.length) {
    return {
      value: urlObject.pathname,
    }
  }

  return {
    value: null,
    exist: false
  }
}

export function parsePort(urlObject: URL) {
  if (urlObject.port.length) {
    return {
      value: urlObject.port,
    }
  }

  return {
    value: null,
    exist: false
  }
}

export function parseSearch(urlObject: URL) {
  if (urlObject.search.length) {
    const answer = {}
    const arrayOfParam = urlObject.search.replace("?", "").split('&');
    arrayOfParam.forEach((param) => {
      const [key, value] = param.split("=")
      buildSearchParam(answer, key, value)
    })

    return {
      value: answer
    }

  }

  return {
    value: null,
    exist: false
  }
}

function buildSearchParam(store: Object, param: string, value: any) {

  if (param.indexOf('[') === -1) {
    store[param] = value
    return
  }

  let keys = param.replace("[]", "[$empty$]").split(/\[|\]/).filter((s) => s.length > 0);
  let data = {}
  let link = data
  while (keys.length) {
    let key = keys.shift()
    if (keys.length >= 1) {
      if (isEmptyKey(key)) {
        throw new Error("error")
      } else {
        if (data[key]) {
          data = data[key]
        } else {
          if (parseInt(key).toString() === key) {
            if (data[parseInt(key)]) {
              data = data[parseInt(key)]
            } else {
              data[parseInt(key)] = {}
              data = data[parseInt(key)]
            }
          }
          else {
            if (isEmptyKey(keys[0]) || parseInt(keys[0]).toString() === keys[0]) {
              if (!data[key]) {
                data[key] = []
              }
            } else {
              if (!data[key]) {
                data[key] = {}
              }
            }
            data = data[key]
          }
        }
      }
    } else {
      if (isEmptyKey(key)) {
        if (Array.isArray(data)) {
          data.push(value)
        } else {
          data = [value]
        }
      } else {
        data[key] = value
      }
    }
  }

  return mergeWith(store, link, (objValue, srcValue) => {
      if (Array.isArray(objValue)) {
        return objValue.concat(srcValue).filter(e => e !== void 0);
      }
    }
  )
}

function isEmptyKey(key) {
  return key === '$empty$' || key.length === 0
}