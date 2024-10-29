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
        w = float(request.form.get("weight"))
        h = float(request.form.get("height"))
        if w > 0 and h > 0:
            bmi = round(w / ((h / 100) ** 2), 3)
            return render_template("index.html", bmi=bmi)
        else:
            error = "Weight and height must be positive numbers."
            return render_template("index.html", error=error)
    except ValueError:
        error = "Please enter valid numeric values."
        return render_template("index.html", error=error)

if __name__ == "__main__":
    app.run(debug=True)
