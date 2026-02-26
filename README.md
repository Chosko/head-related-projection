# Head-related projection

This is just a prototype of a face-tracking camera that adjusts the in-game perspective based on your face's position as tracked by a webcam. Here you can see it in action https://chosko.com/head-related-projection

## Development guide

Requirements

* node v12.14.0
* npm 6.13.4
* yarn

Getting started

Install yarn globally if you don't have it:

```bash
npm install -g yarn
```

Install dependencies:

```bash
yarn install
```

Start local server and watch for changes

```bash
yarn start
```

Build for production

```bash
yarn build
```

Build and deploy to github pages

```bash
yarn deploy
```

### Troubleshooting

If you get an error like this on Windows:

```
'NODE_ENV' is not recognized as an internal or external command,
operable program or batch file.
```

Then you need to install `win-node-env` globally:

```bash
npm install -g win-node-env
```
