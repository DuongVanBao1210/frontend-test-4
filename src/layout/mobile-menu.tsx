"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS } from "@/utils/constants/nav";
import useHash from "@/hooks/use-hash";

interface MobileMenuProps {
	isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
	const hash = useHash();

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="bg-opacity-50 fixed inset-0 z-40 bg-black lg:hidden"
					/>

					<motion.div
						initial={{ x: "-100%" }}
						animate={{ x: 0 }}
						exit={{ x: "-100%" }}
						transition={{ type: "tween", duration: 0.3 }}
						className="fixed top-[72px] left-0 z-50 h-full w-full bg-[#282828] lg:hidden"
					>
						<div className="space-y-4 p-4">
							{MENU_ITEMS.map((item) => (
								<a href={item.hash} key={item.hash}>
									<div
										className={`${item.hash == hash ? "text-primary rounded-[100px] bg-[#383A42]" : ""} hover:text-primary px-6 py-3 font-[500]`}
									>
										<span className="block text-center text-sm font-medium">{item.label}</span>
									</div>
								</a>
							))}
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
