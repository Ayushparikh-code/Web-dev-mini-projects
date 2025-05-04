#Python
#Install QR CODE LIBRARY 
#pip install qrcode

import qrcode

qr = qrcode.QRCode(
    version = 10,
    box_size = 10, #size of the qrcode box
    border = 5 #the white space border region
)

data = "https://github.com/" #any link can be given to generate as qrcode
qr.add_data(data)
qr.make(fit = True) #fits the size of the qr code according to the data 
img = qr.make_image(fill = "black", back_color = "white") #making qr code with black and white
img.save("test.png") #saving as an image
