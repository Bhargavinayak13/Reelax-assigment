import { useState } from 'react';
import FormField from '../common/FormField';
import SelectField from '../common/SelectField';
import styles from './BillingForm.module.css';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
];

const MAJOR_CITIES = {
  Telangana: ['Hyderabad', 'Warangal', 'Nizamabad'],
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
  Karnataka: ['Bengaluru', 'Mysuru', 'Hubli'],
};

export default function BillingForm() {
  const [form, setForm] = useState({
    companyName: 'abhigyan',
    email: 'abhigyan.pandey@getrealax.com',
    gst: '',
    pan: '',
    premise: '',
    street: '',
    state: '',
    city: '',
    country: 'India',
    pinCode: '',
  });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const cities = form.state ? (MAJOR_CITIES[form.state] || []) : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Details saved!');
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Review your details</h1>
      <hr className={styles.divider} />
      <p className={styles.sectionTitle}>Billing Information</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.row}>
          <FormField label="Company Name">
            <input
              className={styles.input}
              type="text"
              placeholder="Company Name"
              value={form.companyName}
              onChange={handleChange('companyName')}
            />
          </FormField>
          <FormField label="Email">
            <input
              className={styles.input}
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange('email')}
            />
          </FormField>
        </div>

        <div className={styles.row}>
          <FormField label="GST Number" optional>
            <input
              className={styles.input}
              type="text"
              placeholder="GST Number"
              value={form.gst}
              onChange={handleChange('gst')}
            />
          </FormField>
          <FormField label="PAN Number" optional>
            <input
              className={styles.input}
              type="text"
              placeholder="PAN Number"
              value={form.pan}
              onChange={handleChange('pan')}
            />
          </FormField>
        </div>

        <div className={styles.row}>
          <FormField label="Premise/House no.">
            <input
              className={styles.input}
              type="text"
              placeholder="Premise/House no."
              value={form.premise}
              onChange={handleChange('premise')}
            />
          </FormField>
          <FormField label="Street">
            <input
              className={styles.input}
              type="text"
              placeholder="Street"
              value={form.street}
              onChange={handleChange('street')}
            />
          </FormField>
        </div>

        <div className={styles.row}>
          <FormField label="State">
            <SelectField
              value={form.state}
              onChange={handleChange('state')}
              placeholder="Select state"
              options={INDIAN_STATES}
            />
          </FormField>
          <FormField label="City">
            <SelectField
              value={form.city}
              onChange={handleChange('city')}
              placeholder="Select city"
              options={cities}
              disabled={!form.state}
            />
          </FormField>
        </div>

        <div className={styles.row}>
          <FormField label="Country">
            <input
              className={styles.input}
              type="text"
              value={form.country}
              onChange={handleChange('country')}
            />
          </FormField>
          <FormField label="Pin Code">
            <input
              className={styles.input}
              type="text"
              placeholder="Pincode"
              value={form.pinCode}
              onChange={handleChange('pinCode')}
              maxLength={6}
            />
          </FormField>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.btnCancel}>
            Cancel
          </button>
          <button type="submit" className={styles.btnSave}>
            Save Details
          </button>
        </div>
      </form>
    </div>
  );
}
