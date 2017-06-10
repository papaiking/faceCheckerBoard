# About module

This is one module in FaceChecker application at: [http://labsofthings.com/facechecker](http://labsofthings.com/facechecker)

-   Source repository at: [https://github.com/papaiking/faceChecker_dashboard](https://github.com/papaiking/faceChecker_dashboard)

With this module, we can:

-   Monitoring events happened in the system, in real-time
-   Manage device in the system: create, delete, view and update information, access token

### Platform
* Use template SB Admin v2.0 rewritten in AngularJS
* Angular JS, multi layer routing
* SocketIO

# Installation

1. Clone this project or Download that ZIP file

2. Make sure you have [bower](http://bower.io/), [grunt-cli](https://www.npmjs.com/package/grunt-cli) and  [npm](https://www.npmjs.org/) installed globally

3. On the command prompt run the following commands
- cd `project-directory`
- `npm install` - bower install is ran from the postinstall

# Configuration

Go to application sub-folder, and open configuration file: app/scripts/app.js

Set value for: `server_url` - This is service URL of FaceChecker Application server.

```
    .factory('AppConfig', function(){
        var event_rows_limit = 20;
        var device_rows_limit = 20;
        var server_url = 'http://118.170.51.3:9100';
        ...
    }
```

# How to use

* References to Installation and configuration session to know installation and configuration steps
* Run application: `npm start`
* Access at URL: `http://you_ip:9000/index.html`
* Run: `npm run dist` - a shortcut for `grunt serve:dist` to minify the files for deployment

# Screen short

Device management

<img alt="Device management" src="/img/device_management.png" style="border: 0px;">

Event management

<img alt="Event management" src="/img/event_management.png" style="border: 0px;">
