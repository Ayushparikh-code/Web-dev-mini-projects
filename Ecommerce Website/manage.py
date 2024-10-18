from flask import Flask, render_template, request

# Declare the app
app = Flask(__name__)

# Start an app route
@app.route("/")
def main():
    return render_template("index.html")

# Route for BMI calculation result
@app.route("/bmi", methods=["POST"])
def calculate():
    try:
        # Retrieve weight and height from the form
        w = float(request.form.get("weight"))
        h = float(request.form.get("height"))

        # Check if weight and height are positive
        if w > 0 and h > 0:
            # Calculate BMI
            bmi = round(w / ((h / 100) ** 2), 3)
            return render_template("index.html", bmi=bmi)
        else:
            error = "Weight and height m
