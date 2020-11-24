import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { filterTask } from '../actions/index';

const TaskFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.active.filter);

  const filterTaskClick = (e) => {
    dispatch(filterTask(e.target.dataset.value));
  };

  const titles = {
    all: 'Список всех задач',
    active: 'Список активных задач',
    completed: 'Список завершенных задач',
  };

  const allBtn = classNames(
    'btn btn-success btn-sm mr-3', { active: filter === 'all', disabled: filter !== 'all' },
  );
  const activeBtn = classNames(
    'btn btn-success btn-sm mr-3', { active: filter === 'active', disabled: filter !== 'active' },
  );
  const completedBtn = classNames(
    'btn btn-success btn-sm mr-3', { active: filter === 'completed', disabled: filter !== 'completed' },
  );

  return (
    <div>
      <div className="row pt-3 pb-5">
        <div className="col-12">
          <h3>Фильтр:</h3>
        </div>
      </div>
      <div className="row">
        <ul className="nav nav-pills nav-fill">
          <button data-value="all" type="button" className={allBtn} onClick={filterTaskClick}>ВСЕ</button>
          <button data-value="active" type="button" className={activeBtn} onClick={filterTaskClick}>АКТИВНЫЕ</button>
          <button data-value="completed" type="button" className={completedBtn} onClick={filterTaskClick}>ЗАВЕРШЕННЫЕ</button>
        </ul>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 className="text-center p-3">
            {titles[filter]}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TaskFilter;
