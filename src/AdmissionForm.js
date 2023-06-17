import React, { useState } from "react";
import "./AdmissionForm.css";

const AdmissionForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [tcId, setTcId] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform data submission or validation here
        console.log("Form submitted:", {
            name,
            age,
            gender,
            email,
            phoneNumber,
            tcId,
            dob,
            address,
        });
        // Reset form fields
        setName("");
        setAge("");
        setGender("");
        setEmail("");
        setPhoneNumber("");
        setTcId("");
        setDob("");
        setAddress("");
    };

    return (
        <div className="form-container">
            <h1>Admission Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <label htmlFor="gender">Gender:</label>
                <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="phoneNumber">Parent Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <label htmlFor="tcId">Transfer Certificate ID:</label>
                <input
                    type="text"
                    id="tcId"
                    value={tcId}
                    onChange={(e) => setTcId(e.target.value)}
                />

                <label htmlFor="dob">Date of Birth:</label>
                <input
                    type="date"
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />

                <label htmlFor="address">Address:</label>
                <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AdmissionForm;
