export const getAllNumbers = store => store.contacts;


export const getFilterContacts = store => {
    const {contacts,filter} = store;
    if (!filter) {
        return contacts;
      }
      const normalizedFilter = filter.toLowerCase();
      const filterContacts = contacts.filter(({ name, number }) => {
        const normalizedName = name.toLowerCase();
        const normalizednumber = number.toLowerCase();
  
        return (
          normalizedName.includes(normalizedFilter) ||
          normalizednumber.includes(normalizedFilter)
        );
      });
      return filterContacts;
}