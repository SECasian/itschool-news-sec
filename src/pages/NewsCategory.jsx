import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { getNewsList } from "../api/adaptors";
import NewsCardList from "../components/NewsCardList";
import CustomPagination from "../components/CustomPagination";

function NewsCategory() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { categoryId } = useParams();
  const newsCategoryEndpoint = getNewsCategoriesEndpoint(
    categoryId,
    currentPage
  );
  const news = useFetch(newsCategoryEndpoint);
  const adaptedNewsList = getNewsList(news);

  searchParams.get("page");

  let title = "";
  switch (categoryId) {
    case "technology":
      title = "Tech";
      break;
    case "sport":
      title = "Sport";
      break;
    case "world":
      title = "General";
      break;
    case "travel":
      title = "Travel";
      break;
    default:
      break;
  }

  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">{title}</h1>
        <NewsCardList newsList={adaptedNewsList} />
        <CustomPagination
          active={currentPage}
          baseUrl={`/category/${categoryId}`}
        />
      </Container>
    </Layout>
  );
}

export default NewsCategory;
