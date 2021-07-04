import { useFonts } from 'expo-font';
import React from 'react';
import { LogBox, useColorScheme, View } from 'react-native';
import styled, { css } from '@emotion/native';

import DarkButton from './sharp/components/DarkButton';
import LightButton from './sharp/components/LightButton';
import Card from './sharp/components/Card';
import Image from './sharp/components/Image';
import Carousel from './sharp/components/Carousel';
import Paragraph from './sharp/components/Paragraph';
import ProgressBar from './sharp/components/ProgressBar';
import ScrollView from './sharp/components/ScrollView';
import FlatList from './sharp/components/FlatList';
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
			<ScrollView>
				<Title>Error loading fonts</Title>
			</ScrollView>
		);
	}

	return (
		<ThemeView>
			<ScrollView>
				<Title>Sharp UI</Title>

				<Subtitle
					style={css`
						margin-top: 20px;
					`}
				>
					Why Sharp?
				</Subtitle>
				<Paragraph>
					<Paragraph bold>Sharp UI</Paragraph> is an <Paragraph italic>amazing</Paragraph> React
					Native UI library made by Ismaeel Akram. It's very customizable, elegant, and fast.
				</Paragraph>

				<Subtitle
					style={css`
						margin-top: 20px;
					`}
				>
					Buttons
				</Subtitle>
				<View style={{ flexDirection: 'row' }}>
					<DarkButton width={120} dark onPress={() => alert("I'm a dark button!")}>
						Dark button
					</DarkButton>
					<LightButton width={120} onPress={() => alert("I'm a light button!")}>
						Light button
					</LightButton>
				</View>

				<Subtitle
					style={css`
						margin-top: 20px;
					`}
				>
					Text Fields
				</Subtitle>
				<TextField type="email" placeholder="E-mail" raw />
				<TextField type="password" placeholder="Password" password raw />

				<Subtitle
					style={css`
						margin-top: 20px;
					`}
				>
					Progress Bars
				</Subtitle>
				<ProgressBar progress={0.8} />
				<ProgressBar indeterminate />

				<Subtitle
					style={css`
						margin-top: 20px;
					`}
				>
					Checkboxes
				</Subtitle>
				<Checkbox onChange={(checked) => alert(checked)}>Cool checkbox</Checkbox>

				<Subtitle
					style={css`
						margin-top: 20px;
					`}
				>
					Cards
				</Subtitle>
				<Carousel>
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
				</Carousel>

				<Subtitle
					style={css`
						margin-top: 20px;
					`}
				>
					Images
				</Subtitle>

				<Image
					style={css`
						width: 150px;
						height: 100px;
					`}
					source={{ uri: 'https://via.placeholder.com/300x200.png' }}
				/>
			</ScrollView>
		</ThemeView>
	);
}
