/**
 *
 * @typedef {object} todoitem
 * @description todo의 객체
 * @property {string} id — 유저 ID
 * @property {string} content - 할일
 * @property {boolean} isDone - 성공여부
 * @property {string} category — 카테고리
 * @property {string[]} tags — 태그
 */

interface todoitem {
  id: string
  content: string
  isDone: boolean
  category: string
  tags?: string[]
}

interface createTodo {
  (todo: todoitem): void
}

interface getTodo {
  (id: string): todoitem
}

interface updateTodo {
  (todo: todoitem): void
}

interface deleteTodo {
  (id: string): void
}

interface deleteTodoTags {
  (id: string, tags?: string[]): void
}

/** 이하 구현 */

class todoList {
  list: todoitem[]
  constructor() {
    this.list = []
  }

  createTodo: createTodo = (todo: todoitem) => {
    this.list.push(todo)
  }

  getTodo: getTodo = (id: string) => {
    const findTodo = this.list.filter((ele) => {
      if (ele.id === id) return ele
      else return []
    })
    return findTodo[0]
  }

  updateTodo: updateTodo = (todo: todoitem) => {
    const todoIndex = this.list.findIndex((ele) => {
      return ele.id === todo.id
    })
    this.list[todoIndex] = { ...todo }
  }

  deleteTodo: deleteTodo = (id: string) => {
    const todoIndex = this.list.findIndex((ele) => {
      return ele.id === id
    })
    this.list.splice(todoIndex, 1)
  }
}
