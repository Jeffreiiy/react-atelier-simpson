import "./App.css";
import Avatar from "./components/Avatar";

const simpsonList = [
	{
		image:
			"https://www.stickees.com/files/cartoon/the-simpsons/2258-front-row-sticker.png",
		firstName: "Bart",
		lastName: "Simpson",
	},
	{
		image:
			"https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
		firstName: "Homer",
		lastName: "Simpson",
	},
	{
		image:
			"https://www.stickees.com/files/cartoon/the-simpsons/2262-itunes-lisa-sticker.png",
		firstName: "Lisa",
		lastName: "Simpson",
	},
	{
		image:
			"https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
		firstName: "Maggie",
		lastName: "Simpson",
	},
	{
		image:
			"https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
		firstName: "Marge",
		lastName: "Simpson",
	},
];
function App() {
	return (
		<section>
			{simpsonList.map((simpson) => (
				<Avatar
					key={simpson.firstName}
					image={simpson.image}
					firstName={simpson.firstName}
					lastName={simpson.lastName}
				/>
			))}

			{/* <Avatar 
				image={homer.image}
				firstName={homer.firstName}
				lastName={homer.lastName}
			/>*/}
		</section>
	);
}

export default App;
