import { Component } from 'react';

import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackButtons from 'components/FeedbackButtons';
import Notification from 'components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = total ? Math.round((good / total) * 100) : 0;
    return positivePercentage;
  }

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    const feedbacks = Object.keys(this.state);
    return (
      <>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#010101',
          }}
        >
          <Section title="Please leave feedback">
            <FeedbackButtons
              options={feedbacks}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
            {!total ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            )}
          </Section>
        </div>
      </>
    );
  }
}
