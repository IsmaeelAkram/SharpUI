import { useFonts } from 'expo-font';
import React from 'react';
import { View } from 'react-native';

import Button from './sharp/components/Button';
import Card from './sharp/components/Card';
import CardCarousel from './sharp/components/CardCarousel';
import Paragraph from './sharp/components/Paragraph';
import ProgressBar from './sharp/components/ProgressBar';
import ScrollView from './sharp/components/ScrollView';
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
		<ScrollView>
			<Title>Sharp UI</Title>

			<Subtitle style={{ marginTop: 20 }}>Why Sharp?</Subtitle>
			<Paragraph>
				<Paragraph bold>Sharp UI</Paragraph> is an <Paragraph italic>amazing</Paragraph> React
				Native UI library made by Ismaeel Akram. It's very customizable, elegant, and fast.
			</Paragraph>

			<Subtitle style={{ marginTop: 20 }}>Buttons</Subtitle>
			<View style={{ flexDirection: 'row' }}>
				<Button width={120} dark onPress={() => alert("I'm a dark button!")}>
					Dark button
				</Button>
				<Button width={120} onPress={() => alert("I'm a light button!")}>
					Light button
				</Button>
			</View>

			<Subtitle style={{ marginTop: 20 }}>Text Fields</Subtitle>
			<TextField type="email" placeholder="E-mail" raw />
			<TextField type="password" placeholder="Password" password raw />

			<Subtitle style={{ marginTop: 20 }}>Progress Bars</Subtitle>
			<ProgressBar progress={.8} />
			<ProgressBar indeterminate />

			<Subtitle style={{ marginTop: 20 }}>Cards</Subtitle>
			<CardCarousel>
				<Card carousel>
					<Subtitle>Card #1</Subtitle>
					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim neque a
						elit lobortis, ullamcorper eleifend eros hendrerit. Praesent at dolor gravida,
						consectetur est placerat, tempor mauris. In vitae ligula eget diam laoreet gravida sit
						amet at sapien.
					</Paragraph>
				</Card>
				<Card carousel>
					<Subtitle>Card #2</Subtitle>
					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim neque a
						elit lobortis, ullamcorper eleifend eros hendrerit. Praesent at dolor gravida,
						consectetur est placerat, tempor mauris. In vitae ligula eget diam laoreet gravida sit
						amet at sapien.
					</Paragraph>
				</Card>
			</CardCarousel>

			{/* <Subtitle style={{ marginTop: 20 }}>Images</Subtitle>
			<View style={{ marginTop: 7 }}>
				<Image source={{ uri: 'https://via.placeholder.com/500x500.png' }} />
			</View> */}
		</ScrollView>
	);
}
