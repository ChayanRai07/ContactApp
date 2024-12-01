import React, { useState } from "react";
import './addcontact.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

function AddContact(props) { // Use functional component
  const [name, setName] = useState(""); // Use state for name
  const [email, setEmail] = useState(""); // Use state for email
  const [phone, setphone] = useState(""); //const [image, setImage] = useState(null); // State to store the selected image
  const navigate = useNavigate(); // Access navigate from react-router-dom

  const handleAdd = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
      alert("Please enter both name, email, and select an image.");
      return; // Early return if fields are empty
    }

    // Call the addContactHandler prop function (assuming it exists)
    props.addcontacthandler({ name, email , phone});

    // Clear the form after successful submission
    setName("");
    setEmail("");
    setphone("");
    //setImage(null);

    navigate("/"); // Navigate to the desired route (home?)
  };

  // const handleImageChange = (e) => {
  //   const selectedImage = e.target.files[0];
  //   setImage(selectedImage);
  // };

  return (
    <div>
      <div className="main">
        <h2 className="head">Add Contact</h2>
        <form onSubmit={handleAdd}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name" // Add id for accessibility
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email" // Add id for accessibility
            />
          </div>
          <div className="field">
            <label htmlFor="Mobile No.">Mobile No</label>
            <input
              type="text"
              name="Mobile No."
              placeholder="Mobile No."
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              id="Mobile No." // Add id for accessibility
            />
          </div>
          {/* <div className="field">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
              id="image" // Add id for accessibility
            />
          </div> */}
          <button className="button">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
