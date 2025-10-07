"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { SLIDES } from "@/utils/constants";

export default function HeroSlideshow() {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	const plugin = useRef(
		Autoplay({
			delay: 5000,
			stopOnInteraction: false,
			stopOnMouseEnter: true,
		}),
	);

	useEffect(() => {
		if (!api) return;
		setCurrent(api.selectedScrollSnap());
		api.on("select", () => setCurrent(api.selectedScrollSnap()));
	}, [api]);

	return (
		<section className="relative w-full bg-[#0e0f12]">
			<Carousel
				setApi={setApi}
				plugins={[plugin.current]}
				opts={{ loop: true, align: "start" }}
				className="w-full"
			>
				<CarouselContent>
					{SLIDES.map((slide, i) => (
						<CarouselItem key={i} className="basis-full">
							<div className="relative h-[360px] overflow-hidden md:h-[460px] lg:h-[520px]">
								<Image 
                  src={
										window.innerWidth < 768
											? slide.srcMobile ?? slide.src ?? ""
											: slide.src ?? slide.srcMobile ?? ""
									}
                  alt={slide.alt} fill priority={i === 0}  />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>

			<div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
				{SLIDES.map((_, i) => (
					<span
						key={i}
						className={`h-1.5 rounded-full transition-colors duration-300 ${
							i === current ? "w-9 bg-[#FFC700]" : "w-9 bg-white/30"
						}`}
					/>
				))}
			</div>
		</section>
	);
}
