# По приложению

1. Баг - когда открываешь одновременно 2 задачи на редактирование - после нажатия на "Готово" - выкидывает ошибку. Нужно имеь возможность редактировать 2 задачи одновременно.

# По коду

1. (OK)`[actions.removeTask](state, { payload })` - payload - общее название. Например:
```
[actions.removeTask](state, { payload: id }) {
```

dispatch(addTask({ title: 'test', name: 'test' }));

[actions.addTask](state, { payload: { title, name } }) {

2. (OK)ФОРМАТИРОВАНИЕ КОДА!
3. (OK)- TaskAddForm.jsx - сброс формы пересмотреть. Посмотреть form.restart(), вместо form.reset()
4. (OK)TaskAll.jsx - 
```
 const filteredTasks = allTaskArray.filter((task) => {
    if (filterValue === 'active') return task.isComplited === false;
    if (filterValue === 'completed') return task.isComplited === true;
    return task;
  });
```

Пересмотреть фильтрацию. Нужно упростить

5. !!!!! Посмотри 2 бибилотеки classnames и clsx. Это библиотеки для формирования имен классов. 
6. (OK)ESLint подрубить
7. (OK)-Старайся отказываться от множественных условий рендера. Например:
    {filter === 'all' ? 'Cписок всех задач' : ''}
    {filter === 'active' ? 'Cписок активных задач' : ''}
    {filter === 'completed' ? 'Cписок завершенных задач' : ''}

