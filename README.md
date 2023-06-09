# Ripple-effect-reactjs [![npm version](https://badge.fury.io/js/ripple-effect-reactjs.svg)](http://badge.fury.io/js/ripple-effect-reactjs)

Simple modifiable ripple effect library for react.js

## Demo

Live demo: https://ripple-effect-reactjs.netlify.app/

## Install

```sh
 npm i ripple-effect-reactjs
```

## Usage

To app.js file add:

```js
import RippleButton from "ripple-effect-reactjs";

function App() {
  return (
    <RippleButton color={black} speed={2000} radius={3} width={50}>
      <button>Click me</button>
    </RippleButton>
  );
}

export default App;
```

## Options

| Properties |   values    |         default |
| ---------- | :---------: | --------------: |
| color      |  hex, rgb   | rgb(83, 82, 82) |
| speed      | millisecond |            1000 |
| radius     |     px      |               2 |
| width      | percentage  |             100 |
