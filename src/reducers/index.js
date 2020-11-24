import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { uniqueId, omitBy } from 'lodash';
import * as actions from '../actions/index';

const tasks = handleActions({
  [actions.addTask](state, { payload: task }) {
    const newId = uniqueId();
    return {
      ...state,
      [newId]: {
        id: newId,
        ...task,
        isComplited: false,
        isEdit: false,
      },
    };
  },

  [actions.removeTask](state, { payload: taskId }) {
    return omitBy(state, (value) => value.id === taskId);
  },

  [actions.completeTask](state, { payload: taskId }) {
    return {
      ...state,
      [taskId]: { ...state[taskId], isComplited: !state[taskId].isComplited },
    };
  },

  [actions.editTaskForm](state, { payload: taskId }) {
    return {
      ...state,
      [taskId]: { ...state[taskId], isEdit: !state[taskId].isEdit },
    };
  },

  [actions.submitEditForm](state, { payload: editTask }) {
    return {
      ...state,
      ...editTask,
    };
  },

}, {});

const active = handleActions({
  [actions.activeTask](state, { payload: id }) {
    return {
      ...state,
      isActive: id,
    };
  },

  [actions.filterTask](state, { payload: btnDataSetValue }) {
    return {
      ...state,
      filter: btnDataSetValue,
    };
  },

}, { isActive: null, filter: 'all' });

export default combineReducers({
  tasks,
  active,
});
