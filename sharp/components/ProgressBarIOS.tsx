import React from 'react';
import { ProgressViewIOS } from 'react-native';
import styled, { css } from 'styled-components/native';

interface props {
	progress: number;
}

/**
 * @deprecated Use `ProgressBar` instead.
 */
export default function ({ progress }: props) {
	return (
		<ProgressViewIOS
			progress={progress}
			progressTintColor="#000"
			style={{ transform: [{ scaleY: 1.25 }] }}
		></ProgressViewIOS>
	);
}
