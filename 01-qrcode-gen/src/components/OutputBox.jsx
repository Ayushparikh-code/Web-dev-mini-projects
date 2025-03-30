import React from "react";

function OutputBox({ qrCode }) {
  return (
    <div className="flex flex-col items-center gap-10">
      <img src={qrCode} alt="Generated QR Code" />
      <a href={qrCode} download="QRCode">
        <button className="h-9 w-24 text-lg text-white bg-green-600 shadow-md hover:bg-green-700 active:shadow-none">
          Download
        </button>
      </a>
    </div>
  );
}

export default OutputBox;
