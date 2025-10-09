import React from "react";
import type { Contact } from "../../../types";

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const formattedDate = new Date(contact?.created_at).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {contact.name}
        </h2>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          {formattedDate}
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {contact.email}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        {contact.message}
      </p>
    </div>
  );
};

export default ContactCard;
