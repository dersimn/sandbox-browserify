
    npm install
    grunt
    grunt clean

    docker run -d --rm -p 80:80 -v "$(pwd)":/usr/share/nginx/html:ro nginx

## Why is this good?

Take a look at `index.js`: It looks like a NodeJS script, with (almost) all of the benefits of a NodeJS script. You can use `require()` in your 'productive' file for modules that were exported by Grunt.

The real benefit while developing is that you can edit `index.js` directly and see the results immediately after a browser refresh. You can debug a non-minified, non-concated version of your script and need to run Grunt only after adding/removing a used modules. 