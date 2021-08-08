document.getElementById("btn").addEventListener("click", function() {
	var height_val = document.getElementById('height').value;
	var weight_val = document.getElementById('weight').value;
	var bmi = weight_val / (height_val / 100 * height_val / 100);
	var bmio = (bmi.toFixed(2));

	document.getElementById("result").innerHTML = "Your BMI is " + bmio;
});