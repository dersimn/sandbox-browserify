
    npm install
    browserify -r uniq -r jquery -r p-queue -r delay -r mqtt-smarthome-connect -o bundle.js
    rm -r node_modules
    rm package-lock.json

    docker run -d --rm -p 80:80 -v "$(pwd)":/usr/share/nginx/html:ro nginx
