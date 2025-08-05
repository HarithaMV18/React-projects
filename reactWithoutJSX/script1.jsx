const ele=React.createElement('ul',{id:"react-list",style:{backgroundColor:"blue"}},
    React.createElement('li',{className:"react-class"},"React is a JS library"),
    React.createElement('li',{className:"react-class"},"Reusable components"),
    React.createElement('li',{className:"react-class"},"Single Page Application"))
const rootEle=ReactDOM.createRoot(document.getElementById("root"))
rootEle.render(ele)
