function doPost(e) {
  console.log('doPost started...')
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  

  return ContentService
          .createTextOutput(JSON.stringify({ 'result': 'success', 'param' : e.parameter}))
          .setMimeType(ContentService.MimeType.JSON)

  // var sheetName = 'Anfragen_via_Formular'

  // try {
  //   Logger.log('Try started...')

  //   var doc = SpreadsheetApp.openById('1PBcdmsADWXufwA4E6ZYqIkF4zI_3gE4E8bCokzxdd-4')
  //   var sheet = doc.getSheetByName(sheetName)

  //   var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
  //   var nextRow = sheet.getLastRow() + 1

  //   /*var newRow = headers.map(function (header) {
  //     return header === 'Data' ? new Date() : e.parameter[header]
  //     });*/
  //     // var newRow = ['sdfffff', 'sdfsdf']
  //     // var newRow = []
  //     var newRow = [e.parameter.fname, e.parameter.lname]

      

  //   sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);
  //   return ContentService
  //     .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
  //     .setMimeType(ContentService.MimeType.JSON)
  // }
  // catch (e) {
  //   Logger.log('catch started...')
  //   return ContentService
  //     .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
  //     .setMimeType(ContentService.MimeType.JSON)
  // }
  // finally {
  //   Logger.log('finally started...')
  //   lock.releaseLock()
  // }
  
}