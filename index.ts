interface Todo {
  id: Number
  content: String
  isFinished: Boolean
  category: String
  tags: String[]
}

interface TodoList {
  todoList: Todo[]
}

/**
 * CREATE
 * 주어진 데이터를 바탕으로 TodoList에 Todo객체를 추가한다.
 * id는 현재 TodoList에 있는 Todo 개수로 부여,
 * finished는 최초 생성 시 false를 기본으로 한다.
 * @param {String} content - 내용
 * @param {String} category - 카테고리
 * @param {String[]} tags - 태그들
 */
const createTodo = function (content, category, tags) {}

/**
 * READ - 모든 할 일을 조회할 수 있다.
 * @returns {Todo[]}
 */
const readTodo = function () {}

/**
 * READ - ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {Number} id - 아이디
 * @return {Todo}
 */
const readTodoById = function (id) {}

/**
 * UPDATE - ID를 제외한 모든 속성을 수정할 수 있다.
 * id를 기반으로 해당 Todo의 속성을 수정한다.
 * @param {Number} id - 아이디
 * @param {String} content - 내용
 * @param {Bool} isFinished - 완료여부
 * @param {String} category - 카테고리
 * @param {String[]} tags - 태그들
 */
const updateTodo = function (id, content, isFinished, category, tags) {}
/**
 * UPDATE - 특정 할 일의 특정 태그를 수정할 수 있다.
 * id 기반으로 특정 할 일의 tag에 해당하는 값을 newTag로 대체한다.
 * @param {Number} id
 * @param {String} tag
 * @param {String} newTag
 */
const updateTag = function (id, tag, newTag) {}

/**
 * DELETE - ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param {Number} id
 */
const deleteTodoById = function (id) {}

/**
 * DELETE - 모든 할 일을 제거할 수 있다.
 */
const deleteTodoAll = function () {}

/**
 * DELETE - 특정 할 일의 특정 태그를 삭제할 수 있다.
 * id를 기반으로 해당 Todo를 검색해 tag에 해당하는 데이터를 삭제한다.
 * @param {Number} id
 * @param {String} tag
 */
const deleteTag = function (id, tag) {}

/**
 * DELETE - 특정 할 일의 모든 태그를 제거할 수 있다.
 * id를 기반으로 해당 Todo의 모든 태그를 제거한다.
 * @param {Number} id
 */
const deleteTagAll = function (id) {}
