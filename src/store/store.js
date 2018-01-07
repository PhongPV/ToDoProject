import { createStore, applyMiddleware } from 'redux';
import originReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

export default function configureStore() {
	const config = {
		key: 'ToDoApp',
		storage,
	};
	const reducer = persistReducer(config, originReducer);
	const store = createStore(reducer);
	const persistor = persistStore(store);
	return {
		store,
		persistor,
	};
}
