from flask import Flask, render_template, request

# declare the app
app = Flask(__name__)

# start an app route
@app.route("/")
def main():
    return render_template("index.html")


# route for bmi calculation result
@app.route("/bmi", methods=["GET", "POST"])
def calculate():
    try:
        w = float(request.form.get("weight"))
        h = float(request.form.get("height"))
        if w and h:
            bmi = round(w / ((h / 100) ** 2), 3)
            return render_template("index.html", bmi=bmi)
    except ValueError as error:
        error = "Please enter all the values"
        return render_template("index.html", error=error)


if __name__ == "__main__":
    app.run(debug=True)
