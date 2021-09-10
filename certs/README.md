We are going to follow [this guide](https://web.dev/how-to-use-local-https/#setup) to expose echo server via HTTPS.

## Install

We need `mkcert` binary, install it via https://github.com/FiloSottile/mkcert#installation or `.envrc` and `shell.nix` might install it for you.
## Generate

No we have `mkcert`, let's generate the certificate and private key.

Essentially do the followings.

```
# let the device to trust mkcert-generated local CA
mkcert -install

# generate the cert for localhost
mkcert localhost
```

And make sure `localhost.pem` and `localhost-key.pem` are generated under this directory.

or

```
# only need to do this once
make mkcert-install

# to either generate or make sure certs are generated
make localhost.pem
```

