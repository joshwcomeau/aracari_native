import React, { Component } from 'react';
import {
  AppRegistry,
  NavigationExperimental,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';

import BudgetView from '../BudgetView';

const {
	AnimatedView: NavigationAnimatedView,
	Card: NavigationCard,
	Header: NavigationHeader,
	RootContainer: NavigationRootContainer
} = NavigationExperimental

class App extends Component {
  renderNavigationHeader(props) {
    return (
      <NavigationHeader
        style={styles.navigationTitle}
        {...props}
        renderTitleComponent={props => (
          <NavigationHeader.Title>
            {props.scene.navigationState.title}
          </NavigationHeader.Title>
        )}
      />
    );
  }

  renderScene({scene}) {
    const { navigationState } = scene;

    switch (navigationState.key) {
      case 'Home':
        return <BudgetView />;
    }
  }

  render() {
    console.log("Rendering with", this.props)
    let { navigationState, onNavigate } = this.props;

    return (
      <NavigationAnimatedView
        style={{ flex: 1 }}
        navigationState={navigationState}
        onNavigate={onNavigate}
        renderOverlay={this.renderNavigationHeader}
        renderScene={props => (
          <NavigationCard
            {...props}
            renderScene={this.renderScene}
            key={props.scene.navigationState.key}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  navigationTitle: {
    backgroundColor: '#FFFFFF',
  },
});


const mapStateToProps = state => ({
  navigationState: state.get('navigation').toJS()
});

const mapDispatchToProps = dispatch => ({
  onNavigate(action) {
    // Two types of actions are likely to be passed, both representing "back"
		// style actions. Check if a type has been indicated, and try to match it.
		if (action.type && (
			action.type === NavigationRootContainer.getBackAction().type ||
			action.type === NavigationCard.CardStackPanResponder.Actions.BACK.type)
		) {
			dispatch(navigatePop())
		} else {
			// Currently unused by NavigationExperimental (only passes back actions),
			// but could potentially be used by custom components.
			dispatch(navigatePush(action))
		}
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
