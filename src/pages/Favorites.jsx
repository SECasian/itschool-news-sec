import React, { useContext } from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { FavoritesContext } from "../store/favorites/context";
import NewsCardList from "../components/NewsCardList";

function Favorites() {
  const { state } = useContext(FavoritesContext);

  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">Favorites</h1>
        {state.news.length > 0 ? (
          <NewsCardList newsList={state.news} />
        ) : (
          <p>No favorites news yet!</p>
        )}
      </Container>
    </Layout>
  );
}

export default Favorites;
