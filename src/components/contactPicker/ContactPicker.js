import React from "react";

export const ContactPicker = ({ name, contacts, onChange}) => {
  return (
    <select name={name} onChange={onChange} id="contactList">
        <option value={""} key={-1}>
          No Contact Selected
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
