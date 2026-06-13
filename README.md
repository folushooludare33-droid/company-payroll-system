# Nigerian Payroll Automation System (Google Sheets + Apps Script)

## Overview
This project is a fully automated payroll system built using Google Sheets and Google Apps Script. It simulates real-world HR payroll operations including salary computation, tax calculation, payslip generation, and PDF export.

---

## Features

- Employee database management
- Automated payroll calculation
- Tax and pension computation
- Payslip generation per employee
- PDF export of payslips
- Payroll dashboard with charts

---

## System Architecture

Employee_DB → Apps Script Engine → Payroll_Calc → Payslip_Template → Dashboard

---

## Sheets Structure

### Employee_DB
Stores employee records:
- Employee_ID
- Name
- Salary
- Tax_Rate
- Bonus
- Deductions

### Payroll_Calc
Automatically populated computation sheet:
- Gross Pay
- Tax
- Pension
- Net Pay

### Payslip_Template
Printable employee payslip layout

### Dashboard
- Total Payroll Cost
- Total Tax
- Average Salary
- Charts (salary distribution, payroll vs tax)

---

## Automation Logic

All calculations are handled by Google Apps Script:
- Salary + Bonus = Gross Pay
- Tax applied dynamically
- Pension deducted
- Net Pay computed automatically

---

## Tools Used
- Google Sheets
- Google Apps Script (JavaScript)

---

## Key Skills Demonstrated
- Data modeling
- Payroll system design
- Automation scripting
- Financial computation logic
- Dashboard reporting

---

## Screenshots

<img width="1600" height="786" alt="API script" src="https://github.com/user-attachments/assets/f237b295-d70b-4ca0-af5e-a116a6cc1e52" />
<img width="1064" height="784" alt="dashboard" src="https://github.com/user-attachments/assets/c18d69e2-edeb-45e4-a6bc-4cc6aee8ac41" />
<img width="1039" height="774" alt="payslip template" src="https://github.com/user-attachments/assets/a3f2c06c-b0bd-4c22-a15a-f86df7d6d8c4" />
<img width="1039" height="776" alt="payroll calc" src="https://github.com/user-attachments/assets/93d8a1c2-d11e-4356-bc2c-5fdc40818cac" />
<img width="1034" height="777" alt="employee_DB" src="https://github.com/user-attachments/assets/55625ef4-f9ba-4baf-8603-a994680f89c8" />

## View file here
https://docs.google.com/spreadsheets/d/1qrdD4iUNZ9t5khKc0mMSgWgr4VyD_w-ondjA1dGHLPk/edit?usp=sharing
---

## Further Notes
Built as a portfolio project demonstrating HR payroll automation systems.

## Author
Dare
