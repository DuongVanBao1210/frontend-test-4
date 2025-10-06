"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/section-title";
import { IMAGES } from "@/assets/images";
import { motion } from "framer-motion";
import { DROPS_CANLENDAR } from "@/utils/constants";

function NFTDropsCalendar() {
	const [api, setApi] = useState<CarouselApi>();

	return (
		<section className="mb-[80px] w-full bg-[#121415]">
			<div className="container mx-auto px-[20px] lg:max-w-[1128px]">
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<div>
						<div className="mb-2 flex items-center justify-between">
							<SectionTitle>NFT DROPS CALENDAR</SectionTitle>
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

						<Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
							<CarouselContent>
								{DROPS_CANLENDAR.map((drop, i) => (
									<CarouselItem key={i}>
										<motion.div className="relative h-[160px] w-full overflow-hidden rounded-xl bg-[#1b1d1f]">
											<Image
												src={drop.src}
												alt={drop.alt}
												fill
												sizes="(min-width:1024px) 66vw, 100vw"
												className="object-cover"
												priority={i === 0}
											/>
										</motion.div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</div>

					<div className="grid grid-cols-2 items-end gap-4">
						<div>
							<SectionTitle>HOT NFT</SectionTitle>
							<motion.div
								whileHover={{ scale: 1.02 }}
								className="relative mt-2 h-[160px] w-full overflow-hidden rounded-xl bg-[#1b1d1f]"
							>
								<Image src={IMAGES.drop} alt="HOT NFT" fill sizes="300px" className="object-cover" />
							</motion.div>
						</div>

						<div>
							<SectionTitle>PROMOTION</SectionTitle>
							<motion.div
								whileHover={{ scale: 1.02 }}
								className="relative mt-2 h-[160px] w-full overflow-hidden rounded-xl bg-[#1b1d1f]"
							>
								<Image src={IMAGES.drop1} alt="PROMOTION" fill sizes="300px" className="object-cover" />
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default NFTDropsCalendar;
