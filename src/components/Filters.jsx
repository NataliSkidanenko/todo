import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../rdx/filter/filter-actions";
import { selectFilter } from "../rdx/filter/filter-selectors";

export default function Filters() {
  const activeFilter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className="filters">
      <button
        onClick={() => dispatch(setFilter("all"))}
        className={activeFilter === "all" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter("active"))}
        className={activeFilter === "active" ? "active" : ""}
      >
        Active
      </button>
      <button
        onClick={() => dispatch(setFilter("complited"))}
        className={activeFilter === "complited" ? "active" : ""}
      >
        Complited
      </button>
    </div>
  );
}
