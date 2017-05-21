# Update information on 28 Aug 2016
------------------------------------
1. Optimized code for face check list and flaming list feature
2. Make face check event can be updated in real-time, using web socket. Library here is: socket.io client, reference document: http://socket.io/
3. Modal box in face check list page allows user to compare representative image for recognized person ID and detected image from video.


# Update information on 25 Aug 2016

There are 3 main features finished in this project:

1. Flaming events: list all flames occurred
2. Face check in / out
3. Face image comparison: to know if they are from same person or different people
4. Report: using Apache Zeppelin


## This is Survillance Board Console for IoT Home security Operators

## How does it do?
* Call service from Data service project: [https://bitbucket.org/homesecurity/dataservice](Link URL)
* Call service from Apache Zeppelin though HTML iframe: to make report charts
* Call face services from [https://bitbucket.org/homesecurity/faceservices](Link URL) for some face related services: entry control, compare faces

## How to use

* References to Installation session to know installation steps
* Run application: `npm start`
* Access at URL: http://192.168.1.111:9000/index.html 


## References

* [https://youtu.be/90taSxuH6Io](Link URL)

## Platform
* Use template SB Admin v2.0 rewritten in AngularJS
* Angular JS, multi layer routing


## Installation
1. Clone this project or Download that ZIP file
2. Make sure you have [bower](http://bower.io/), [grunt-cli](https://www.npmjs.com/package/grunt-cli) and  [npm](https://www.npmjs.org/) installed globally
3. On the command prompt run the following commands
- cd `project-directory`
- `npm install` - bower install is ran from the postinstall
- `npm start` - a shortcut for `grunt serve`
- `npm run dist` - a shortcut for `grunt serve:dist` to minify the files for deployment