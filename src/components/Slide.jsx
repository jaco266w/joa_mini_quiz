export default function Slide(props) {
	return (
		<>
			<h3 className="font-bold text-lg">{props.title}</h3>
			{props.children}
		</>
	);
}
