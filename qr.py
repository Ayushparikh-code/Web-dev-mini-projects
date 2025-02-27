import qrcode

# Data to be encoded in the QR code
data = "https://www.yourwebsite.com"

# Create a QR code object
qr = qrcode.QRCode(
    version=1,  # Controls the size of the QR code (1 is the smallest)
    error_correction=qrcode.constants.ERROR_CORRECT_L,  # Error correction level
    box_size=10,  # Size of each box in the QR code
    border=4,  # Border thickness
)

# Add the data to the QR code object
qr.add_data(data)
qr.make(fit=True)

# Create an image of the QR code
img = qr.make_image(fill='black', back_color='white')

# Save the QR code as an image file
img.save("qrcode.png")

print("QR Code generated and saved as qrcode.png")
