const { getDb, ObjectId } = require('../models/connection');
const foodModel = {
    insertOne: (menu) => { 
        return new Promise ((resolve, reject) => {
            const db = getDb();
            db.collection('menus').insertOne({ menu: menu }, (error, result) => {
                if(error){
                    reject(error);
                }
                resolve(result);
            })
          })
    },
    getMany: () => {
        return new Promise ((resolve, reject) => {
            const db = getDb();
            db.collection('menus').find({}).toArray((error, result) => {
                if(error){
                    reject(error);
                }
                resolve(result);
            })
          })
    },
    getOne: id => {
        return new Promise ((resolve, reject) => {
            const db = getDb();
            db.collection('menus').findOne({_id: ObjectId(id)}, (error, result) => {
                if(error){
                    reject(error);
                }
                resolve(result);
            })
          })
    }
}


module.exports = foodModel;