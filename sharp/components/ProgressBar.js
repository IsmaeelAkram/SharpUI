import styled, { css } from '@emotion/native';
import React from 'react';
import * as Progress from 'expo-progress';
import { useColorScheme } from 'react-native';

export default function ProgressBar({
	progress,
	color,
	trackColor,
	indeterminate = false,
	animated = true,
}) {
	let colorScheme = useColorScheme();
	let dark = colorScheme == 'dark';
	return (
		<Progress.Bar
			style={css`
				margin-bottom: 4px;
			`}
<<<<<<< HEAD
			color={color || dark ? '#fff' : '#373737'}
			trackColor={trackColor || dark ? '#373737' : '#ededed'}
=======
			color={colorScheme == 'dark' ? '#fff' : '#000'}
			trackColor={colorScheme == 'dark' ? '#373737' : '#ededed'}
>>>>>>> 9d8831066499872a1ba36c192e6d97cacb2b681c
			height={5}
			progress={progress}
			isIndeterminate={indeterminate}
			isAnimated={animated}
		/>
	);
}
