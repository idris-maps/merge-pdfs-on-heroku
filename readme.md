1. Add env. variable `BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-apt`
2. `heroku buildpacks:add --index 1 heroku/nodejs --app merge-pdf-test`
3. `heroku config:set LD_LIBRARY_PATH=/app/bin --app merge-pdf-test`