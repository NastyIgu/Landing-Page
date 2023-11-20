
import "../Styles/main.css";

function NavBar() {
	return(
		<div className="header mb-6 pt-2">
				<h3 className="text-4xl font-mono font-extrabold mt-5 ">Wealthfront</h3>
			<ul className="mt-4 font-mono">
				<li><a href="/">Cash</a></li>
				<li><a href="/">Bonds</a></li>
				<li><a href="/">Automated Investing</a></li>
				<li><a href="/">Stocks</a></li>
				<li><a href="/">Learn</a></li>
			</ul>

			 <div className="mr-16 mt-4">
			 	<button className="px-6 py-3 font-bold font-mono mr-2 plain-col1 hovs1 ">Log in</button>
				<button className="px-6 py-3 font-bold font-mono plain-col2 hovs2 ">Get started</button>
			 </div>
				

		</div>
	)
}

export default NavBar;