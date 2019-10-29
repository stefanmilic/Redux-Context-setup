import React from 'react';
import { Tabs } from '@yazanaabed/react-tabs';
import Tab1 from './components/Basic/Tab1';
import Tab2 from './components/Basic/Tab2';
import Tab3 from './components/Basic/Tab3';

const styles = {
  textAlign: 'center',
};

class App extends React.Component {
  state = {
    list: [],
  };
  handlerClick = player => {
    const { list } = this.state;
    //  new feature this is same like list.concat(player)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    this.setState({ list: [...list, player] });
  };

  render() {
    return (
      <div style={styles}>
        <Tabs
          activeTab={{
            id: 'tab1',
          }}
        >
          <Tabs.Tab id='tab1' title='Tab 1'>
            <div style={{ padding: 10 }}>
              <Tab1 onClick={this.handlerClick} />
            </div>
          </Tabs.Tab>
          <Tabs.Tab id='tab2' title='Tab 2'>
            <div style={{ padding: 10 }}>
              <Tab2 onClick={this.handlerClick} />
            </div>
          </Tabs.Tab>
          <Tabs.Tab id='tab3' title='Tab 3'>
            <div style={{ padding: 10 }}>
              <Tab3 listOfPlayers={this.state.list} />
            </div>
          </Tabs.Tab>
        </Tabs>
      </div>
    );
  }
}
export default App;
