import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import '../OrderPage.css';
import TrainElement from "./TrainElement/TrainElement";
import PageChanger from "../../../Elements/PageChanger";

import { stageChange } from "../../../../slices/stageSlice";
import { fetchRoutes } from "../../../../slices/routeSlice";
import { filterChange } from "../../../../slices/filterSlice";

export default function TrainSelection() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.routes.total_count);
  const trains = useSelector((state) => state.routes.routes);
  const filter = useSelector((state) => state.filter);
  const search = useSelector((state) => state.search)
  const { sort, limit } = filter;
  const limits = [5, 10, 20];

  useEffect(() => {
    dispatch(stageChange({ stage: 1 }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchRoutes())
  }, [filter, search, dispatch]);

  const handleChange = (name, value) => {
    dispatch(filterChange({ name, value }));
  };

  return (
    <section className="train">
      <div className="train-header">
        <div className="train-header-found">
          найдено: {count}
        </div>
        <form className="train-header-sort">
          <div className="train-header-sort-header">сортировать по:</div>
          <select className="train-header-sort-select" name="sort" value={sort} onChange={(e) => handleChange(e.target.name, e.target.value)}>
            <option className="train-header-sort-select-item" value="time">времени</option>
            <option className="train-header-sort-select-item" value="price">стоимости</option>
            <option className="train-header-sort-select-item" value="duration">длительности</option>
          </select>
        </form>
        <div className="train-header-list">
          <div className="train-header-list-filter">показывать по:</div>
          <ul className="train-header-list-options">
            {limits.map((el) => (
              <li
                className={`train-header-list-options-item ${limit === el ? "train-header-list-options-item--active" : ""
                  }`}
                key={el}
                onClick={() => handleChange('limit', el)}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="train-header-elements">
        {
          trains && trains.map((el) => (
            <li key={nanoid()}>
              <TrainElement train={el} />
            </li>
          )
          )
        }
      </ul>

      <PageChanger />
      
    </section>
  )
}
