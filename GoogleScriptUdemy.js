function test() {
    var obj = {
        "parameter": {
            "email": "xample@email.com"
            , "message": "test message"
            , "namex": "Laurence"
        }
    }
    Logger.log(doPost(obj));
}
 
function doPost(e) {
    var ss = SpreadsheetApp.openById("1jbPTCDQGqH9F7Wfdtmtp5Hhj-fJcU2i0Wyo8rq7YKV4");
    var sheet = ss.getSheetByName("messages");
    var rows = sheet.getDataRange().getValues();
    var headings = rows[0].map(String.toLowerCase);
    //[id, timestamp, name, email, message]
    Logger.log(headings);
    var holder = [];
    for (x in headings) {
        holder.push(e.parameter[headings[x]]);
    }
    Logger.log(holder);
    sheet.appendRow(holder);
    var now = new Date();
    //sheet.appendRow(['44',now,'test','test@email.com',500]);
    //var now = new Date();
    Logger.log('hello 1');
    return e.parameter;
    //    return ContentService.createTextOutput(JSON.stringify({
    //    'para' : e.parameter,
    //    'status' : 200,
    //    'value' : 'Hello World'
    //  }
    // ));
}