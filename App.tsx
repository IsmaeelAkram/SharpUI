import { useFonts } from 'expo-font';
import React from 'react';
import { ScrollView, View } from 'react-native';

import Button from './sharp/components/Button';
import Image from './sharp/components/Image';
import Paragraph from './sharp/components/Paragraph';
import ProgressBarIOS from './sharp/components/ProgressBarIOS';
import Subtitle from './sharp/components/Subtitle';
import TextField from './sharp/components/TextField';
import Title from './sharp/components/Title';

export default function App() {
	const [loaded, error] = useFonts({
		PlusJakartaSansRegular: require('./sharp/fonts/PlusJakartaSans-Regular.ttf'),
		PlusJakartaSansItalic: require('./sharp/fonts/PlusJakartaSans-Italic.ttf'),
		PlusJakartaSansMedium: require('./sharp/fonts/PlusJakartaSans-Medium.ttf'),
		PlusJakartaSansMediumItalic: require('./sharp/fonts/PlusJakartaSans-MediumItalic.ttf'),
		PlusJakartaSansBold: require('./sharp/fonts/PlusJakartaSans-Bold.ttf'),
		PlusJakartaSansBoldItalic: require('./sharp/fonts/PlusJakartaSans-BoldItalic.ttf'),
	});

	if (!loaded) {
		return null;
	}
	if (error) {
		return (
			<View style={{ marginTop: 80, marginLeft: 15 }}>
				<Title>Error loading fonts</Title>
			</View>
		);
	}

	return (
		<ScrollView style={{ marginTop: 80, marginLeft: 15, marginRight: 15 }}>
			<Title>Sharp UI</Title>

			<Subtitle style={{ marginTop: 20 }}>Why Sharp?</Subtitle>
			<View style={{ marginTop: 5 }}>
				<Paragraph>
					<Paragraph bold>Sharp UI</Paragraph> is an <Paragraph italic>amazing</Paragraph> React
					Native UI library made by Ismaeel Akram. It's very customizable, elegant, and fast.
				</Paragraph>
			</View>

			<Subtitle style={{ marginTop: 20 }}>Buttons</Subtitle>
			<View style={{ flexDirection: 'row', marginTop: 5 }}>
				<Button width={120} dark onPress={() => alert("I'm a dark button!")}>
					Dark button
				</Button>
				<Button width={120} onPress={() => alert("I'm a light button!")}>
					Light button
				</Button>
			</View>

			<Subtitle style={{ marginTop: 20 }}>Text Field</Subtitle>
			<View style={{ marginTop: 5 }}>
				<TextField placeholder="Username" raw />
				<TextField placeholder="Password" password raw />
			</View>

			<Subtitle style={{ marginTop: 20 }}>Progress Bar</Subtitle>
			<View style={{ marginTop: 7 }}>
				<ProgressBarIOS progress={0.75}></ProgressBarIOS>
			</View>

			{/* <Subtitle style={{ marginTop: 20 }}>Images</Subtitle>
			<View style={{ marginTop: 7 }}>
				<Image source={{ uri: 'https://via.placeholder.com/500x500.png' }} />
			</View> */}
		</ScrollView>
	);
}
