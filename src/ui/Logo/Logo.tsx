import LogoIcon from '../../assets/stair.svg?react';
import './styles.css';

export const Logo = () => {
	return (
		<div className='logo'>
			<LogoIcon height={16} width={16} className='logo__icon' />
			<span>Eats</span>
		</div>
	);
};
