function doGet() {
  const data = getSheetData();
  const contentObj = { "data": data };
  return ContentService.createTextOutput(JSON.stringify(contentObj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSheetData() {
  const ss = SpreadsheetApp.openById("spreadsheet ID");
  const sheets = ss.getSheets();

  const monthNames = [
    "january", "february", "march", "april", "may", "june", 
    "july", "august", "september", "october", "november", "december"
  ];

  let allData = {};

  sheets.forEach(sheet => {
    const sheetName = sheet.getName().toLowerCase(); // Convert sheet name to lowercase
    console.log(sheet.getName());
    if (monthNames.includes(sheetName)) { // Check if it's a month (case insensitive)
      const range = sheet.getDataRange();
      allData[sheet.getName()] = range.getValues(); // Store data using the original sheet name
    }
  });

  return allData;
}
