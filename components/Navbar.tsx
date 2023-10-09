import Link from "next/link";

import { buttonVariants } from "./ui/button";
import { Github, Twitter } from "lucide-react";

const Navbar = () => {
	return (
		<div className="flex mt-6 justify-between items-center">
			<div className="grow text-2xl font-bold text-primary">
				Open Spectrum
			</div>
			<ul className="text-sm grow hidden lg:flex gap-6 justify-center">
				<li>
					<Link
						href="/"
						className="hover:text-secondary-2 transition-colors"
					>
						<span className="text-secondary-2">01.</span> About
					</Link>
				</li>
				<li>
					<Link
						href="/"
						className="hover:text-secondary-2 transition-colors"
					>
						<span className="text-secondary-2">02.</span> Schedule
					</Link>
				</li>
				<li>
					<Link
						href="/"
						className="hover:text-secondary-2 transition-colors"
					>
						<span className="text-secondary-2">03.</span> Contribute
					</Link>
				</li>
			</ul>
			<div className="grow flex justify-end gap-4 items-center">
				<Link
					className={`${buttonVariants({
						variant: "outline",
						size: "icon",
						className: "rounded-full hidden lg:flex",
					})}`}
					href="https://twitter.com/inclinedadarsh"
				>
					<Twitter className="h-4 w-4" />
				</Link>
				<Link
					className={`${buttonVariants({
						variant: "outline",
						size: "icon",
						className: "rounded-full hidden lg:flex",
					})}`}
					href="https://github.com/inclinedadarsh/open-spectrum"
				>
					<Github className="h-4 w-4" />
				</Link>
				<Link
					className={buttonVariants({
						variant: "default",
						size: "sm",
					})}
					href="https://twitter.com/inclinedadarsh"
				>
					Watch on YouTube
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
