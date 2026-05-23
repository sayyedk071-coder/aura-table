import { useState } from 'react';

export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "8cedcb5e-2953-4d61-a715-53939e49d45a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            setResult("Error");
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" required />
            <input type="email" name="email" required />
            <textarea name="message" required></textarea>
            <button type="submit">Submit Form</button>
            <span>{result}</span>
        </form>
    );
}