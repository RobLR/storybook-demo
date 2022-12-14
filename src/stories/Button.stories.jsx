import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },

		label: {
			description: 'overwritten description',
			table: {
				type: {
					summary: 'something short',
					detail: 'something really really long',
				},
			},
			control: {
				type: null,
			},
		},
	},
	// decorators: [
	// 	(Story) => (
	// 		<div style={{ margin: '3em' }}>
	// 			<Story />
	// 		</div>
	// 	),
	// ],

	// If using Styled Components to get a theme
	// decorators = [
	//     (Story) => (
	//       <ThemeProvider theme="default">
	//         <Story />
	//       </ThemeProvider>
	//     ),
	//   ]
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
	size: 'large',
	label: 'Button',
};

// Centers the story component on the canvas
Small.parameters = {
	layout: 'centered',
	backgrounds: {
		values: [
			{ name: 'red', value: '#f00' },
			{ name: 'green', value: '#0f0' },
			{ name: 'blue', value: '#00f' },
		],
	},
};
