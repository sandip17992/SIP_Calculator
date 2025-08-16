function calculateSIP() {
    // Get values from the input fields
    const monthlyInvestment = parseFloat(document.getElementById('monthly-investment').value);
    const expectedReturnRate = parseFloat(document.getElementById('expected-return').value);
    const timePeriodYears = parseFloat(document.getElementById('time-period').value);

    // Basic validation
    if (isNaN(monthlyInvestment) || monthlyInvestment <= 0 || isNaN(expectedReturnRate) || expectedReturnRate <= 0 || isNaN(timePeriodYears) || timePeriodYears <= 0) {
        alert("Please enter valid numbers greater than 0 in all fields.");
        return;
    }

    // Convert annual rate to monthly rate and years to months
    const monthlyRate = expectedReturnRate / 100 / 12;
    const totalMonths = timePeriodYears * 12;

    // SIP calculation formula for future value (Corrected)
    // Formula: M * {[(1 + i)^n - 1] / i} * (1+i)
    // M = Monthly Investment
    // i = Monthly Rate
    // n = Total Months
    const futureValue = monthlyInvestment * (Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate * (1 + monthlyRate);

    // Calculate total amount invested
    const investedAmount = monthlyInvestment * totalMonths;

    // Calculate wealth gained
    const wealthGained = futureValue - investedAmount;

    // Display the results with formatting
    document.getElementById('invested-amount').textContent = investedAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 });
    document.getElementById('corpus-value').textContent = futureValue.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 });
    document.getElementById('wealth-gained').textContent = wealthGained.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 });
}