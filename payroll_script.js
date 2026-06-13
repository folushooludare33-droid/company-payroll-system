function runPayroll() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const empSheet = ss.getSheetByName("Employee_DB");
  const paySheet = ss.getSheetByName("Payroll_Calc");

  const data = empSheet.getDataRange().getValues();

  paySheet.clearContents();

  paySheet.appendRow([
    "Employee_ID",
    "Name",
    "Gross_Pay",
    "Tax",
    "Pension",
    "Deductions",
    "Net_Pay"
  ]);

  for (let i = 1; i < data.length; i++) {

    const id = data[i][0];
    const name = data[i][1];
    const salary = data[i][2];
    const bonus = data[i][4];
    const deductions = data[i][5];

    const gross = salary + bonus;
    const tax = gross * 0.18;
    const pension = gross * 0.08;
    const net = gross - tax - pension - deductions;

    paySheet.appendRow([
      id,
      name,
      gross,
      tax,
      pension,
      deductions,
      net
    ]);

  }

}
function generatePayslip() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const employeeSheet = ss.getSheetByName("Employee_DB");
  const payrollSheet = ss.getSheetByName("Payroll_Calc");
  const payslipSheet = ss.getSheetByName("Payslip_Template");

  const employeeRow = payslipSheet.getRange("E2").getValue();

  payslipSheet.getRange("B4").setValue(employeeSheet.getRange(employeeRow,2).getValue());

  payslipSheet.getRange("B5").setValue(employeeSheet.getRange(employeeRow,1).getValue());

  payslipSheet.getRange("B6").setValue(employeeSheet.getRange(employeeRow,3).getValue());

  payslipSheet.getRange("B7").setValue(employeeSheet.getRange(employeeRow,5).getValue());

  payslipSheet.getRange("B8").setValue(employeeSheet.getRange(employeeRow,6).getValue());

  payslipSheet.getRange("B9").setValue(payrollSheet.getRange(employeeRow,4).getValue());

  payslipSheet.getRange("B10").setValue(payrollSheet.getRange(employeeRow,7).getValue());

}
function exportPayslipPDF() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const sheet = ss.getSheetByName("Payslip_Template");

  const spreadsheetId = ss.getId();
  const gid = sheet.getSheetId();

  const url =
    "https://docs.google.com/spreadsheets/d/" +
    spreadsheetId +
    "/export?format=pdf&gid=" +
    gid;

  const token = ScriptApp.getOAuthToken();

  const response = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: "Bearer " + token
    }
  });

  DriveApp.createFile(response.getBlob().setName("Payslip.pdf"));

}