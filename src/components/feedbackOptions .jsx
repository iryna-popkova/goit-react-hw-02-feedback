import React from 'react';
import { OptionWrapper, Button, OptionsItem } from './feedbackOptions.styled';

export const FeedbackOptions = ({ options, onleaveFeedback }) => {
  return (
    <OptionWrapper>
      {options.map(option => (
        <OptionsItem key={option}>
          <Button name={option} type="button" onClick={onleaveFeedback}>
            {option}
          </Button>
        </OptionsItem>
      ))}
    </OptionWrapper>
  );
};
