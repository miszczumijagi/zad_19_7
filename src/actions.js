import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}


export function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id
	}
}

export function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id
	}
}

