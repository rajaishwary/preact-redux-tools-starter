import { h } from 'preact';
import { Link } from 'preact-router/match';
import { MainHeader, Nav, H1 } from './styles';

const Header = () => (
	<MainHeader>
		<H1>{'Project_EComm'}</H1>
		<Nav>
			<Link href="/">Home</Link>
			<Link href="/profile">Me</Link>
			<Link href="/profile/john">John</Link>
		</Nav>
	</MainHeader>
);

export default Header;
