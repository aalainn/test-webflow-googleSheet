function doPost(e) {
  // var lock = LockService.getScriptLock()
  // lock.tryLock(10000)
  
  // Logger.log('Hello post')

  // var sheetName = 'Anfragen_via_Formular'

  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success'}))

  // try {
  //   var doc = SpreadsheetApp.openById('1PBcdmsADWXufwA4E6ZYqIkF4zI_3gE4E8bCokzxdd-4')
  //   var sheet = doc.getSheetByName(sheetName)

  //   var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
  //   Logger.log(headers)
  //   var nextRow = sheet.getLastRow() + 1

  //   /*var newRow = headers.map(function (header) {
  //     return header === 'Data' ? new Date() : e.parameter[header]
  //     });*/
  //     // var newRow = ['sdfffff', 'sdfsdf']
  //     var newRow = []
  //     var newRow = [e.parameter.fname, e.parameter.lname]

      

  //   sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);
  //   return ContentService
  //     .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
  //     .setMimeType(ContentService.MimeType.JSON)
  // }
  // catch (e) {
  //   return ContentService
  //     .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
  //     .setMimeType(ContentService.MimeType.JSON)
  // }
  // finally {
  //   lock.releaseLock()
  // }
  
}