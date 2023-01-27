export const filterTypes = {all: 'ALL', active: 'ACTIVE', complited: 'COMPLITED'};

export const filter = (state = filterTypes.all, action) => {
    switch (action.type) {
        case 'SET_FILTER': {
            return action.filter;
        }

        default: {
            return state;
        }
    }
};
