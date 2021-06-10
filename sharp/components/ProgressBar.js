import styled, { css } from '@emotion/native';
import React from 'react';
import * as Progress from 'expo-progress';
import { Appearance } from 'react-native';

export default function ProgressBar({
	progress,
	color = Appearance.getColorScheme() == 'dark' ? '#fff' : '#373737',
	trackColor = Appearance.getColorScheme() == 'dark' ? '#373737' : '#ededed',
	indeterminate = false,
	animated = true,
}) {
	return (
		<Progress.Bar
			style={css`
				margin-bottom: 4px;
			`}
			color={color}
			trackColor={trackColor}
			height={5}
			progress={progress}
			isIndeterminate={indeterminate}
			isAnimated={animated}
		/>
	);
}
