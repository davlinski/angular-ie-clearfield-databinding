# angular-ie-clearfield-databinding
IE10 introduces a "clear field" button on inputs, but AngularJS 1.3 does not update the model when clicked. 
Use this module to get your data binding to work properly. The only requirement to make this module work
is to load the script and add the dependency in your own module. Since it's declaring a directive on ```input```
tags, it will apply itself when needed.

***Update***
Turns out that the oninput event was explicitly discarded by angular $sniffer for IE10 and IE11, creating the issue I'm addressing here: https://github.com/angular/angular.js/pull/9265

#How to use it

##Get the code
### Bower

```bash
bower install angular-ie-clearfield-databinding
```

### Manually

Check the content of /dist folder.

##Add the file... 

... ```anguar-ie-clearfield-databinding.js``` OR ```anguar-ie-clearfield-databinding.min.js``` in your loaded sources 
using whatever method your project requires. This module should be after ```angular.js``` script and before your own 
app module.

##Add the dependency

ex. 

```javascript
angular.module('myApp', ['ie-clearfield-databinding']);
```

#It's done !

#See it in action

In the source files, load ```src/demo.html``` in your IE browser
