import * as parseURI from './../src/index'

describe("URI parse tesr", () => {
  it("getHash() => shoud be hash", () => {
    let url;
    url = parseURI("google.ru#ads");
    expect(url.hash).toBe("#ads")

    url = parseURI("http://google.ru#adss");
    expect(url.hash).toBe("#adss")

    url = parseURI("http://google.ru");
    expect(url.hash).toBe(null)
  })

  it("getUser() => shoud be user", () => {
    let url;
    url = parseURI("user:pass@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.user).toBe("user")

    url = parseURI("https://users:pass@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.user).toBe("users")

    url = parseURI("example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.user).toBe(null)
  })

  it("getPassword() => shoud be password", () => {
    let url;
    url = parseURI("user:pass@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.password).toBe("pass")

    url = parseURI("https://users:passs@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.password).toBe("passs")

    url = parseURI("example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.password).toBe(null)

    url = parseURI("users@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.password).toBe(null)
  })

  it("getOrigin() => shoud be origin", () => {
    let url;
    url = parseURI("user:pass@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.origin).toBe("example.com:8080")

    url = parseURI("https://users:passs@example.com/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.origin).toBe("https://example.com")

    url = parseURI("example.com/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.origin).toBe("example.com")

    url = parseURI("http://users@example.com:9990/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.origin).toBe("http://example.com:9990")
  })

  it("getPort() => shoud be port", () => {
    let url;
    url = parseURI("user:pass@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.port).toBe("8080")

    url = parseURI("https://users:passs@example.com/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.port).toBe(null)

    url = parseURI("example.com/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.port).toBe(null)

    url = parseURI("http://users@example.com:9990/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.port).toBe("9990")
  })

  it("getProtocol() => shoud be protocol", () => {
    let url;
    url = parseURI("user:pass@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.protocol).toBe(null)

    url = parseURI("https://users:passs@example.com/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.protocol).toBe("https")

    url = parseURI("ssh://example.com/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.protocol).toBe("ssh")

    url = parseURI("http://users@example.com:9990/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.protocol).toBe("http")
  })

  it("getPathName() => shoud be pathname", () => {
    let url;
    url = parseURI("user:pass@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.pathname).toBe("/directory/file.ext")

    url = parseURI("https://users:passs@example.com/directory/file.exsst?query=1&next=4&sed=5#anchor");
    expect(url.pathname).toBe("/directory/file.exsst")

    url = parseURI("ssh://example.com/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.pathname).toBe("/directory/file.ext")

    url = parseURI("http://users@example.com:9990/directory/file.exst?query=1&next=4&sed=5#anchor");
    expect(url.pathname).toBe("/directory/file.exst")
  })

  it("getSearchParam() => shoud be searchparam", () => {
    let url;

    url = parseURI("user:pass@example.com:8080/directory/file.ext?query=1&next=4&sed=5#anchor");
    expect(url.query).toEqual({
      query: '1',
      next: '4',
      sed: '5'
    })

    url = parseURI("user:pass@example.com:8080/directory/file.ext?query[]=1&next=4&sed=5#anchor");
    expect(url.query).toEqual({
      query: ['1'],
      next: '4',
      sed: '5'
    })

    url = parseURI("user:pass@example.com:8080/directory/file.ext?query[]=1&next[]=4&sed=5#anchor");
    expect(url.query).toEqual({
      query: ['1'],
      next: ['4'],
      sed: '5'
    })

    url = parseURI("user:pass@example.com:8080/directory/file.ext?query[nan]=1&next[]=4&sed=5#anchor");
    expect(url.query).toEqual({
      query: {
        nan: '1'
      },
      next: ['4'],
      sed: '5'
    })

    url = parseURI("user:pass@example.com:8080/directory/file.ext?query[nan][]=1&next[]=4&sed=5#anchor");
    expect(url.query).toEqual({
      query: {
        nan: ['1']
      },
      next: ['4'],
      sed: '5'
    })

    url = parseURI("user:pass@example.com:8080/directory/file.ext?query[nan][]=1&query[nan][]=4&sed=5#anchor");
    expect(url.query).toEqual({
      query: {
        nan: ['1', '4']
      },
      sed: '5'
    })

    url = parseURI("user:pass@example.com:8080/directory/file.ext?query[nan][]=1&query[nan][]=4&sed[]=5#anchor");
    expect(url.query).toEqual({
      query: {
        nan: ['1', '4']
      },
      sed: ['5']
    })

    url = parseURI("user:pass@example.com:8080/directory/file.ext?query[nan][0][nan]=1&query[nan][0][sed]=4&sed[]=5#anchor");
    expect(url.query).toEqual({
      query: {
        nan: [
          {
            nan: '1',
          }, {
            sed: '4'
          }
        ]
      },
      sed: ['5']
    })

    url = parseURI("user:pass@example.com:8080/directory/file.ext?query[nan][0][nan]=1&query[nan][1][sed]=4&sed[]=5&query[nan][2][sed]=4#anchor");
    expect(url.query).toEqual({
      query: {
        nan: [
          {
            nan: '1',
          }, {
            sed: '4'
          }, {
            sed: '4'
          }
        ]
      },
      sed: ['5']
    })

  })

})