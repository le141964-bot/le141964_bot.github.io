// TASK 1: What is an API? 

//An API is a set of rules of protocols that allow one software
// application to com,unicate with another. APIS define how request should be made, 
// how data is stcutred and how response are returned. 

// API are import in modern development because
// -They allow different system to interact 
// They enable developer to access external data or service 
// -Promote reusability and modularity in application 
// -Engage intergration between frontend and backend system 


// 2. Anology 
// For example, take an walter in a restaurant as an API, the user tell the waiter 
// what the order is (request), the walter bring your order to the kitchen(server) 
// the kitchen prepare the food and give it to the walter (response)
// The waiter return to you with the food 


// TASK 2: HTTP METHODS 
// GET: Retreives data from a server. no modification of resources. 
// POST: Sends data to the server to create a new resource 
// PUT: Update or replace an exisitng resource 
// DELETE: Delete an existing resource 

// GET can be use in fetching a list of product from an online store 
// POST is like creating a new user account by submitting a registration form 
// PUT, like you updating a user profile information 
// DELETE, basically removing an item from a shopping cart


// TASK 5: COMPARING FETCH API AND XMLHTTPREQUEST
// The Fetch API and XMLHttpRequest are both used into making the HTTP request in JavaScript but they differ in design and usability. 

//Fetch API is a modern like promise based interface that provides a cleaner and more readable code. So it is easier to use with the modern 
// Javascript feature like Async, 
// but it doesn’t automatically treat HTTP error as failure and it has to be handled manually.

//XMLHttpRequest is the older method for making HTTP requests. 
// It helps support features like monitoring upload progress but uses a callback function which in turn makes the code difficult
// to read and harder to maintain, but it is supportive in older browsers where fetch might not work. 

//Which One To Use? 
//Fetch API is the best choice if someone would prefer a more modern, more cleaner and reusable code. 
//XHR if one were to support older browsers and need a special feature like an upload event.  
