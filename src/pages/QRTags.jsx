import MainLayout from "../layouts/MainLayout";
import { QRCodeCanvas } from "qrcode.react";
import { FaQrcode, FaDownload } from "react-icons/fa";

function QRTags() {
  const qrValue =
    "Owner: James Ivan | Item: HP EliteBook | Student ID: SEB12345";

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-3xl p-8 shadow-xl">
          <div className="flex items-center gap-4">
            <FaQrcode className="text-5xl" />

            <div>
              <h1 className="text-4xl font-bold">
                QR Ownership Tags
              </h1>

              <p className="mt-2 text-cyan-100">
                Generate QR codes for your valuables and recover them faster.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Generator */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6">
              Generate QR Tag
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Item Name"
                className="w-full border rounded-xl p-3"
              />

              <input
                type="text"
                placeholder="Owner Name"
                className="w-full border rounded-xl p-3"
              />

              <input
                type="text"
                placeholder="Student ID"
                className="w-full border rounded-xl p-3"
              />

              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
              >
                Generate QR
              </button>

            </form>

          </div>

          {/* QR Preview */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center">

            <h2 className="text-2xl font-bold mb-6">
              QR Preview
            </h2>

            <div className="bg-white p-4 rounded-2xl border">
              <QRCodeCanvas
                value={qrValue}
                size={250}
              />
            </div>

            <p className="mt-4 text-slate-500 text-center">
              Scan to identify the owner of this item.
            </p>

            <button className="mt-6 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl">
              <FaDownload />
              Download QR
            </button>

          </div>

        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-lg">
              Faster Recovery
            </h3>

            <p className="text-slate-500 mt-2">
              Anyone who finds your item can quickly identify you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-lg">
              Easy Printing
            </h3>

            <p className="text-slate-500 mt-2">
              Print and attach QR stickers to personal belongings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-lg">
              Secure Ownership
            </h3>

            <p className="text-slate-500 mt-2">
              Verify ownership before returning valuable items.
            </p>
          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default QRTags;