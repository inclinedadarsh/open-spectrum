import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowBigDown, ArrowDown, Youtube } from "lucide-react";

const Header = () => {
	return (
		<header className="w-full max-w-4xl mx-auto mt-20">
			<h1 className="text-2xl sm:text-3xl md:text-4xl md:leading-tight font-semibold text-center leading-tight">
				Explore open-source this Hacktoberfest with Open Spectrum
			</h1>
			<p className="text-muted-foreground text-center leading-snug w-full font-normal mt-12">
				22-day tech celebration highlighting the diversity of open
				source, featuring events by guest speakers, project maintainers,
				and community calls. Join in, watch sessions on YouTube and
				participate community calls on Discord. Hosted by{" "}
				<Link
					className={`${buttonVariants({
						variant: "link",
					})}`}
					href="https://bento.me/adarsh"
				>
					Adarsh Dubey
				</Link>
				.
			</p>
			<div className="mt-12 flex gap-6 items-center justify-center">
				<Link
					href="/"
					className={`${buttonVariants({ variant: "default" })}`}
				>
					<Youtube strokeWidth={1.5} />
					&nbsp;Watch on YouTube
				</Link>
				<Link
					href="/"
					className={`${buttonVariants({ variant: "default" })}`}
				>
					<ArrowDown strokeWidth={1.5} />
					&nbsp;See schedule
				</Link>
			</div>
		</header>
	);
};

export default Header;
