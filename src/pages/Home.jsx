import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import NewsCardList from "../components/NewsCardList";
import { getNewsList } from "../api/adaptors";
import { Link } from "react-router-dom";

function Home() {
  const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 6);
  const sportNewsEndpoint = getNewsCategoriesEndpoint("sport", 1, 6);
  const generalNewsEndpoint = getNewsCategoriesEndpoint("world", 1, 6);
  const travelNewsEndpoint = getNewsCategoriesEndpoint("travel", 1, 6);

  let generalData = useFetch(generalNewsEndpoint);
  let technologyData = useFetch(technologyNewsEndpoint);
  let sportData = useFetch(sportNewsEndpoint);
  let travelData = useFetch(travelNewsEndpoint);

  const adaptedGeneralData = getNewsList(generalData);
  const adaptedTechnologyData = getNewsList(technologyData);
  const adaptedSportData = getNewsList(sportData);
  const adaptedTravelData = getNewsList(travelData);

  return (
    <Layout>
      <section className="general my-5">
        <Container>
          <h1 className="mb-5 pt-3">World</h1>
          <NewsCardList newsList={adaptedGeneralData} />
          <p>
            See all news from{" "}
            <Link to="/category/world" className="text-secondary">
              World
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="tech my-5">
        <Container>
          <h1 className="mb-5 pt-3">Tech</h1>
          <NewsCardList newsList={adaptedTechnologyData} />
          <p>
            See all news from{" "}
            <Link to="/category/technology" className="text-secondary">
              Tech
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="tech my-5">
        <Container>
          <h1 className="mb-5 pt-3">Travel</h1>
          <NewsCardList newsList={adaptedTravelData} />
          <p>
            See all news from{" "}
            <Link to="/category/travel" className="text-secondary">
              Travel
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="sport my-5">
        <Container>
          <h1 className="mb-5 pt-3">Sport</h1>
          <NewsCardList newsList={adaptedSportData} />
          <p>
            See all news from{" "}
            <Link to="/category/sport" className="text-secondary">
              Sport
            </Link>
            .
          </p>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
