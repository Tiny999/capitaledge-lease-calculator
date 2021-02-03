document.querySelector('#leaseForm').addEventListener('submit', (e) => {
    // Get values 
    const leaseAmount = parseFloat(document.querySelector('#leaseAmount').value);
    const duration = parseFloat(document.querySelector('#duration').value);
    const percentage = parseFloat(document.querySelector('#percentage').value);

    const totalInterest = (leaseAmount * duration * percentage) / 100;
    const insurance = (5 / 100) * leaseAmount;
    const admin = (2 / 100) * leaseAmount;
    const vat = (7.5 / 100) * totalInterest;
    const upfrontRepayment = (5 / 100) * leaseAmount;
    const initialRepayment = insurance + admin + vat;
    const totalRepayment = leaseAmount + totalInterest + insurance + admin + vat;

    const monthlyRepayment = totalRepayment / duration;
    const weeklyRepayment = totalRepayment / (duration * 4)

    $('#leaseTables').show();

    // Create Table and fill values
    
    document.querySelector('#leaseTables #breakdown').innerHTML = `
        <tbody>
            <tr>
                <td colspan="4">Principal:</td>
                <td>${leaseAmount.toLocaleString(undefined,{'minimumFractionDigits':2, 'maximumFractionDigits':2})}</td>
            </tr>
            <tr>
                <td colspan="4">Total Interest:</td>
                <td>${totalInterest.toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':2})}</td>
            </tr>
            <tr>
                <td colspan="4">Insurance:</td>
                <td>${insurance.toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':2})}</td>
            </tr>
            <tr>
                <td colspan="4">Admin</td>
                <td>${admin.toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':2})}</td>
                </tr>
            <tr>
                <td colspan="4">VAT:</td>
                <td>${vat.toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':2})}</td>
                </tr>
            <tr>
                <td colspan="4">Initial Repayment:</td>
                <td>${initialRepayment.toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':2})}</td>
            </tr>
            <tr>
                <th colspan="4">Total Repayment:</th>
                <th>${totalRepayment.toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':2})}</th>
            </tr>
        </tbody>
    `;

    document.querySelector('#leaseTables #payments').innerHTML = `
        <tbody>
            <tr>
                <th colspan="4">Total Duration:</th>
                <th>${duration} Months (${duration * 4} Weeks)</th>
            </tr>
            <tr>
                <th colspan="4">Upfront Repayment:</th>
                <th>${upfrontRepayment.toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':2})}</th>
            </tr>
            <tr>
                <th colspan="4">Weekly Repayment:</th>
                <th>${weeklyRepayment.toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':2})}</th>
            <tr>
                <th colspan="4">Monthly Repayment:</th>
                <th>${monthlyRepayment.toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':2})}</th>
            </tr>
        </tbody>
        <tfoot>
            <tr>
            <td colspan="6">&copy; Capital Edge.</td>
            </tr>
      </tfoot>
    `;

    // Show Button
    document.querySelector('#getPdf').innerHTML = `
        <button class="btn btn-primary">Save PDF</button>
    `;


    e.preventDefault();
})

//Print on click
$('#getPdf').on('click', 'button', function(){
    window.print();
});