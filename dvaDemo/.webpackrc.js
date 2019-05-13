const path=require('path');
export default {
	"env": {
	  "development": {
			"extraBabelPlugins": [
				["import", { "style": "css", "libraryName": "antd-mobile" , "libraryDirectory": "lib"}]
	    ]
	  }
    },
    alias:{
        '@':path.resolve(__dirname,'src')
    }
}