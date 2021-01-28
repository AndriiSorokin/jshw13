import refs from "./refs";


export default {
  apiKey :"18623550-dab6c274e7256e60b198db2a4",
  baseUrl :"https://pixabay.com/api/",
  searchQuery: '',
  page: 1,
  perPage: 12,
  fetchImages() {
    const url = `${this.baseUrl}?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${this.apiKey}`;
    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
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

