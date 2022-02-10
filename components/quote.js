import { useForm } from 'react-hook-form';
import styles from './quote.module.css';

export default function Quote() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();
    const onSubmit = async (data) => {
        //await new Promise((r) => setTimeout(r, 2000));
        return new Promise((resolve) => {
            fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }).then(resolve());
        });
    };
    return (
        <>
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
                <label htmlFor='tel'>Telephone (optional):</label>
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
            </form>
        </>
    );
}
