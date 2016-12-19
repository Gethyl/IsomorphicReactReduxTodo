# Simple Isomorphic React-Redux To-Do List
*** 
> Please use this example to learn/understand and not as a boilerplate.
***

### A simple React-Redux Isomorphic To-Do List which will help you understand how to render a React-Redux app on server side.
  - You can add a new item.
  - Edit an item to change the task name.
  - Delete an item.
  - And finally, mark an item as complete when you are done with the task.

#### What is an isomorphic app?
    As per the definition [here](http://isomorphic.net/javascript)
> JavaScript applications which run both client-side and server-side. Isomorphic JavaScript frameworks are the next step in the evolution of JavaScript frameworks. These new libraries and frameworks are solving the problems associated with traditional JavaScript frameworks.

The two distinct advantages going the isomorphic way is
1. SEO friendly.
2. Also with the current trend our apps do lot stuff in the client side. Due to this, usually you will notice during the initial render there is a delay. To avoid this we feed the initial load from the server thereby making it really fast.


#### How everything is tied up to build the isomorphic app?
1. We create a simple express server in `server.js` which will be the entry point for the server.
2. When the page loads, we check if the url matches with the path from the react router and then
  * We create the redux store with `allReducers` and the initial state, `initialState`

```javascript
 store = createStore(allReducers,initialState)
 ```     

>  The structure of **state** which will be used for this Todo app is:- 
>   - ***items*** - The list of all the todo items.
>   - ***id***    - Id number.
>   - ***text***  - Text of each todo item.
>   - ***editItem*** - This flag is used to open the model window to edit the todo item.
>   - ***completed*** - This flag is used to mark an item as completed. Clicking on the item again will mark it as incomplete.

>  items:[
      {id:number,
       text:string,
       editItem:boolean,
       completed:boolean
      }
  ]

3. The server cannot render React items directly therefore **reactDOMServer** provides a function called `renderToString` which will render the react element and return and HTML string. 

```babel
markup = renderToString(
                <Provider store={store}>
                   { <RouterContext {...renderProps} />}
                </Provider>
```

We provide the redux store as `Provider` just as we would do in client. But instead of using `Router` we using `RouterContext` for server and pass the props that we receive from `match` 

4. Finally we send the `index.ejs` file along with react rendered string and the initial state as response to the initial request made on the page.

```javascript
return res.render('index', { markup: markup, initialState: initialState });
```

5. We need to store the inital state in global/window variable so that we pass it to the client so that it can create the store with the same initial state. This is done by adding the below code in the `index.ejs` file within ***script*** tag.

```javascript
window.__REDUX_STATE__ = JSON.parse('<%- JSON.stringify(initialState) %>');
```

6. On receiving the response from the server, react checks if the server rendered HTML file is different from client. If it notices it is different, then client gets rendered and due to this you lose the advantage of server rendering as the client renders again. 

7. Client entry point is `client.js`
 
* Also included is React-Bootstrap to help you understand how to use bootstrap with react. 


    

