import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';

import s from './App.module.scss';

 class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = scoreName => {
    this.setState(prevState => {
      return {
        [scoreName]: prevState[scoreName] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return ((good / this.countTotalFeedback()) * 100).toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { onLeaveFeedback } = this;
    return (
      <div className={s.container}> 
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification mess="No feedback yet" />
          )}
        </Section>
      </div>
    );
  }
}


export default App;
