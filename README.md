# webpack4-react16-postcss7
Development enviroment whit webpack 4 , react 16 and postcss 7

## vscode (^1.27) intellisense path mapping
- install vscode "Path Intellisense" plugin
- add vscode config in ``./.vscode/settings.json`` file: 
``` 
{  
    ...
    "path-intellisense.mappings": { 
        "src": "${workspaceRoot}/src", 
    },
    ...
} 
```
- add a path alias in your webpack config file
```
module.exports = {
    ...
    resolve: {
        alias: {
            './src': path.resolve(__dirname, 'src')
        }  
    },   
    ...
}
```


## TODO LIST
- Add webpack config for production
- Add data by redux 