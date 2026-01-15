# 월드모델러 배포 가이드 (Vercel)

이 가이드는 '월드모델러'를 전 세계 학생들이 접속할 수 있도록 **Vercel**에 배포하는 방법을 설명합니다.

## 1. GitHub에 코드 올리기
(이미 GitHub Desktop이나 터미널을 통해 코드를 올리셨다면 생략 가능합니다)

1.  GitHub 웹사이트에서 `New Repository`를 클릭하여 새 저장소(`world-modeler`)를 만듭니다.
2.  VS Code 터미널에서 다음 명령어를 순서대로 입력합니다:
    ```bash
    git init
    git add .
    git commit -m "First commit: World Modeler MVP"
    git branch -M main
    git remote add origin [여러분의_깃허브_주소]
    git push -u origin main
    ```

## 2. Vercel 연결하기
1.  [Vercel 대시보드](https://vercel.com/dashboard)에 접속합니다.
2.  `Add New...` > `Project`를 클릭합니다.
3.  방금 만든 GitHub 저장소(`world-modeler`) 옆의 `Import` 버튼을 누릅니다.

## 3. 환경 변수 설정 (가장 중요!)
`Configure Project` 화면에서 **Environment Variables** 섹션을 찾아 펼칩니다. 다음 3가지 값을 꼭 입력해야 합니다.

| Key | Value (값) | 비고 |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | (Supabase 대시보드에서 복사) | `.env.local` 파일과 동일 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | (Supabase 대시보드에서 복사) | `.env.local` 파일과 동일 |
| `GEMINI_API_KEY` | (Google AI Studio에서 발급) | AI 스토리텔링 기능용 |

*입력 후 `Add` 버튼을 눌러 목록에 추가된 것을 꼭 확인하세요!*

## 4. 배포 시작
1.  모두 입력했다면 하단의 **`Deploy`** 버튼을 클릭합니다.
2.  약 1~2분 정도 기다리면 화려한 폭죽 애니메이션과 함께 배포가 완료됩니다! 🚀
3.  생성된 URL(예: `world-modeler.vercel.app`)을 클릭해서 접속해 보세요.

## 5. (선택) 커스텀 도메인 연결
1.  Vercel 프로젝트 화면의 `Settings` > `Domains` 메뉴로 갑니다.
2.  선생님이 보유하신 도메인(예: `worldmodeler.com`)을 입력하고 `Add`를 누릅니다.
3.  안내에 따라 도메인 구입처(가비아, 호스팅케이알 등)에서 DNS 설정(A 레코드/CNAME)을 변경해주면 끝납니다.
