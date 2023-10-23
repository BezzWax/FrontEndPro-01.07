import { createStore } from 'redux';

const initialState = {
	tasks: []
};

const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TASK':
			return {
				...state,
				tasks: [...state.tasks, { text: action.payload, completed: false }]
			};
		case 'TOGGLE_TASK':
			return {
				...state,
				tasks: state.tasks.map((task, index) =>
					index === action.payload
						? { ...task, completed: !task.completed }
						: task
				)
			};
		case 'DELETE_TASK':
			return {
				...state,
				tasks: state.tasks.filter((_, index) => index !== action.payload)
			};
		default:
			return state;
	}
};

const store = createStore(tasksReducer);

export default store;
