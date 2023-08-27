import Navigation from './navigation';
import { Provider } from 'react-redux';
import { store } from './store';
import { registerRootComponent } from 'expo';

registerRootComponent(App);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
