/**
 * Created by arlingan on 4/21/2016.
 */

var dbModes = { local: 0, cloud: 1 };
var dbMode = dbModes.local;
var dbUrl;
if(dbMode === dbModes.local) {
    dbUrl = 'mongodb://localhost:27017/usermanagement'
} else {
    dbUrl = 'mongodb://admin:admin@ds064748.mlab.com:64748/usermanagement'
}

module.exports.dbUrl = dbUrl;