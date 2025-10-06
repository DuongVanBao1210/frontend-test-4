"use client";
import Footer from "./footer";
import Header from "./header";
import MobileMenu from "./mobile-menu";
import { useState } from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
	return (
		<div className="bg-[#121314]">
			<Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} isOpen={isMobileMenuOpen} />
			<MobileMenu isOpen={isMobileMenuOpen} />
			{children}
			<Footer />
		</div>
	);
}

export default MainLayout;
