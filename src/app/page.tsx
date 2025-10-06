"use client";

import HeroSection from "@/app/_components/hero-section";
import FeatureNavigation from "@/app/_components/feature-nav";
import NFTCollections from "@/app/_components/nft-collections";
import NFTDropsCalendar from "@/app/_components/nft-drop-calendar";

export default function Home() {
	return (
		<main className="mt-[72px] min-h-screen bg-[#121314] text-white">
			<HeroSection />
			<FeatureNavigation />
			<NFTCollections />
			<NFTDropsCalendar />
		</main>
	);
}
