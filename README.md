# dropdown-component-library

Simple React Dropdown component created using `create-react-app`

### Prerequisites for install

- You need [Git](https://git-scm.com) if you want to clone the repository
- You need [Node](https://nodejs.org/en/) to run the npm commands

### Installation

- using NPM  
  `$ npm install dropdown-component-library`

Link to access the package [here](https://www.npmjs.com/package/dropdown-component-library)

### Basic Usage

Import the Dropdown component in your React components:

```js
import { Dropdown } from "dropdown-component-library";
```

After you've imported the Dropdown component, you're ready to start using Dropdown inside your components! 🎉

```js
import React from "react";
import { Dropdown } from "dropdown-component-library";

const myData = ["Paris", "Nantes", "Toulouse"];

const App = () => {
  return <Dropdown options={myData} />;
};

export default App;
```

You can also use attributes like: placeholder, width, onSelect

```js
import React from "react";
import { Dropdown } from "dropdown-component-library";

const myData = ["Paris", "Nantes", "Toulouse"];

const App = () => {
  return (
    <Dropdown
      options={myData}
      placeholder="Select your city"
      width="500px"
      onSelect={(value) => console.log(value)}
    />
  );
};

export default App;
```

I'm open for suggestions & PR :-)
