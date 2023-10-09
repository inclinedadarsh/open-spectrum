import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Github } from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";

const Incomplete = () => {
	return (
		// <div className="mt-20 max-w-4xl w-full mx-auto border border-secondary rounded-md px-5 py-4">
		// 	<p className="text-3xl font-semibold">
		// 		This website is incomplete.
		// 	</p>
		// 	<p className="mt-2">But you can complete it!</p>
		// 	<Link
		// 		className={`${buttonVariants({ variant: "default" })} mt-4`}
		// 		href="/"
		// 	>
		// 		See issues on GitHub <Github />
		// 	</Link>
		// </div>
		<div className="max-w-3xl mx-auto my-20">
			<Card className="bg-background">
				<CardHeader>
					<CardTitle className="text-2xl md:text-3xl">
						This website is in development
					</CardTitle>
					<CardDescription>
						But you can help in completing it!
					</CardDescription>
				</CardHeader>
				<CardContent className="">
					<p className="">
						Heyy! This website is development in development and I
						am working on it. But at the same time,{" "}
						<span className="text-primary-2 font-medium">
							you can contribute to it
						</span>{" "}
						as this is totally open source. We are participating in{" "}
						<Link
							href="https://hacktoberfest.com/"
							className={`${buttonVariants({ variant: "link" })}`}
						>
							Hacktoberfest
						</Link>{" "}
						2023, so contributing to this repo will also count
						towards your Hacktoberfest contributions.
					</p>
					<p className="mt-4">
						Check out{" "}
						<Link
							href="https://github.com/inclinedadarsh/open-spectrum/blob/main/CONTRIBUTING.md"
							className={`${buttonVariants({ variant: "link" })}`}
						>
							CONTRIBUTION.md
						</Link>{" "}
						to know more about how to contribute.
					</p>
				</CardContent>
				<CardFooter>
					<Link
						href="https://github.com/inclinedadarsh/open-spectrum/issues"
						className={`${buttonVariants({ variant: "default" })}`}
					>
						Issues on GitHub&nbsp;
						<Github strokeWidth={1.5} />
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Incomplete;
