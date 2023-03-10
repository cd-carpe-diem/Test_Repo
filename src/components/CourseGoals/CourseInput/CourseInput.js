import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        if (enteredValue.trim().length > 0) {
            // trim을 쓰면 앞 뒤의 공백을 제거해준다.
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            // trim을 쓰면 앞 뒤의 공백을 제거해준다.
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label
                    style={{
                        color: !isValid ? 'red' : 'black',
                    }}
                >
                    Course Goal
                </label>
                <input
                    style={{
                        boderColor: !isValid ? 'red' : '#ccc',
                        background: !isValid ? 'salmon' : 'transparent',
                    }}
                    type="text"
                    onChange={goalInputChangeHandler}
                />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
