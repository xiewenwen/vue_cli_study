module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    //局部引入elementui
    ["es2015", { "modules": false }]
  ],
  //局部引入elementui
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
