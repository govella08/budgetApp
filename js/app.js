const btn = document.querySelector("#incomeBtn");
const incomeForm = document.querySelector("#incomeForm");
const incomeLabel = document.querySelector("#income");

incomeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const incomeInput = document.querySelector("#incomeInput");
  const totalIncome = calculateIncome(incomeLabel.innerHTML, incomeInput.value);
  incomeLabel.textContent = totalIncome.toFixed(2);
  incomeInput.value = "";
});

function calculateIncome(income, incomeInput) {
  return parseFloat(income) + parseFloat(incomeInput);
}
