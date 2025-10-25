import React, { useState } from 'react';
import Theme from '../Them/Theme';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueType: '',
    issueDescription: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'my key',
          ...formData,
        }),
      });

      const result = await response.json();
      console.log(result); // Debugging
      if (result.success) {
        alert('Issue reported successfully!');
        setFormData({ name: '', email: '', issueType: '', issueDescription: '' });
      } else {
        alert('Failed to report the issue. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Theme>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <div
            className="w-[80vw] p-8 bg-white rounded-lg shadow-lg border-2 border-[#3e2c1d]"
            style={{
              background: 'linear-gradient(135deg, #F4E5C2, #EBDBB9)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <h2
              className="text-center text-3xl font-bold text-[#3E2C1D] mb-6"
              style={{ fontWeight: 'bold' }}
            >
              Report Your Issue
            </h2>
            <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="39c40613-05ef-4f9c-85c2-14987e7f86c9" />

              <div className="mb-6">
                <label htmlFor="name" className="block text-[#3E2C1D] font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#D4AF37] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] transition-all"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-[#3E2C1D] font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#D4AF37] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] transition-all"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="issueType" className="block text-[#3E2C1D] font-semibold mb-2">
                  Issue Type
                </label>
                <select
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#D4AF37] rounded-lg bg-[#F4E5C2] focus:outline-none focus:ring-2 focus:ring-[#6B4423] transition-all"
                >
                  <option value="" disabled>
                    Select an issue type
                  </option>
                  <option value="Technical Issue">Technical Issue</option>
                  <option value="Account Issue">Account Issue</option>
                  <option value="Hackerthon Query">Hackerthon Query</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="issueDescription"
                  className="block text-[#3E2C1D] font-semibold mb-2"
                >
                  Issue Description
                </label>
                <textarea
                  name="issueDescription"
                  value={formData.issueDescription}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-[#D4AF37] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 text-lg font-semibold text-white rounded-lg transition-all ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#3E2C1D] hover:bg-[#6B4423]'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Issue'}
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </Theme>
    </>
  );
}

export default ContactForm;
