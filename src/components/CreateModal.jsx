import React, { useState } from 'react';
import api from '../api';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function GroupFormModal({ access_token }) {
  const [formData, setFormData] = useState({
    name: '',
    major: '',
    whatsAppLink: ''
  });
  const [isOpen, setIsOpen] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!access_token) {
      console.error('Access token is missing!');
      return;
    }

    try {
      const response = await fetch('/api/groups/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Handle successful creation
        alert('Group created successfully!');
        // Optionally, you can redirect the user or perform any other actions here
      } else {
        // Handle error response
        console.error('Failed to create group:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating group:', error.message);
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <h2>Create a Group</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="major">Major:</label>
                  <input type="text" id="major" name="major" value={formData.major} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="whatsAppLink">WhatsApp Link:</label>
                  <input type="url" id="whatsAppLink" name="whatsAppLink" value={formData.whatsAppLink} onChange={handleChange} required />
                </div>
                <button type="submit">Create Group</button>
              </form>
            </div>
          </div>
        </div>
      )}
      <AddCircleOutlineIcon onClick={toggleModal} style={{ cursor: 'pointer' }} />
    </>
  );
}

export default GroupFormModal;
