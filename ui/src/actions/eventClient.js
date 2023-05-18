import api from "./api";

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL',

}

export const fetchAll = (props) => dispatch => {
    api.eventClient().fetchAll()
        .then(
            response => {
                dispatch({
                    type: ACTION_TYPES.FETCH_ALL,
                    payload: response.data
                })
                // console.log(props);
                return props = response.data
            }
        )
        .catch(err => console.error(err))
}

export const create = (data, onSuccess) => dispatch => {
    api.eventClient().create(data)
        .then(
            response => {
                dispatch({
                    type: ACTION_TYPES.CREATE,
                    payload: response.data
                })
                onSuccess()
            })
        .catch(err => console.error(err))
}

export const update = (id, data, onSuccess) => dispatch => {
    api.eventClient().update(id, data)
        .then(
            response => {
                dispatch({
                    type: ACTION_TYPES.UPDATE,
                    payload: { id, ...data }
                })
                onSuccess()
            })
        .catch(err => console.error(err))
}

export const Delete = (id, onSuccess) => dispatch => {
    api.eventClient().delete(id)
        .then(
            response => {
                dispatch({
                    type: ACTION_TYPES.DELETE,
                    payload: id
                })
                onSuccess()
            })
        .catch(err => console.error(err))
}