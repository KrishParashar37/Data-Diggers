import { QRCodeCanvas } from "qrcode.react";

export default function ChildQRCode({ childId }) {
  return (
    <div className="qr-box">
      <QRCodeCanvas value={childId} size={160} />
      <p>{childId}</p>
    </div>
  );
}
