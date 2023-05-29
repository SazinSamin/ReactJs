https://www.altogic.com/blog/difference-between-controlled-and-uncontrolled-component#:~:text=In%20React%2C%20a%20controlled%20component,the%20state%20of%20the%20component.
https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/  

### From ChatGpt  
In React, controlled and uncontrolled components refer to two different approaches for managing and handling form inputs.

Controlled Components:
A controlled component is a React component where the form input's value is controlled by the component's state. In other words, 
the value of the form input is explicitly set and managed by React. To create a controlled component, you need to define an event handler for the input's onChange event, which updates the component's state with the new value. Then, you set the value of the 
input element to the corresponding state value. Whenever the user types in the input, React updates the component state, and 
the input value reflects the state value. This approach allows React to have full control over the input.
Here's an example of a controlled component:

```
import React, { useState } from 'react';

function ControlledComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input type="text" value={inputValue} onChange={handleInputChange} />
  );
}
```
Uncontrolled Components:  
An uncontrolled component is a component where the form input's value is handled by the DOM itself, rather than being controlled by React. In this case, you typically use a ref to access the input's value after the component renders, rather than managing itthrough the component state. The value of the input is controlled by the user's interaction with the input directly, without React being aware of the changes until it is explicitly accessed.
Here's an example of an uncontrolled component:

```
import React, { useRef } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef();

  const handleButtonClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
}
```
In this example, the input's value is not controlled by React. Instead, the input element is accessed using the ref, and the value is retrieved using inputRef.current.value when the button is clicked.

Controlled components provide more control and allow you to manage the input's value within the React component state. On the other hand, uncontrolled components can be useful for simpler scenarios and when you need to access the input's value imperatively without relying on React state updates.
