import { createAction } from 'redux-actions';

export const addTask = createAction('TASK_ADD');

export const removeTask = createAction('TASK_REMOVE');

export const completeTask = createAction('TASK_COMPLETE');

export const submitEditForm = createAction('TASK_EDIT_SUBMIT');

export const editTaskForm = createAction('TASK_EDIT_FORM');

export const activeTask = createAction('TASK_ACTIVE');

export const filterTask = createAction('TASK_FILTER');
