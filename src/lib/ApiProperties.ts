export namespace ApiProperties {
  let _basePath = 'localhost:';
  let _basePort = '8080';

  const enum Protocols {
    HTTP = 'http://',
  }
  export function getBasePath(): string {
    return Protocols.HTTP + _basePath + _basePort;
  }
}
