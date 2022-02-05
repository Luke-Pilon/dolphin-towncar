import styles from './testimonials.module.css';

export default function Testimonials({ testimonials }) {
    return (
        <>
            <h3>Testimonials</h3>
            <div className={styles.testimonialContainer}>
                {testimonials.map((testimonial, i) => (
                    <div key={i} className={styles.testimonial}>
                        <p>&quot;{testimonial.content}&quot;</p>
                        {testimonial.name && <p>-{testimonial.name}</p>}
                    </div>
                ))}
            </div>
        </>
    );
}
//TODO make this a slider/carousel/'see more' element?
