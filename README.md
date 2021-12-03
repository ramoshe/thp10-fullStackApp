# For Changes to the Live App
 1. Make any necessary edits/updates to the files in this `forghpgs` branch
 2. In the terminal, use `npm run deploy` (this will create the `build` folder and copy its files to the `gh-pages` branch)
 3. Add the **Redirect Script** code below to the `index.html` file, just before the closing `</head>` tag
 4. Create a new file called `404.html` and paste in the code below
 5. Now the app should load properly at https://g.ramoshe.com/thp10-fullStackApp

 ## Redirect Script
 ```
 <script type="text/javascript">
   (function(l) {
     if (l.search[1] === '/' ) {
       var decoded = l.search.slice(1).split('&').map(function(s) { 
         return s.replace(/~and~/g, '&')
       }).join('?');
       window.history.replaceState(null, null,
           l.pathname.slice(0, -1) + decoded + l.hash
       );
     }
   }(window.location))
 </script>
 ```

 ## 404 File
 ```
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
     <title>Skills Academy Courses</title>
     <script type="text/javascript">
       var pathSegmentsToKeep = 1;
       var l = window.location;
       l.replace(
         l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
         l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
         l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
         (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
         l.hash
       );
     </script>
   </head>
   <body>
   </body>
 </html>
 ```
