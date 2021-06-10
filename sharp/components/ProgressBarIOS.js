import React from 'react';
import { ProgressViewIOS } from 'react-native';
/**
 * @deprecated Use `ProgressBar` instead.
 */
export default function ({ progress }) {
	return (
		<ProgressViewIOS
			progress={progress}
			progressTintColor="#000"
			style={{ transform: [{ scaleY: 1.25 }] }}
		></ProgressViewIOS>
	);
}
