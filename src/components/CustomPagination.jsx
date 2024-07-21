import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import "./CustomPagination.css";

function CustomPagination(props) {
  const { active, baseUrl } = props;
  let navigate = useNavigate();

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          navigate(`${baseUrl}?page=${number}`);
          window.scrollTo({
            top: 0,
            behaviour: "smooth",
          });
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="d-flex justify-content-center">
      <Pagination className="Pagination">{items}</Pagination>
    </div>
  );
}

export default CustomPagination;
