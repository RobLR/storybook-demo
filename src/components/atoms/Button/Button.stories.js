import Button from './Button.component';

export default {
	title: 'Components/Atoms/Button',
	component: Button,
};

// export const Primary = () => <Button text="Submit" mode="primary" />;
// export const Secondary = () => <Button text="Submit" mode="secondary" />;
// export const Small = () => <Button text="Submit" size="small" />;
// export const Large = () => <Button text="Submit" size="large" />;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { text: 'Submit' };

export const PrimarySmall = Template.bind({});
PrimarySmall.args = { ...Primary.args, size: 'small' };
