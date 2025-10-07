"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { IMAGES_NFT } from "@/assets/images";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/section-title";
import { on } from "events";

export default function NFTCollections() {
	const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  

	return (
		<section className="py-[40px] lg:py-[80px]">
			<div className="container mx-auto px-[20px] lg:max-w-[1128px]">
				<div className="mb-4 flex items-center justify-between">
					<SectionTitle>NEW NFT COLLECTIONS</SectionTitle>
					<div className="flex gap-2">
						<Button
							variant="secondary"
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
              className={`h-8 w-8 rounded-[12px] border-[#3a3b3c] p-0 text-white transition-colors ${canScrollPrev ? "cursor-pointer bg-[#2a2b2c] hover:bg-[#3a3b3c]" : "cursor-not-allowed bg-[#1a1a1a] opacity-50"} `}
						>
							<ChevronLeft className="h-4 w-4" />
						</Button>
						<Button
							variant="secondary"
              onClick={() => api?.scrollNext()}
              disabled={!canScrollNext}
							className={`h-8 w-8 rounded-[12px] border-[#3a3b3c] p-0 text-white transition-colors ${canScrollNext ? "cursor-pointer bg-[#2a2b2c] hover:bg-[#3a3b3c]" : "cursor-not-allowed bg-[#1a1a1a] opacity-50"}`}
							
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
