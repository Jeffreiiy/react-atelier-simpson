interface SimpsonProps {
	image: string;
	firstName: string;
	lastName: string;
}

function Avatar({ image, firstName, lastName }: SimpsonProps) {
	return (
		<figure>
			<img src={image} alt={firstName} />
			<figcaption>
				{firstName} {lastName}
			</figcaption>
		</figure>
	);
}

export default Avatar;
