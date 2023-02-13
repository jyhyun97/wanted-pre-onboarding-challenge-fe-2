/**
 * Todo App
 *
 * @author Sujeong Ku
 * @see {@link https://github.com/sujeong-dev/wanted-pre-onboarding-challenge-fe-2}
 *
 */

/**
 *
 * @typedef {object} todo
 * @description todo의 객체
 * @property {string} id — 유저 id
 * @property {string} content - 할일
 * @property {boolean} isDone - 성공여부
 * @property {string} category — 카테고리
 * @property {string[]} tags — 태그
 */

/**
 * Create todolist
 * @function
 * @param {string} id - 유저 id
 * @param {string} content - 할일
 * @param {boolean} isDone - 성공여부
 * @param {string} category - 카테고리
 * @param {string[]} tags - 태그
 * @throws content가 비어있다면 에러
 */
const createTodo = (id, content, isDone = false, category, tags = []) => {};

/**
 * Read todolist
 * @function
 * @param {string} id - 유저 id
 * @returns {object[]} 여러 todo객체의 배열형태
 */
const getTodo = (id) => {};

/**
 * Update todolist.
 * @function
 * @param {string} id - 유저 id
 * @param {string} content - 할일
 * @param {string} category - 카테고리
 * @param {string[]} tags - 태그
 * @returns {void}
 * @throws id를 수정한다면 에러
 */
const updateTodo = (id, content, isDone, tags = []) => {};

/**
 * Delete todolist
 * @function
 * @param {string} id - 유저 id
 * @returns {void}
 */
const deleteTodo = (id) => {};

/**
 * Delete specific tag
 * @function
 * @param {string} id - 유저 id
 * @param {string[]} tags - 태그
 * @returns {void}
 */
const deleteTodoTags = (id, tags = []) => {};
