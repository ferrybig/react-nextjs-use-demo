import QRCode from "qrcode";
import { useMemo, use } from "react";
const generateQRCode = async () => {
	return await QRCode.toDataURL(
		"https://www.reddit.com/r/reactjs/comments/1hpuekv"
	);
};
export default function ServerTest() {
	const generateQRCodePromise = useMemo(() => generateQRCode(), []);

	const qrCode = use(generateQRCodePromise);

	return (
		<div>
			Server test:
			<img className="w-80 object-cover bg-transparent" src={qrCode} />
		</div>
	);
}
