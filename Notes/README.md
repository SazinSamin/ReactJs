You should write the render method as a pure function, meaning that it should return the same result if props, state,
and context are the same. It also shouldn’t contain side effects (like setting up subscriptions) or interact with the 
browser APIs. Side effects should happen either in event handlers or methods like componentDidMount.
