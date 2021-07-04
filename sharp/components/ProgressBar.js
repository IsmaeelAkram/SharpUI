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
			color={color || dark ? '#fff' : '#373737'}
			trackColor={trackColor || dark ? '#373737' : '#ededed'}
			height={5}
			progress={progress}
			isIndeterminate={indeterminate}
			isAnimated={animated}
		/>
	);
}
