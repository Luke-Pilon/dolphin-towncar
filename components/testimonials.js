export default function Testimonials({ testimonials }) {
    console.log(testimonials);
    return (
        <div>
            {testimonials.map((testimonial, i) => (
                <div key={i}>
                    <p>{testimonial.content}</p>
                </div>
            ))}
        </div>
    );
}
//TODO style testimonials
