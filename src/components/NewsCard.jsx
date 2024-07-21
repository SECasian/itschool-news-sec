import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./NewsCard.css";
import { removeFromFavorites } from "../store/favorites/actions";
import { FavoritesContext } from "../store/favorites/context";
import { addToFavorites } from "../store/favorites/actions";

function NewsCard(props) {
  const { dispatch } = useContext(FavoritesContext);
  const { newsId, imgSrc, title, description, hasCloseButton, thumbnail } =
    props;

  function handleRemoveFromFavorites(newsId) {
    const actionResult = removeFromFavorites(newsId);
    dispatch(actionResult);
  }
  function handleAddToFavorites(news) {
    const actionResult = addToFavorites(news);
    dispatch(actionResult);
  }

  return (
    <Card className="card h-100">
      <Link to={`/news/${encodeURIComponent(newsId)}`}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </Card.Text>
        </Card.Body>
      </Link>
      {hasCloseButton ? (
        <Button
          variant="light"
          className="removeFromFavorites"
          onClick={() => {
            console.log(handleRemoveFromFavorites);
            handleRemoveFromFavorites(newsId);
          }}
        >
          <span className="close-btn material-icons text-dark">close</span>
        </Button>
      ) : (
        <Button
          className="heart"
          onClick={() => {
            handleAddToFavorites({
              id: newsId,
              thumbnail,
              title,
              description,
              hasCloseButton: true,
            });
          }}
        >
          <span className="favorites-btn material-symbols-outlined">
            favorite
          </span>
        </Button>
      )}
    </Card>
  );
}

export default NewsCard;
