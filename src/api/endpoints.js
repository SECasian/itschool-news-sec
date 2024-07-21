const API_KEY = "3041748f-c5fe-4686-866c-4c57b4b69ca0";

export function getNewsCategoriesEndpoint(
  category,
  pageNumber = 1,
  pageSize = 21
) {
  const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`;

  return `https://content.guardianapis.com/search${queryParams}`;
}

export function getNewsDetailsEndpoint(newsId) {
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;

  return `https://content.guardianapis.com/${newsId}${queryParams}`;
}
