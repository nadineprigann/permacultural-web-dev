# Documentation of creating a workflow for permacultural web products

This project documents the process of developing a web development workflow based on permacultural principles which aims to be more sustainable than conventional web development practices.

## Preparation

1. Initialize a (private) repository on GitHub.
2. Copy the code of this repo into it
3. Navigate to your working directory (`docs` by default)

## Installation

Within the `/docs/` folder run the following command:

`npm install` or `npm i`

To start developing, run...

```console
npm run dev
```

## Deployment

The build and deployment is handled by [GitHub actions](https://help.github.com/en/actions). The corresponding workflow can be found under `/.github/workflows/vue-press-frontend.yml`. Make sure to create a [GitHub secret](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) called `FRONTEND_PASSWORD` that holds the FTP password (no special characters allowed!).

## Alternative deployment via SSH

The GitHub workflow files also offer a deployment via SSH. For it to work, you need to create an SSH key in the following format:

```console
ssh-keygen -m PEM -t rsa -b 4096
```

or

```console
ssh-keygen -m PEM -t ed25519
```

Then, copy the public key to the webserver:

```console
ssh-copy-id -i /path/to/key -p PORT user@host
```

Lastly, copy the private key to the clipboard...

```console
pbcopy < /path/to/key
```

...and paste it as a GitHub secret called `SERVER_SSH_KEY`.
