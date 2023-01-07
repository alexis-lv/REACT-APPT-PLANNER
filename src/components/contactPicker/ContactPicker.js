import React from "react";
import PropTypes from 'prop-types'

export const ContactPicker = ({ name, contacts, onChange}) => {
  return (
    <select name={name} onChange={onChange} id="contactList">
        <option value={""} key={-1}>
          Appointment With
        </option>
        {contacts.map((contact, index) => {
          return (
            <option key={index} value={contact}>
              {contact}
            </option>
          )
        })}
    </select>
  );
};

ContactPicker.propTypes = {
  name: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}
