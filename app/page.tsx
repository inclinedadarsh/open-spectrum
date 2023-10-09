import Header from "@/components/Header";
import Incomplete from "@/components/Incomplete";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<Incomplete />
		</>
	);
}
