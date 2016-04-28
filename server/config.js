/**
 * Created by arlingan on 4/21/2016.
 */

var dbModes = { local: 0, cloud: 1 };
var dbMode = dbModes.local;
var dbUrl;
if(dbMode === dbModes.local) {
    dbUrl = 'mongodb://localhost:27017/usermanagement'
} else {
    dbUrl = 'mongodb://mLabMongoDB-q:AFlQcrhrb3S4xaMfwTazn1pTDRoVsOLb_tKymSkjKKs-@ds064748.mlab.com:64748/mLabMongoDB-q' 
				//'mongodb://admin:admin@ds064748.mlab.com:64748/usermanagement'
}

module.exports.dbUrl = dbUrl;