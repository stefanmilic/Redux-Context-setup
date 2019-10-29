import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { reducer } from './components/Redux/Reducer';
import { Tabs } from '@yazanaabed/react-tabs';
import Tab3 from './components/Redux/Tab3';
import Tab1 from './components/Redux/Tab1';
import Tab2 from './components/Redux/Tab2';

// create store
export const store = createStore(reducer);

const styles = {
  textAlign: 'center',
};
export default class ReduxApp extends Component {
  render() {
    // provider must be on top and all components down have access to store
    return (
      <Provider store={store}>
        <div style={styles}>
          <Tabs
            activeTab={{
              id: 'tab1',
            }}
          >
            <Tabs.Tab id='tab1' title='Tab 1'>
              <div style={{ padding: 10 }}>
                <Tab1 />
              </div>
            </Tabs.Tab>
            <Tabs.Tab id='tab2' title='Tab 2'>
              <div style={{ padding: 10 }}>
                <Tab2 />
              </div>
            </Tabs.Tab>
            <Tabs.Tab id='tab3' title='Tab 3'>
              <div style={{ padding: 10 }}>
                <Tab3 />
              </div>
            </Tabs.Tab>
          </Tabs>
        </div>
      </Provider>
    );
  }
}
