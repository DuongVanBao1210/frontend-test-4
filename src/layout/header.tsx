"use client";

import { motion } from "framer-motion";
import { HiMenuAlt2 } from "react-icons/hi";
import AuthGroupButton from "@/components/ui/button/auth-group-button";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { IoClose } from "react-icons/io5";
import { MENU_ITEMS } from "@/utils/constants/nav";
import useHash from "@/hooks/use-hash";

interface HeaderProps {
	onMenuToggle: () => void;
	isOpen: boolean;
}

export default function Header({ onMenuToggle, isOpen }: HeaderProps) {
	const isMobile = useIsMobile();
	const hash = useHash();

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="fixed top-0 right-0 left-0 z-99 bg-[#121314]"
		>
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						{isMobile && (
							<button
								onClick={onMenuToggle}
								className="hover:text-ztech-yellow text-white transition-colors lg:hidden"
								aria-label="Open menu"
							>
								{isOpen ? <IoClose size={24} /> : <HiMenuAlt2 size={24} />}
							</button>
						)}

						<div className="">
							<Image src="/logo.png" alt="Logo" width={71} height={39} />
						</div>

						<nav className="ml-6 hidden items-center space-x-8 lg:flex">
							{MENU_ITEMS.map((item) => (
								<motion.a
									key={item.hash}
									href={item.hash}
									className={`text-sm font-medium uppercase transition-colors ${
										item.hash === hash
											? "text-primary flex h-10 items-center rounded-[100px] bg-[#383A42] px-4"
											: "hover:text-primary"
									}`}
									whileHover={{ y: -2 }}
								>
									{item.label}
								</motion.a>
							))}
						</nav>
					</div>

					<AuthGroupButton />
				</div>
			</div>
		</motion.header>
	);
}
