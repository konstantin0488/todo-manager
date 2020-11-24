import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeTask, completeTask, editTaskForm,
} from '../actions/index';
import TaskEditForm from './TaskEditForm';
import TaskFilter from './TaskFilter';

const TaskAll = () => {
  const dispatch = useDispatch();

  const allTask = useSelector((state) => state.tasks);
  const allTaskArray = Object.values(allTask);

  const filterValue = useSelector((state) => state.active.filter);

  const filteredTasks = allTaskArray.filter((task) => {
    if (filterValue === 'active') return !task.isComplited;
    if (filterValue === 'completed') return task.isComplited;
    return task;
  });

  const removeTaskClick = (id) => () => {
    dispatch(removeTask(id));
  };

  const completeTaskClick = (id) => () => {
    dispatch(completeTask(id));
  };

  const editTaskClick = (id) => () => {
    dispatch(editTaskForm(id));
    // dispatch(activeTask(id));
  };

  return (
    <div>
      <div>
        <TaskFilter />
      </div>
      <div className="row">
        <div className="col-12">
          <ul className="list-group">
            {
              filteredTasks.map((task) => (
                <li key={task.id} className={task.isComplited ? 'list-group-item shadow p-3 mb-5 bg-success rounded text-white' : 'list-group-item shadow p-3 mb-5 bg-white rounded text-dark'}>
                  <div>
                    { task.isEdit
                      ? (
                        <div>
                          <TaskEditForm
                            taskId={task.id}
                            initialValues={{
                              taskName: task.taskName,
                              taskDescrip: task.taskDescrip,
                            }}
                          />
                        </div>
                      )
                      : (
                        <div>
                          <h4>{task.taskName}</h4>
                          <p>{task.taskDescrip}</p>
                        </div>
                      )}
                  </div>
                  <button type="button" className="btn btn-success btn-sm mr-3" onClick={completeTaskClick(task.id)}>{task.isComplited ? 'Активировать задачу' : 'Завершить задачу'}</button>
                  <button type="button" className="btn btn-danger btn-sm" onClick={removeTaskClick(task.id)}>Удалить задачу</button>
                  <button type="button" className="btn btn-default btn-lg float-right" onClick={editTaskClick(task.id)}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className={task.isComplited ? 'bi bi-pencil-square text-white' : 'bi bi-pencil-square'} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                  </button>
                </li>
              ))
              }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskAll;
