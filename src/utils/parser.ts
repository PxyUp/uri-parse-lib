interface parserResponse {
  value: string | Object,
  exist?: boolean
}

export function parseHash(urlObject: URL): parserResponse {
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

export function parseUsername(urlObject: URL): parserResponse {
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


export function parseUserPassword(urlObject: URL): parserResponse {
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

export function parseProtocol(urlObject: URL): parserResponse {
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

export function parseProtocol(urlObject: URL): parserResponse {
  if (urlObject.origin.length) {
    return {
      value: urlObject.origin,
    }
  }

  return {
    value: null,
    exist: false
  }
}

export function parseHostname(urlObject: URL): parserResponse {
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

export function parseOrigin(urlObject: URL): parserResponse {
  if (urlObject.origin.length) {
    return {
      value: urlObject.origin,
    }
  }

  return {
    value: null,
    exist: false
  }
}

export function parsePathname(urlObject: URL): parserResponse {
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

export function parsePort(urlObject: URL): parserResponse {
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

export function parseSearch(urlObject: URL): parserResponse {
  if (urlObject.search.length) {
    const answer = {}
    const arrayOfParam = urlObject.search.replace("?", "").split('&');
    arrayOfParam.forEach((param) => {
      const {key, value} = param.split("=")
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

function buildSearchParam(store, param: string, value) {
  let store = {};

  if (param.indexOf("[") === -1) {
    store[param] = value
    return
  }

  if (param.indexOf("[]")) {
    let key = param.replace("[]", '')
    if (store[key]) {
      store[key].push(value)
      return
    }
    store[key] = [value]
  }

  let keys = param.split(/\[|\]/).filter((s) => s.length > 0);
  let data = {}
  while (keys.length) {
    let key = keys.shift()
    if (data[key]) {
      data = data[key]
    } else {
      if (keys.length) {
        data[key] = {}
        data = data[key]
      } else {
        data[key] = value
      }
    }
  }

  return Object.assign(store, data);
}