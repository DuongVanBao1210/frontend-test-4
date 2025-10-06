"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/utils/constants";

export default function FeatureNavigation() {
	return (
		<section className="m-auto flex h-[92px] items-center justify-center border-b border-gray-800 bg-[#202124] lg:h-[120px]">
			<div className="container mx-auto px-4 lg:max-w-[1128px]">
				<div className="flex justify-center gap-3 lg:justify-between lg:gap-6">
					{FEATURES.map((feature, index) => (
						<motion.div
							key={feature.label}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="group flex cursor-pointer flex-col items-center space-y-3 lg:justify-between"
						>
							<div>
								<feature.icon />
							</div>
							<span className="text-center text-[10px] font-medium text-white uppercase lg:text-sm">
								{feature.label}
							</span>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
