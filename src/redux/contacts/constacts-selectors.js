export const selectAllNumbers = store => store.contacts.contact;

export const selectFilterContacts = store => {
  const { contacts, filter } = store;
  const { contact, isLoading, error } = contacts;
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const filterContacts = contact.filter(({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const normalizednumber = number.toLowerCase();

    return (
      normalizedName.includes(normalizedFilter) ||
      normalizednumber.includes(normalizedFilter)
    );
  });
  return {
    contact: filterContacts,
    isLoading,
    error,
  };
};
