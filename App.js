import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/components/Router';
import Setting from './src/components/Setting';
import { Provider } from 'react-redux';
import configureStore from './src/store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { AppLoading } from 'expo';

const { store, persistor } = configureStore();

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={<AppLoading />}>
					<Router />
				</PersistGate>
			</Provider>
		);
	}
}
