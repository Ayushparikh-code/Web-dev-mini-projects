from flask import Flask, render_template, request

# Declare the app
app = Flask(__name__)

# Start an app route for the main page
@app.route("/", methods=["GET", "POST"])  # Allow both GET and POST methods
def main():
    bmi = None  # Initialize bmi variable
    error = None  # Initialize error variable

    # Check if the request method is POST
    if request.method == "POST":
        try:
            w = float(request.form.get("weight"))
            h = float(request.form.get("height"))
            if w > 0 and h > 0:  # Check if weight and height are positive
                bmi = round(w / ((h / 100) ** 2), 3)
            else:
                error = "Weight and height must be positive values."
        except ValueError:  # Handle invalid input
            error = "Please enter valid numeric values."

    return render_template("index.html", bmi=bmi, error=error)  # Pass bmi and error to the template

if __name__ == "__main__":
    app.run(debug=True)
