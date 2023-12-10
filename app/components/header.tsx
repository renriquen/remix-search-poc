import {Container} from "@/components/container";
import {NavLink} from "@/components/navlink";

export function Header() {
	return (
		<header className="py-8">
			<Container>
				<nav className="relative z-50 flex justify-between">
					<div className="flex items-center md:gap-x-12">
						<div className="md:flex md:gap-x-6">
							<NavLink href="/">Home</NavLink>
							<NavLink href="/search">Search</NavLink>
						</div>
					</div>
				</nav>
			</Container>
		</header>
	)
}
