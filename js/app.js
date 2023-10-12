var formCheck = document.querySelector(".form__check");
var metric = document.querySelector(".check__metric-input");
var imperial = document.querySelector(".check__imperial-input");
var metricData = document.querySelector(".item__metric-data");
var imperialData = document.querySelector(".item__imperial-data");
var variantHeightMetric = document.querySelector("#height-metric");
var variantWeightMetric = document.querySelector("#weight-metric");
var variantHeightImperial = document.querySelector(".height__imperial");
var variantWeightImperial = document.querySelector(".weight-imperial");
var calculator = document.querySelector(".item__calculator");
var calculatorMetric = document.querySelector(".item__calculator-metric");
var calculatorImperial = document.querySelector(".item__calculator-imperial");
var calculatorMetricResult = document.querySelector(".calculator-metric__result");
var calculatorImperialResult = document.querySelector(".calculator-imperial__result");

var height;
var weight;
var bmi;


imperialData.style.display = "none";
calculatorMetric.style.display = "none";
calculatorImperial.style.display = "none";

formCheck.addEventListener("change", () => {
  metricData.style.display = metric.checked ? "flex" : "none";
  imperialData.style.display = imperial.checked ? "flex" : "none";
  calculatorMetric.style.display = "none";
  calculatorImperial.style.display = "none";
  calculator.style.display = "flex";
});

window.onload = () => {
  var inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
      }
    });
  });
};

function updateCalculatorMeric() {
  if (variantHeightMetric.value === "" || variantWeightMetric.value === "") {
    calculator.style.display = "flex";
    calculatorMetric.style.display = "none";
  } else {
    height = variantHeightMetric.value;
    weight = variantWeightMetric.value;
    bmi = getBmiFromMetric(height, weight);
    calculatorMetricResult.innerText = bmi.toFixed(1);
    calculatorMetric.style.display = "flex";
    calculator.style.display = "none";
  }
}

variantHeightMetric.addEventListener("input", updateCalculatorMeric);
variantWeightMetric.addEventListener("input", updateCalculatorMeric);

function updateCalculatorImperial() {
  if (variantHeightImperial.value === "" || variantWeightImperial.value === "") {
    calculator.style.display = "flex";
    calculatorImperial.style.display = "none";
  } else {
    height = variantHeightImperial.value;
    weight = variantWeightImperial.value;
    bmi = getBmiFromImperial(height, weight);
    calculatorImperialResult.innerText = bmi.toFixed(1);
    calculatorImperial.style.display = "flex";
    calculator.style.display = "none";
  }
}

variantHeightImperial.addEventListener("input", updateCalculatorImperial);
variantWeightImperial.addEventListener("input", updateCalculatorImperial);

var getBmiFromMetric = (centimetres, kilograms) =>
  kilograms / Math.pow(centimetres / 100, 2);

var getBmiFromImperial = (inches, pounds) => (pounds / Math.pow(inches, 2)) * 703;


