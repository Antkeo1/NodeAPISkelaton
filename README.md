A simple Express server
Video source: https://www.youtube.com/watch?v=vjf774RKrLc

What is node js? 
Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices

It is an implementation of Javascript, that works outside of the browsers. When we say 'outside of the browsers', we mean in a terminal or a server. 

step 1.
npm init - created a package.json
    -  package.json = it contains all of the METADATA for your application (.i.e dependencies, scripts, name, version, license, keywords)
    - basically the governing rules
    
    https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/
    https://docs.npmjs.com/cli/init

step 2.
npm install nodemon 
    - nodemon is an alternative replacement for Node.
    - nodemon continuosly watches for changes in your application file
    - it automatically restarts your server when there are changes
    - In the past if you use node, you would have to manually restart the server    after making changes to your application

    https://nodemon.io/

step 3.
npm install express
    - Express.JS is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
    - Express is the default http/web framework for creating a web server for a nodeJs application. 
    - It provides or enables simplified creation of routing and middleware functions 

    Routing: a route is a combination of aa URL and a URI. It is a path/endpoint on the server which allows a programmer to define specific functionality.

    https://expressjs.com/

npm install mongoose 
    - It is a library that manages communication between your database objects and your application
    - It makes it easier to work with MongoDB
# Node_API_skelaton
# NodeAPISkelaton
# NodeAPISkelaton
