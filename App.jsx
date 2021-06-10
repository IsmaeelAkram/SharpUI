import { useFonts } from 'expo-font';
import React from 'react';
import { LogBox, useColorScheme, View } from 'react-native';

import Button from './sharp/components/Button';
import Card from './sharp/components/Card';
import Image from './sharp/components/Image';
import CardCarousel from './sharp/components/CardCarousel';
import Paragraph from './sharp/components/Paragraph';
import ProgressBar from './sharp/components/ProgressBar';
import ScrollView from './sharp/components/ScrollView';
import Subtitle from './sharp/components/Subtitle';
import TextField from './sharp/components/TextField';
import Title from './sharp/components/Title';
import ThemeView from './sharp/components/ThemeView';
import fonts from './sharp/utils/fonts';
import Checkbox from './sharp/components/Checkbox';

export default function App() {
	LogBox.ignoreAllLogs();
	let colorScheme = useColorScheme();
	const [loaded, error] = useFonts(fonts);

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
		<ThemeView>
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
				<ProgressBar progress={0.8} />
				<ProgressBar indeterminate />

				<Subtitle style={{ marginTop: 20 }}>Checkboxes</Subtitle>
				<Checkbox onChange={(checked) => alert(checked)}>Cool checkbox</Checkbox>

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

				<Subtitle style={{ marginTop: 20 }}>Images</Subtitle>

				<Image source={{ uri: 'https://via.placeholder.com/500x500.png' }} />
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim neque a elit
					lobortis, ullamcorper eleifend eros hendrerit. Praesent at dolor gravida, consectetur est
					placerat, tempor mauris. In vitae ligula eget diam laoreet gravida sit amet at sapien.
				</Paragraph>
			</ScrollView>
		</ThemeView>
	);
}
