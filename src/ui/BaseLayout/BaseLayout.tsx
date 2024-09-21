import { Avatar } from '../Avatar/Avatar';
import { Logo } from '../Logo/Logo';
import { SearchInput } from '../SearchInput/SearchInput';
import './styles.css';

export const BaseLayout = () => {
	return (
		<>
			<header>
				<Logo />
				<Avatar />
			</header>
			<main>
				<section>
					<SearchInput />
				</section>
			</main>
			<footer>
				<p>Privacy Policy</p>
				<p className='corporation'>2022 Eats</p>
				<p>Terms Of Service</p>
			</footer>
		</>
	);
};
