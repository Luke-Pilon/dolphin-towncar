import { useForm } from 'react-hook-form';
import styles from './quote.module.css';
import { useState } from 'react';

export default function Quote() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();
    //message to display to user results of their form submission for a quote
    const [message, setMessage] = useState(null);
    //display message based on the result of the submission for three seconds, then clear message
    //also reset form data if the submission was successful
    const submissionResult = (result) => {
        result
            ? (setMessage(
                  'Thanks! We have received your request for a quote and will contact you promptly.'
              ),
              reset())
            : setMessage(
                  "We're sorry, there was an issue with your quote request. Please try again."
              );
        setTimeout(() => setMessage(null), 3000);
    };
    const onSubmit = async (data) => {
        return new Promise((resolve) => {
            fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then(({ successful }) => submissionResult(successful))
                .then(resolve())
                .catch(submissionResult(false));
        });
    };
    return (
        <div id='quote'>
            <p>Don&apos;t see your trip listed above? Request a quote here:</p>
            <form
                className={styles.quoteForm}
                onSubmit={handleSubmit(onSubmit)}
            >
                <label htmlFor='name'>Name:</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    className={styles.input}
                    placeholder='John Smith'
                    {...register('name', {
                        required: 'Please enter your name',
                        maxLength: {
                            value: 128,
                            message: 'Maximum character limit reached',
                        },
                    })}
                />

                {errors.name && (
                    <p className={styles.errorMessage}>{errors.name.message}</p>
                )}
                <label htmlFor='tel'>Telephone:</label>
                <input
                    type='tel'
                    id='tel'
                    name='tel'
                    placeholder='9876543210'
                    className={styles.input}
                    {...register('tel', {
                        required:
                            'Please enter a phone number you can be reached at',
                        maxLength: {
                            value: 10,
                            message: 'Please enter 10-digit phone number',
                        },
                        minLength: {
                            value: 10,
                            message: 'Please enter 10-digit phone number',
                        },
                    })}
                />
                {errors.tel && (
                    <p className={styles.errorMessage}>{errors.tel.message}</p>
                )}
                <label htmlFor='email' id='email'>
                    Email:
                </label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    className={styles.input}
                    placeholder='example@example.com'
                    {...register('email', {
                        maxLength: {
                            value: 128,
                            message: 'Maximum character limit reached',
                        },
                    })}
                />
                {errors.email && (
                    <p className={styles.errorMessage}>
                        {errors.email.message}
                    </p>
                )}

                <label htmlFor='request' id='request'>
                    How can we help you?
                </label>
                <textarea
                    id='request'
                    name='request'
                    rows='10'
                    placeholder='Please include information such as location, destination, date, and time'
                    className={styles.input}
                    {...register('request', {
                        required: 'Please add your quote request',
                        minValue: {
                            value: 15,
                            message: 'Please add your quote request',
                        },
                        maxLength: {
                            value: 1000,
                            message: 'Maximum character limit reached',
                        },
                    })}
                />
                {errors.request && (
                    <p className={styles.errorMessage}>
                        {errors.request.message}
                    </p>
                )}
                {isSubmitting && <span className={styles.spinner}></span>}
                {!isSubmitting && (
                    <input
                        type='submit'
                        value='Submit'
                        className={styles.quoteSubmit}
                    ></input>
                )}
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}
