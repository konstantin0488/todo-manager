import React from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { submitEditForm, activeTask } from '../actions/index';

const TaskEditForm = () => {
  const dispatch = useDispatch();

  const activeTaskId = useSelector((state) => state.active.isActive);
  const tasks = useSelector((state) => state.tasks);

  const addEditTaskSubmit = (values) => {
    dispatch(submitEditForm({ [activeTaskId]: { id: activeTaskId, ...values } }));
    dispatch(activeTask(null));
  };

  return (
    <Form
      onSubmit={addEditTaskSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <div className="form-group">
              <Field
                type="text"
                component="input"
                className="form-control"
                name="taskName"
                initialValue={tasks[activeTaskId].taskName}
              />
            </div>
            <div className="form-group">
              <Field
                type="text"
                component="input"
                className="form-control"
                name="taskDescrip"
                initialValue={tasks[activeTaskId].taskDescrip}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-sm mt-3 mb-3 btn-warning">ГОТОВО</button>
        </form>
      )}
    />
  );
};

export default TaskEditForm;
