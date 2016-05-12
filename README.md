# node-xdt
Node.js module to transform Web.config(XML) using xdt(Microsoft Xml Document Transformation)

```
npm install node-xdt --save

```

```
var xdt = require('node-xdt');

var options = {
	 src: '{path}/Web.config',
     dest: '{outpath}/Web.Release.config',
     transform:'{path}/Web.config'
};

xdt(options,function(error){
	//....
});
```