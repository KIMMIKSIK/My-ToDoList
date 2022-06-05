# My-ToDoList
### 자바스크립트 실습 공부를 본격적으로 시작하면서 만들게 된 2번째 프로젝트입니다. 
#### 오늘 하루 해야할 일들을 정리하여 관리할 수 있는 list입니다.

![image](https://user-images.githubusercontent.com/98815511/159712238-73cf75b9-d436-43c4-a0a8-ec08e261a19f.png)


1. 운동, 공부, 취미 등 내가 오늘 해야할 일들을 input창에 입력하고 +버튼을 통해 등록합니다. 
2. +버튼을 누르면 task-list가 하나씩 추가되고 render함수를 통해 화면에 그려줍니다.
3. 선택(체크) 버튼을 누르면 글씨에는 취소선이 생기고 배경은 회색이됩니다.
4. 취소(휴지통) 버튼을 누르면 해당 내용이 삭제됩니다.
5. 진행중 버튼을 누르면 취소선이 없는 내용들만 나오게된다.
6. 리스트를 생성해 객체를 담고 각 객체 프로퍼티의 상태를 체크마크 클릭에 따라 true,false로 조정하여 취소와 진행중을 구분하였다.
7. 완료 버튼을 누르면 취소선이 생긴(true) 내용만 나오게 됩니다.
8. 모두 진행중 완료 3곳 모두에서 내용을 삭제 할 수 있습니다.
9. task list와 filter list 2개의 리스트를 생성해 조건문을 사용하여 객체 프로퍼티 상태에 따라 
둘 중 어느리스트를 사용하여 render할 것인지 선택하였습니다. 그 후 수정된 내용이 서로 공유되도록
하였습니다.
10. enter키를 사용해서도 내용 입력이 가능하게 하였습니다.

- 공부하면서 브라우저의 좌표 개념을 처음 알게 되었고 이를 활용하여 다양한 동작을 구현해 낼 수 있다는 생각이 들었습니다.

___

**skill: html,css,vanilla javascript**

참조: https://msiktodolist.netlify.app/
