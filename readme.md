# Sample Isomorphic React-Redux To-Do List

### Do not use it as a boilerplate. This is intended to be used for reference only.


## A simple React-Redux Isomorphic To-Do List which will help you understand how to render a React-Redux app on server side.
  - You can add a new item.
  - Edit an item to change the task name.
  - Delete an item.
  - And finally, mark an item as complete when you are done with the task.

* The structure of **state** which will be used for this Todo app is:- 
  - ***items*** - The list of all the todo items.
  - ***id***    - Id number.
  - ***text***  - Text of each todo item.
  - ***editItem*** - This flag is used to open the model window to edit the todo item.
  - ***completed*** - This flag is used to mark an item as completed. Clicking on the item again will mark it as incomplete.

```
  items:[
      {id:number,
       text:string,
       editItem:boolean,
       completed:boolean
      }
  ]
```
  
* On Server side, the entry point is `Server.js`
  - Server uses a basic express server which will listen to port 4000.
  - Templating is done using ejs. The ejs file is `src/views/index.ejs`. Click on [ejs](http://ejs.co/) to learn more about it. 


* On Client side, the entry point is `client.js`

* Also included is React-Bootstrap to help you understand how to use bootstrap with react. 


    

