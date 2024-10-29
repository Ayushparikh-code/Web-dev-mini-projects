import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.client.j2se.MatrixToImageWriter;

import java.io.File;
import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

public class QRCodeGenerator {
    public static void main(String[] args) {
        String text = "Hello, QR Code!"; // Text to encode in QR code
        String filePath = "QRCode.png"; // Output file path
        int width = 300; // QR code image width
        int height = 300; // QR code image height

        // Create a map for encoding hints
        Map<EncodeHintType, ErrorCorrectionLevel> hints = new HashMap<>();
        hints.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.L);

        try {
            // Generate the QR code matrix
            QRCodeWriter qrCodeWriter = new QRCodeWriter();
            BitMatrix bitMatrix = qrCodeWriter.encode(text, BarcodeFormat.QR_CODE, width, height, hints);

            // Save the QR code image
            Path path = FileSystems.getDefault().getPath(filePath);
            MatrixToImageWriter.writeToPath(bitMatrix, "PNG", path);

            System.out.println("QR Code generated successfully: " + filePath);
        } catch (Exception e) {
            System.out.println("Error while generating QR Code: " + e.getMessage());
        }
    }
}
