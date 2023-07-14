import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CartState } from "../Context/Context";
import Rating from "./Rating";
const Filter = () => {
  const {
    productsState: { byStock, byQuickDelivery, sort, byRating },
    productsDispatch,
  } = CartState();
  return (
    <div
      style={{ minHeight: "90vh", background: "grey" }}
      className="rounded p-3"
    >
      <h2>Filter Component</h2>
      <Form>
        <Form.Check
          type="radio"
          label="A-Z"
          name="group1"
          className="my-4"
          onChange={() =>
            productsDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
        <Form.Check
          type="radio"
          label="Z-A"
          name="group2"
          className="my-4"
          onChange={() =>
            productsDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
        <Form.Check
          type="checkbox"
          label="Include Out of Stock"
          name="out-of-stock"
          className="my-4"
          onChange={() =>
            productsDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
        <Form.Check
          type="checkbox"
          label="Include Quick Delivery"
          name="quick-delivery"
          className="my-4"
          onChange={() =>
            productsDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byQuickDelivery}
        />
        <div className="my-3">
          <Rating
            rating={byRating}
            onClick={(i) =>
              productsDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
              })
            }
            style={{ cursor: "pointer" }}
          />
        </div>
        <Button
          variant="primary"
          onClick={() =>
            productsDispatch({
              type: "CLEAR_FILTERS",
            })
          }
        >
          Clear Filter
        </Button>
      </Form>
    </div>
  );
};

export default Filter;
