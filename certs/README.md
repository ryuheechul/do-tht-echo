We are going to follow [this guide](https://web.dev/how-to-use-local-https/#setup) to the expose echo server via HTTPS.

## Install

We need `mkcert` binary, install it via https://github.com/FiloSottile/mkcert#installation or `.envrc` and `shell.nix` might install it for you.
## Generate

No we have `mkcert`, let's generate the certificate and private key.

Essentially, follow the steps below.

```
# let the device trust mkcert-generated local CA
mkcert -install

# generate the cert for localhost
mkcert localhost

# and make sure `localhost.pem` and `localhost-key.pem` are generated under this directory
ls localhost.pem localhost-key.pem
```

or

```
# only need to do this once
make mkcert-install

# to either generate or make sure certs are generated
make localhost.pem
```

