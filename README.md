
    npm install uniq
    browserify main.js -o bundle.js

    docker run -d --rm -p 80:80 -v $(pwd):/usr/share/nginx/html:ro nginx