import './Header.css';

function Links(props) {
	return (
		<a>{props.value}</a>
	);
}

export default function Header() {
	return (
		<header>
			<Links value='Main' />
			<Links value='Account' />
			<Links value='About us' />
		</header>
	);
}