# b64-cli ![Node.js CI](https://github.com/haroun/b64-cli/workflows/Node.js%20CI/badge.svg) ![CodeQL](https://github.com/haroun/b64-cli/workflows/CodeQL/badge.svg)

> Command line interface to decode/encode base64 data

Did you know that JWT are Base64 URL encoded?
> The output is three Base64 strings separated by dots that can be easily passed in HTML and HTTP environments [Introduction to JSON Web Tokens](https://jwt.io/introduction/)

You can use `b64` to check the content of a JWT header/payload, or encode/decode embedded resources from your CSS,...


## Install

```
$ npm install --global @haroun/b64-cli
```

If you don't want to install the package globally, you can use npx instead

```
$ npx @haroun/b64-cli
```


## Usage

```
$ b64 --help

  Usage
    $ b64 [--encode|--decode] <string>
    $ echo <string> | b64

  Options
    -e, --encode Encode
    -d, --decode Decode

  Examples
    $ b64 --encode 'test'
    dGVzdA==

    $ b64 -e 'test'
    dGVzdA==

    $ b64 'dGVzdA=='
    test

    $ b64 --decode 'dGVzdA=='
    test

    $ echo 'dGVzdA==' | b64
    test
```


## License

MIT © [Harouna Traore](https://github.com/haroun)
