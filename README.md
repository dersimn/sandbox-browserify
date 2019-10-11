
    npm install
    grunt
    grunt clean

    docker run -d --rm -p 80:80 -v "$(pwd)":/usr/share/nginx/html:ro nginx
