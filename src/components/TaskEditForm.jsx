import React from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { submitEditForm, editTaskForm } from '../actions/index';

// eslint-disable-next-line react/prop-types
const TaskEditForm = ({ initialValues, taskId }) => {
  const dispatch = useDispatch();

  // const tasks = useSelector((state) => state.tasks);

  const addEditTaskSubmit = (values) => {
    dispatch(submitEditForm({ [taskId]: { id: taskId, ...values, isEdit: true } }));
    dispatch(editTaskForm(taskId));
  };

  return (
    <Form
      initialValues={initialValues}
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
              />
            </div>
            <div className="form-group">
              <Field
                type="text"
                component="input"
                className="form-control"
                name="taskDescrip"
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
