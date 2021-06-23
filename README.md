# newspaper-layout

1. 위지위그: 깃허브 홈피

2. 터미널 모드(수동)
-로컬 저장소(현재 내 PC)
-원격 저장소(깃허브 repository)# newspaper-layout

3. 입력순서
 - echo "# newspaper-layout" >> README.md 생성
 - git init 로컬저장소 초기화
 - git branch -M main 저장소 > 브랜치 기본 경로 생성
 - git remote add origin (깃허브 소스주소) --> 원격저장소 설정
 

 - git add . 업데이트 할 파일 등록
 - git status 업데이트 대기 등록된 파일 확인(new 초록색으로 보임)
 - git config --global user.email  --> 깃허브 계정이메일 주소 --> 인증(처음에만 하면 됨)

 - git commit -m " 첫 업로드 " --> 변경사항을 반영(업로드는 되지않은 상태, 전송 전 단계)
 - git push -u origin main  --> 깃허브에 업로드

 ## 다음 업데이트 부터는 
 - git add . 업데이트 할 파일 등록
 - git commit -m 
 - git push -u origin main(git push)# newspaper-layout
생성
