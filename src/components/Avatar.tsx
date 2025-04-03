import { useState } from "react";

interface SimpsonProps {
	image: string;
	firstName: string;
	lastName: string;
}

function Avatar({ image, firstName, lastName }: SimpsonProps) {
	const [count, setCount] = useState(0);
	return (
		<figure>
			<img src={image} alt={firstName} />
			<figcaption>
				{firstName} {lastName}
			</figcaption>
			<button type="button" onClick={() => setCount(count + 1)}>
				{count}🍩
			</button>
		</figure>
	);
}

export default Avatar;
