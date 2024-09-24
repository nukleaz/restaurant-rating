import { RestaurantsContainer } from '../../Containers/RestaurantsContainer';
import { Avatar } from '../Avatar/Avatar';
import { Logo } from '../Logo/Logo';
import './styles.css';

export const BaseLayout = () => {
	return (
		<>
			<header>
				<Logo />
				<Avatar />
			</header>
			<main>
				<section className='restaurants'>
					<RestaurantsContainer />
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
