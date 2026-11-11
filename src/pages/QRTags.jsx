import MainLayout from "../layouts/MainLayout";
import { QRCodeCanvas } from "qrcode.react";

function QRTags() {
  return (
    <MainLayout>
      <div className="bg-white p-8 rounded-2xl shadow-sm inline-block">
        <h1 className="text-3xl font-bold mb-6">
          QR Ownership Tag
        </h1>

        <QRCodeCanvas
          value="QR-LAPTOP-001"
          size={200}
        />
      </div>
    </MainLayout>
  );
}

export default QRTags;