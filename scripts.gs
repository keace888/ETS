function doGet() {
  const data = getSheetData();
  const contentObj = {"data": data}
  return ContentService.createTextOutput(JSON.stringify(contentObj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSheetData() {
  const ss = SpreadsheetApp.openById("1_K-oGmWHoiDZXUw41GLtyr5jbG6Ko0QM2g1DcMIjM-U")
  Logger.log(ss);
  const dataSheet = ss.getSheetByName("JANUARY");
  Logger.log(dataSheet);
  const range = dataSheet.getDataRange()
  Logger.log(range);
  var data = range.getValues();
  Logger.log(data);
  return data;
}