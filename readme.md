1. Add build pack

`heroku buildpacks:add https://github.com/fxtentacle/heroku-pdftk-buildpack.git -a <app>`

2. Add `Procfile`

```
web: node index.js
```
