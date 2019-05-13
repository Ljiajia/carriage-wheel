export default {
    // Support type as Object and Array
    'GET /api/users': { users: [1,2] },
  
    // Method like GET or POST can be omitted
    '/api/users/1': { id: 1 },
  
    // Support for custom functions, the API is the same as express@4
    'GET /api/users': (req, res) => { res.json({
        code:0,
        msg:'获取数据成功',
        data:[{
            name:'赵倩',
            age:18
        },{
            name:'雷佳',
            age:19
        },{
            name:'小全',
            age:16
        }]
    }); },
  };