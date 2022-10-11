import React from 'react';

const Answers = () => {
    return (
        <div className='mt-5'>
            <div className='p-5 shadow-lg'>
            <h1>1. What is purpose of React?</h1>
            <p>
            React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications. <br />
            React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
            </p>
            </div>
            <div className='p-5 shadow-lg mt-5'>
                <h1>2. How does Context api works</h1>
                <p>React Context is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state <br />Another use case for React Context is using it as a global state mechanism, like we have in between TopNav and Profile. Updating the username in Profile immediately updates the shared state in UserProvider, providing a mechanism for global state management.</p>
            </div>
            <div className="p-5 shadow-lg mt-5">
                <h1>3. Write About useRef( )</h1>
                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. <br />These hooks are great and are widely used for managing the local states, but at the cost of being called too often and re-rendering the component every time, they are called to update the function which can sometimes affect the performance of a component. In this blog, we will explain how we can directly interact with DOM to make those native behaviors that we want our apps to have, without re-rendering or calling any API for that matter, with the help of a popular hook useRef.</p>
            </div>
        </div>
    );
};

export default Answers;