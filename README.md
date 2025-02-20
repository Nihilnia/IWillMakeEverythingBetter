# I will make everything better. Everything.

Started at: Feb 1, 2025, 07:57 PM

# React Notez

## Four important things:

- Components
- JSX
- Events
- State

## Components

Basically what makes React React.

```jsx
export default function Gloria(){
    return <h2>Hello world!</>
}
```

```jsx
import Gloria from "./components/Gloria.jsx";

<Gloria />;
```

**Props:**
Components can have props to be dynamic.

```jsx
export default function Gloria(props){
    return <h2>Hello it' s {props.name}</>
}
```

```jsx
import Gloria from "./components/Gloria.jsx";

<Gloria name="Gloria" />;
```

**You can destructure props to use them easly without using props keyword:**

```jsx
export default function Gloria({name}){
    return <h2>Hello it' s {name}</>
}
```

**Props can receive default values as fallback:**

```jsx
export default function Gloria({name = "Gloria"}){
    return <h2>Hello it' s {name}</>
}
```

**Props can receive any JSX expressions. Even a component:**

```jsx
import Gloria from "./components/Gloria.jsx";

<Gloria output={<AnotherComponent />} />;
```

## JSX

JavaScript XML.
Basically you can write JavaScript along with HTML.

```jsx
  <anyHTMLElement>anyString {anyJavaScript}</anyHTMLElement>
  <p>2 + 2 = {2 + 2}</p>
```

## Events

User typing something, what is it?
Did user click that button?

```jsx
export default function Gloria() {
  function handleClick() {
    alert("Button clicked.");
  }

  return <button onClick={handleClick}>Do not click me!</button>;
}
```

**Sending arguments:**

```jsx
export default function Gloria() {
  function handleClick(e) {
    const btnValue = e.target.textContent;
    alert(`${btnValue} button is clicked.`);
  }

  return <button onClick={handleClick}>Do not click me!</button>;
}
```

Functions in events directly sending event object.
You can use it however you want. It holds tons of keys in it.
Target is one of them. And textContent is one of the key of target.

## State

I have a dynamic data. This is where I am holding it.
I will track it and going to 'react' to it.

```jsx
import { useState } from "react";

export default function Gloria() {
  const [userIntel, setUserIntel] = useState("");

  function handleInput(e) {
    const inputValue = e.target.value;
    setUserIntel(inputValue);
  }

  return (
    <div>
      <h4>User typed: {userIntel}</h4>
      <input type="text" onChange={handleInput} />
    </div>
  );
}
```
