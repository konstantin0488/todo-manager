/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/index';

const TaskAddForm = () => {
  const dispatch = useDispatch();

  const addTaskSubmit = (values, form) => {
    dispatch(addTask(values));
    setTimeout(form.reset, 0);
  };

  return (
    <Form
      onSubmit={addTaskSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="taskName">Введите название:</label>
            <Field
              type="text"
              component="input"
              className="form-control"
              name="taskName"
              placeholder="Сделать первый шаг в проекте"
            />
          </div>
          <div className="form-group">
            <label htmlFor="taskDescrip">Введите описание:</label>
            <Field
              type="text"
              component="input"
              className="form-control"
              name="taskDescrip"
              placeholder="Нужно успеть до 6 утра"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={submitting || pristine}
            >
              Добавить задачу
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default TaskAddForm;
