# Payroll Automation System (Google Sheets + Apps Script)

A fully automated payroll management system built with Google Sheets and Google Apps Script. The project simulates real-world HR and payroll operations by automating salary calculations, tax and pension deductions, payslip generation, PDF exports, and executive payroll reporting through an interactive dashboard.

This project demonstrates how Google Workspace can be used to build lightweight business applications that streamline payroll processing and eliminate repetitive manual calculations.

---

## Features

### Employee Management

* Centralized employee database
* Employee record management
* Salary information storage
* Bonus and deduction tracking
* Configurable tax rates
* Structured payroll data organization

### Payroll Processing

* Automated gross salary calculation
* Dynamic tax computation
* Pension deduction calculation
* Bonus integration
* Additional deductions handling
* Automatic net salary calculation

### Payslip Generation

* Individual employee payslips
* Professional payslip template
* Automated population of employee information
* PDF export for each employee
* Print-ready payroll documents

### Dashboard & Reporting

* Total Payroll Cost
* Total Tax Collected
* Total Pension Contributions
* Average Employee Salary
* Salary Distribution Charts
* Payroll Cost Analysis
* Executive Summary Dashboard

---

## System Architecture

The payroll workflow follows a structured automation pipeline:

```text
Employee_DB
      │
      ▼
Apps Script Engine
      │
      ▼
Payroll Calculations
      │
      ▼
Payslip Generator
      │
      ▼
PDF Export
      │
      ▼
Management Dashboard
```

---

## Workbook Structure

### Employee_DB

Stores employee information including:

* Employee ID
* Employee Name
* Department
* Base Salary
* Tax Rate
* Bonus
* Pension Rate
* Additional Deductions

### Payroll_Calc

Automatically calculates:

* Gross Pay
* Income Tax
* Pension
* Total Deductions
* Net Pay

### Payslip_Template

Generates standardized employee payslips containing:

* Employee Details
* Earnings
* Deductions
* Net Salary
* Payment Summary

### Dashboard

Provides a management overview including:

* Total Payroll Cost
* Average Salary
* Total Tax Paid
* Total Pension Contributions
* Salary Distribution
* Payroll Summary Charts
* Key Payroll KPIs

---

## Automation Workflow

Google Apps Script automates the complete payroll process by:

* Reading employee records
* Calculating gross salary
* Applying tax rates dynamically
* Computing pension deductions
* Processing bonuses
* Applying additional deductions
* Calculating final net salary
* Populating payslip templates
* Exporting payslips as PDF files
* Updating dashboard metrics automatically

---

## Technologies Used

* Google Sheets
* Google Apps Script (JavaScript)
* Spreadsheet Automation
* PDF Generation
* Formula-Based Calculations
* Dashboard Reporting

---

## Google Apps Script Concepts Demonstrated

* SpreadsheetApp
* Sheet Manipulation
* Range Operations
* Loops and Iteration
* Functions
* Conditional Logic
* PDF Export Automation
* Trigger-Based Automation
* Data Processing
* Report Generation

---

## Project Structure

```text
Payroll-Automation-System/
│
├── Payroll_Automation_System.xlsx
│
├── apps_script/
│   ├── Code.gs
│   ├── Payroll.gs
│   ├── PayslipGenerator.gs
│   └── Utilities.gs
│
├── screenshots/
│   ├── employee_database.png
│   ├── payroll_calculations.png
│   ├── dashboard.png
│   ├── payslip.png
│   └── pdf_export.png
│
└── README.md
```

---

## How to Use

1. Open the payroll workbook in Google Sheets.
2. Populate the **Employee_DB** sheet with employee information.
3. Run the Google Apps Script payroll function.
4. Allow the script to calculate payroll automatically.
5. Generate employee payslips.
6. Export payslips as PDF files.
7. Review payroll summaries on the Dashboard.

---

## Reports Generated

The system automatically produces:

* Employee Payroll Report
* Gross Salary Report
* Net Salary Report
* Tax Summary
* Pension Summary
* Payroll Cost Analysis
* Individual Payslips
* Executive Payroll Dashboard

---

## Skills Demonstrated

* Google Workspace Automation
* Google Apps Script Development
* JavaScript Programming
* Payroll System Design
* Financial Calculations
* HR Process Automation
* Spreadsheet Engineering
* Dashboard Development
* PDF Report Generation
* Business Process Automation
* Data Modeling
* Reporting Automation

---

## Screenshots

Store screenshots inside the `screenshots/` folder.

### Employee Database

```text
screenshots/employee_database.png
```

### Payroll Calculations

```text
screenshots/payroll_calculations.png
```

### Dashboard

```text
screenshots/dashboard.png
```

### Generated Payslip

```text
screenshots/payslip.png
```

### PDF Export

```text
screenshots/pdf_export.png
```

---

## Business Value

Payroll processing is one of the most repetitive and error-prone administrative tasks within an organization. This project automates salary calculations, tax deductions, pension contributions, payslip creation, and reporting through Google Apps Script, significantly reducing manual effort while improving accuracy and consistency. It demonstrates how cloud-based spreadsheet automation can replace manual payroll workflows without requiring dedicated payroll software.

---

## Future Improvements

* Email payslips automatically to employees
* Leave and attendance integration
* Overtime calculation
* Multi-currency payroll support
* Department-wise payroll reporting
* Employee self-service portal
* Automated monthly payroll scheduling
* Bank transfer file generation
* Approval workflow
* Cloud database integration

---

## Author

Developed as a portfolio project demonstrating Google Sheets automation, Google Apps Script development, payroll system design, financial computation, dashboard reporting, and business process automation.


## Screenshots

<img width="1600" height="786" alt="API script" src="https://github.com/user-attachments/assets/f237b295-d70b-4ca0-af5e-a116a6cc1e52" />
<img width="1064" height="784" alt="dashboard" src="https://github.com/user-attachments/assets/c18d69e2-edeb-45e4-a6bc-4cc6aee8ac41" />
<img width="1039" height="774" alt="payslip template" src="https://github.com/user-attachments/assets/a3f2c06c-b0bd-4c22-a15a-f86df7d6d8c4" />
<img width="1039" height="776" alt="payroll calc" src="https://github.com/user-attachments/assets/93d8a1c2-d11e-4356-bc2c-5fdc40818cac" />
<img width="1034" height="777" alt="employee_DB" src="https://github.com/user-attachments/assets/55625ef4-f9ba-4baf-8603-a994680f89c8" />

## View file here
https://docs.google.com/spreadsheets/d/1qrdD4iUNZ9t5khKc0mMSgWgr4VyD_w-ondjA1dGHLPk/edit?usp=sharing
---
