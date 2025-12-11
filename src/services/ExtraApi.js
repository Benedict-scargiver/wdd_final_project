export const ExtraApi = {
  async fetchCover(isbn) {
    if (!isbn) return null;
    // Open Library covers: https://covers.openlibrary.org/b/isbn/{ISBN}-L.jpg
    return `https://www.dbooks.org/api/book/{id}`;
  }
};