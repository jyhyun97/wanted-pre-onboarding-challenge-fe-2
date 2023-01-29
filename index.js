/**Todo */
class Todo {
  id = ''
  content = ''
  finished = false
  category = ''
  tags = []
}

/**TodoList */
class TodoList {
  todoList = []
}

/**CREATE */
//1. 내용 받아서 추가(contents)
//2. 내용 없이 추가()

/**READ */
//1. 모든 할 일을 조회()
//2. id 기반 특정 할 일 조회(id)

/**UPDATE */
//1. id기반으로 속성 수정(id, content, finished, category, tags)
//2. 특정 할 일의 특정 태그 수정(id, tag)

/**DELETE */
//1. id기반으로 특정 할 일 삭제하기(id)
//2. 모든 할 일 제거하기()
//3. 특정 할 일의 특정 태그 삭제하기 (id, 태그)
//4. 특정 할 일의 모든 태그 삭제 (id)
