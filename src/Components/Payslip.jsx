import React from "react";

function Payslip() {
  const data = {
    Sheet1: [
      {
        "Employee No": 1234,
        Name: "K.yashwanth",
        "Join Date": 44819,
        "Left?": 45184,
        DaysInMonth: 22,
        LOP: 1,
        "EffectiveWorking Days": 21,
        Basic: 11178,
        DaysinMonth: 22,
        HRA: 2234,
        MedicaAllowance: 1500,
        TransportAllowance: 1000,
        SpecialAllowance: 1000,
        otherEarnings: 1000,
        LeaveEnCash: 0,
        ProfTax: 2000,
        TotalDeduct: 2200,
        NetPay: 15000,
      },
    ],
  };

  const payslipData = data["Sheet1"][0];

  return (
    <div className="payslip">
      <h2>Payslip</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Employee No:</strong>
            </td>
            <td>{payslipData["Employee No"]}</td>
          </tr>
          <tr>
            <td>
              <strong>Name:</strong>
            </td>
            <td>{payslipData["Name"]}</td>
          </tr>
          <tr>
            <td>
              <strong>Join Date:</strong>
            </td>
            <td>{payslipData["Join Date"]}</td>
          </tr>
        </tbody>
      </table>
      <div className="tablebottom"></div>
      <table>
        <tbody>
          <tr>
            <td colSpan="2">
              <span>
                <b> Earnings </b>
              </span>
              <span>
                <b style="table-actual"> Actual</b>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Basic:</strong>
            </td>
            <td>{payslipData["Basic"]}</td>
          </tr>
          <tr>
            <td>
              <strong>HRA:</strong>
            </td>
            <td>{payslipData["HRA"]}</td>
          </tr>
          <tr>
            <td>
              <strong>Medical Allowance:</strong>
            </td>
            <td>{payslipData["MedicaAllowance"]}</td>
          </tr>
          <tr>
            <td>
              <strong>Transport Allowance:</strong>
            </td>
            <td>{payslipData["TransportAllowance"]}</td>
          </tr>
          <tr>
            <td>
              <strong>Special Allowance:</strong>
            </td>
            <td>{payslipData["SpecialAllowance"]}</td>
          </tr>
          <tr>
            <td>
              <strong>Other Earnings:</strong>
            </td>
            <td>{payslipData["otherEarnings"]}</td>
          </tr>
        </tbody>
      </table>
      <div className="tablededuction"></div>
      <table>
        <tbody>
          <tr>
            <td colSpan="2">
              <h3>Deductions</h3>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Leave Encashment:</strong>
            </td>
            <td>{payslipData["LeaveEnCash"]}</td>
          </tr>
          <tr>
            <td>
              <strong>Professional Tax:</strong>
            </td>
            <td>{payslipData["ProfTax"]}</td>
          </tr>
        </tbody>
      </table>

      <div className="totals">
        <p>
          <strong>Total Deductions:</strong> {payslipData["TotalDeduct"]}
        </p>
        <p>
          <strong>Net Pay:</strong> {payslipData["NetPay"]}
        </p>
      </div>
    </div>
  );
}

export default Payslip;
