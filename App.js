
import React from 'react';


import { Provider } from 'react-redux';
import { ReduxNetworkProvider } from 'react-native-offline';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import store from './src/reduxStore/store';
import AboutScreen from './src/screens/AboutScreen/AboutScreen';



function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ReduxNetworkProvider pingInterval={3000}>
          <AboutScreen />
          <FlashMessage position="top" />

        </ReduxNetworkProvider>
      </Provider>
    </GestureHandlerRootView>
  )
}


export default App;