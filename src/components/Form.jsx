import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setFilter} from '../rdx/filter/filter-actions';
import {filterTypes} from '../rdx/filter/filter-reducer';
import {selectFilter} from '../rdx/filter/filter-selectors';
import {addTodo} from '../rdx/todo/todo-actions';

export default function Form() {
    const dispatch = useDispatch();
    const activeFilter = useSelector(selectFilter);
    const {all, active, complited} = filterTypes;
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(e.target.task.value));
        e.target.reset();
        if (activeFilter === complited) {
            dispatch(setFilter(active));
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="task-input"
                type="text"
                name="task"
                placeholder="Enter your new task"
            />
            <button className="add-button">Add a new task</button>
        </form>
    );
}
