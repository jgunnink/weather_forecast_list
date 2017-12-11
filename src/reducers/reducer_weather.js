import { FETCH_WEATHER } from "../actions/index"
export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			return [action.payload.data].concat(state)
		// Alternative to this could be [ action.payload.data, ...state ]
	}
	return state
}
