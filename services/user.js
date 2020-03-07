var connection = require('../db/connect');

postMethod = async (data) => {
    return new Promise((resolve, reject) => {
        connection.query(`insert into users values('${data.id}','${data.firstname}','${data.lastname}','${data.email}')`, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        });
    })
}

getAllDetails = async () =>{
    return new Promise((resolve,reject)=>{
        connection.query("select * from users",(error,result)=>{
            if(!error){
                resolve(result);
            } else{
                reject(error);
            }
        })
    });
}

getMethod = async (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`select * from users where id = '${id}'`, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    });
}

updateMethod = async (id, record, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`update users set ${record}='${data}' where id = '${id}'`, (err, result) => {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
            }
        })
    });
}

deleteMethod = async (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`delete from users where id = '${id}'`, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}

module.exports.postMethod = postMethod;
module.exports.getMethod = getMethod;
module.exports.updateMethod = updateMethod;
module.exports.deleteMethod = deleteMethod;
module.exports.getAllDetails = getAllDetails;