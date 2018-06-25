
db.cities.find({})
//查找所有省份
db.cities.find({level: 1})
//查询广东省所有市级
db.cities.find({province: '44', level: 2})
//查找广东省深圳市所有区/县
db.cities.find({province: '44', city: '03', level: 3})