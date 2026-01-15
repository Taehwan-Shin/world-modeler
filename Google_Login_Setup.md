# 구글 로그인 설정 가이드 (Google OAuth)

"Unsupported provider" 에러는 Supabase 대시보드에서 **Google 로그인 기능이 꺼져있기 때문에** 발생합니다.
이를 해결하려면 구글 클라우드에서 '열쇠(ID/Secret)'를 받아 Supabase에 입력해야 합니다. 조금 복잡해보일 수 있지만, 천천히 따라오시면 됩니다!

## 1단계: 구글 클라우드에서 열쇠 받기
1.  [구글 클라우드 콘솔](https://console.cloud.google.com/)에 접속합니다.
2.  (처음이라면) 약관에 동의하고 **프로젝트 만들기**를 눌러 아무 이름(예: `World Modeler`)으로 프로젝트를 생성합니다.
3.  왼쪽 메뉴에서 **API 및 서비스 > OAuth 동의 화면**으로 이동합니다.
    *   `User Type`을 **외부 (External)**로 선택하고 `만들기`를 누릅니다.
    *   앱 이름(`World Modeler`), 이메일 등 필수 항목만 채우고 `저장 후 계속`을 끝까지 누릅니다. (다른 설정은 건너뛰셔도 됩니다.)
4.  왼쪽 메뉴에서 **API 및 서비스 > 사용자 인증 정보 (Credentials)**로 이동합니다.
5.  **+ 사용자 인증 정보 만들기** > **OAuth 클라이언트 ID**를 클릭합니다.
    *   애플리케이션 유형: **웹 애플리케이션**
    *   승인된 리디렉션 URI (중요!):
        *   여기에 **Supabase 주소**를 넣어야 합니다.
        *   Supabase 대시보드 > Authentication > Providers > Google 항목을 열어보세요.
        *   `Callback URL (for OAuth)` 이라고 적힌 주소(예: `https://abcd.supabase.co/auth/v1/callback`)를 복사해서 붙여넣고 `만들기`를 누릅니다.
6.  생성 완료 화면에서 **클라이언트 ID**와 **클라이언트 보안 비밀(Secret)** 두 가지를 복사해 둡니다.

## 2단계: Supabase에 열쇠 등록하기
1.  [Supabase 대시보드](https://supabase.com/dashboard) > 프로젝트 > **Authentication** > **Providers** 메뉴로 갑니다.
2.  **Google**을 찾아 클릭합니다.
3.  **Enable Google** 스위치를 켭니다.
4.  아까 복사한 값을 붙여넣습니다:
    *   `Client ID` → 구글 클라이언트 ID
    *   `Client Secret` → 구글 클라이언트 보안 비밀
5.  **Save** 버튼을 누릅니다.

## 3단계: URL 허용하기 (Redirect)
1.  Supabase 대시보드 > **Authentication** > **URL Configuration** 메뉴로 갑니다.
2.  **Redirect URLs** 섹션에 다음 두 주소를 `Add URL`로 추가합니다.
    *   `http://localhost:3000/**` (로컬 테스트용)
    *   `https://world-modeler.vercel.app/**` (실제 배포 주소 - 본인의 Vercel 주소로 입력하세요)
3.  **Save**를 누릅니다.

이제 다시 로그인을 시도해 보세요. 성공할 겁니다! 🎉
