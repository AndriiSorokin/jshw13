import refs from "./refs";
const apiKey = "18623550-dab6c274e7256e60b198db2a4";
const baseUrl = "https://pixabay.com/api/";

export default {
  searchQuery: '',
  page: 1,
  perPage: 12,
  fetchImages() {
    const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&key=${apiKey}`;
    return fetch(url)
      .then(res => res.json())
      .then(({ images }) => {
        this.incrementPage();
        return images;
      });
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
