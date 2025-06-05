// index.js
import { registerRootComponent } from 'expo';
import App from './App'; // Importa seu componente App.js

// Registra o componente raiz do seu aplicativo
registerRootComponent(App);
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
