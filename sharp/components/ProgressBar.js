import styled, { css } from '@emotion/native';
import React from 'react';
import * as Progress from 'expo-progress';
import { Appearance, useColorScheme } from 'react-native';

export default function ProgressBar({
	progress,
	indeterminate = false,
	animated = true,
}) {
	let colorScheme = useColorScheme()
	return (
		<Progress.Bar
			style={css`
				margin-bottom: 4px;
			`}
			color={colorScheme == 'dark' ? '#fff' : '#000'}
			trackColor={colorScheme == 'dark' ? '#373737' : '#ededed'}
			height={5}
			progress={progress}
			isIndeterminate={indeterminate}
			isAnimated={animated}
		/>
	);
}
