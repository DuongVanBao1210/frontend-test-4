"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IMAGES_NFT } from "@/assets/images";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/section-title";

export default function NFTCollections() {
	const [api, setApi] = useState<CarouselApi>();

	return (
		<section className="py-[40px] lg:py-[80px]">
			<div className="container mx-auto px-[20px] lg:max-w-[1128px]">
				<div className="mb-4 flex items-center justify-between">
					<SectionTitle>NEW NFT COLLECTIONS</SectionTitle>
					<div className="flex gap-2">
						<Button
							variant="secondary"
							className="h-8 w-8 cursor-pointer rounded-[12px] border-[#3a3b3c] bg-[#2a2b2c] p-0 text-white hover:bg-[#3a3b3c] hover:text-white"
							onClick={() => api?.scrollPrev()}
						>
							<ChevronLeft className="h-4 w-4" />
						</Button>
						<Button
							variant="secondary"
							className="h-8 w-8 cursor-pointer rounded-[12px] border-[#3a3b3c] bg-[#2a2b2c] p-0 text-white hover:bg-[#3a3b3c] hover:text-white"
							onClick={() => api?.scrollNext()}
						>
							<ChevronRight className="h-4 w-4" />
						</Button>
					</div>
				</div>

				<Carousel setApi={setApi} opts={{ align: "start", loop: false, dragFree: true }} className="w-full">
					<CarouselContent className="-ml-4">
						{IMAGES_NFT.map((src, i) => (
							<CarouselItem key={i} className="basis-auto pl-4">
								<motion.div
									whileHover={{ scale: 1.02 }}
									className="h-[170px] w-[150px] overflow-hidden rounded-md bg-[#222]"
								>
									<Image
										src={src}
										alt={`collection-${i}`}
										width={150}
										height={170}
										className="h-full w-full object-cover"
									/>
								</motion.div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	);
}
