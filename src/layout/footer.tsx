"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "@/assets/images";
import { FOOTER_SECTIONS } from "@/utils/constants/footer";

export default function Footer() {
	return (
		<footer className="border-t border-[#383A42] px-[20px] py-[40px]">
			<div className="container mx-auto px-4 lg:max-w-[1128px]">
				<div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{FOOTER_SECTIONS.map((section, index) => (
						<motion.div
							key={section.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="space-y-4"
						>
							<h3 className="text-[18px] font-[900] text-white uppercase italic">{section.title}</h3>
							<ul className="space-y-2">
								{section.links.map((link) => (
									<motion.li key={link} whileHover={{ x: 5 }}>
										<a
											href="#"
											className="hover:text-ztech-yellow text-xs text-gray-400 transition-colors lg:text-sm"
										>
											{link}
										</a>
									</motion.li>
								))}
							</ul>
							{section.title === "CONTACT US" && (
								<Image src={IMAGES.installApp} alt="Install App" width={200} />
							)}
						</motion.div>
					))}
				</div>
			</div>
		</footer>
	);
}
