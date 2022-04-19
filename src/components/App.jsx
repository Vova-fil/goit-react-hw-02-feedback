import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnFeedback = value => {
    this.setState(preState => ({ [value]: preState[value] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const counttotal = this.countTotalFeedback;
    const percentage = this.countPositiveFeedbackPercentage;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onBtnFeedback={this.onBtnFeedback}
            options={Object.keys(this.state)}
          />
        </Section>

        <Section title="statistics">
          {counttotal ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              counttotal={counttotal}
              percentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         textTransform: 'uppercase',
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
