import { Metadata } from "next";
import AppProvider from "./provider";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import MainLayout from "@/layout/main-layout";

export const metadata: Metadata = {
	title: "Z-TECH",
	description: "Premium NFT marketplace and platform",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={inter.className}>
				<AppProvider>
					<MainLayout>{children}</MainLayout>
				</AppProvider>
			</body>
		</html>
	);
}
