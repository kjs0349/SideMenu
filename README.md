# SideMenu
 
![SideMenu_revise5](https://user-images.githubusercontent.com/61913417/104047296-c86fc300-5224-11eb-8e6d-1ca1a4442d2e.gif)

제가 크롬에 북마크 사이드바 확장 프로그램을 쓰는데 이걸 만들어 보면 어떨까 해서 간단하게 만들어 봤습니다!!


### 구상 과정과 구현
1. 버튼 클릭시 옆에서 사이드 메뉴가 나오게 하고 싶다
	- [html] label을 통해 메뉴 아이콘과 글씨를 묶어 줘서 어디를 클릭해도 선택되도록 한다.
    - [css] position 속성을 이용해 사이드바에 left: -200px 을 주어 화면 밖 왼쪽에 숨겨둔다.
    - [javascript] 이벤트 함수 'click'를 통해 '클릭'시 사이드바의 position에 left 값을 0을 주어 화면에 보이도록 하고 메뉴 버튼이 보이면 안되므로 label에 opacity 값을 0을 주어 안보이게 했다.

2. 빈 공간 클릭시 사이드 메뉴가 닫히고 메뉴 버튼 다시 생성
	- [javascript] 이벤트 함수 'blur'을 통해 '포커스 아웃'시 사이드바 position에 다시 left: -200px 을 주어 화면 밖 왼쪽으로 숨기고 메뉴 버튼이 다시 보여야 하므로 opacity 값을 1을 주어 다시 보이게 한다.
    
	※ 포커스 아웃이 발생 될 때 쓰이는 이벤트에는 focusout과 blur가 있는데 둘의 차이점은 focusout은 버블링이 발생해 이벤트가 발생한 요소부터 window 까지 이벤트를 전파하고 blur은 버블링이 발생하지 않아 원하는 타겟에만 이벤트를 줄 수 있다.
