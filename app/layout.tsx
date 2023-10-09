import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Open Spectrum",
	description:
		"Open Spectrum - A 3 week event to explore open source during Hacktoberfest!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${jetbrainsMono.className} dark container`}>
				{children}
			</body>
		</html>
	);
}
