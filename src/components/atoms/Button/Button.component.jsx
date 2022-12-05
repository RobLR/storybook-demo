import { ButtonElement } from './Button.elements';

export default function Button({ size, mode, text, onClick }) {
	return (
		<ButtonElement
			className={`${size ? size : 'medium'} ${mode ? mode : 'primary'}`}
			onClick={onClick}
		>
			{text}
		</ButtonElement>
	);
}
