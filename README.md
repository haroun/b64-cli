# b64-cli [![Build Status](https://travis-ci.org/haroun/b64-cli.svg?branch=master)](https://travis-ci.org/haroun/b64-cli)

> Command line interface to decode/encode base64 data

Did you know that JWT are Base64 URL encoded?
> The output is three Base64 strings separated by dots that can be easily passed in HTML and HTTP environments [Introduction to JSON Web Tokens](https://jwt.io/introduction/)

You can use `b64` to check the content of a JWT header/payload, or encode/decode embedded resources from your CSS,...


## Install

```
$ npm install --global b64-cli
```


## Usage

```
$ b64 --help

  Usage
    $ b64 <option> <string>

  Options:
    -e, --encode Encode
    -d, --decode Decode

  Example
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
