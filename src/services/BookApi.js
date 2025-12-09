
const BASE_URL = 'https://www.dbooks.org/api';

export class BookApi {
  static async getPopularBooks() {
    try {
      const response = await fetch(
        `${BASE_URL}/recent`
      );
      const data = await response.json();

      console.log(data);
      

      return data.books.map(book => ({
        id: book.id,
        title: book.title,
        year: book.subtitle,
        image: book.image,
        description: book.authors,
        rating: book.url
      }));
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  }
}