# 개인 연구자 홈페이지 사용법

첨부 이미지의 레이아웃을 참고해 제작한 정적 웹사이트입니다. 별도 설치가 필요하지 않습니다.

## 바로 실행하기

압축을 풀고 `index.html` 파일을 브라우저에서 열면 됩니다.

## 내 정보로 수정하기

1. `site-data.js` 파일을 텍스트 편집기로 여세요.
2. `name`, `introduction`, `researchInterests`, `news`, `publications` 내용을 바꾸세요.
3. 자신의 사진을 `assets/profile.jpg`에 넣고, `photo` 값을 `"assets/profile.jpg"`로 수정하세요.
4. 뉴스 사진과 본문: 아래 **뉴스 수정하기**를 참고하세요.
5. 이메일·Google Scholar·GitHub·LinkedIn·CV 주소를 `links` 항목에 입력하세요. 값이 비어 있으면 해당 링크는 표시되지 않습니다.
6. 논문의 게재 상태와 저자, 학회/저널 정보는 실제로 확정된 내용으로 수정하세요. 현재 예시는 게재 확정 논문이 아니라 manuscript로 표시되어 있습니다.

## 무료로 인터넷에 올리기 (GitHub Pages)

1. GitHub에서 새 공개 저장소(repository)를 만드세요.
2. 압축 파일 내부의 파일들을 저장소 최상위 폴더에 업로드하세요 (`assets` 폴더 포함).
3. **Settings → Pages → Build and deployment**에서 **Deploy from a branch → main → /(root)**를 선택하고 저장하세요.
4. GitHub Pages에 표시되는 주소로 접근할 수 있습니다. 기본적으로 `https://사용자이름.github.io/저장소이름/` 형태입니다. 저장소 이름이 정확히 `사용자이름.github.io`면 루트 주소를 사용합니다.

`styles.css`에서 글꼴, 크기, 색상, 여백을 수정할 수 있습니다. `script.js`에는 메뉴, 테마 전환, 데이터 표시 기능이 들어 있습니다.

## 구성

- `index.html`: 웹페이지 구조
- `styles.css`: 다크/라이트 모드, 모바일 반응형 디자인
- `site-data.js`: 개인 소개, 연구 분야, 뉴스, 논문, 링크 등의 편집용 데이터
- `script.js`: 화면 표시 및 버튼 기능
- `assets/`: 프로필 사진 자리표시자, 아이콘

## 뉴스 수정하기 (사진 + 클릭 시 상세 글)

뉴스를 추가할 때 `site-data.js`의 `news: [ ... ]` 안에 객체 하나를 추가합니다.
기사 목록에서 **사진 또는 제목/설명 영역을 클릭**하면 `index.html?post=글id` 주소로 이동합니다. 방문자에게도 공유 가능한 고유 링크이며 별도 서버가 필요 없습니다.

```js
{
  id: "icra-2027",
  date: "May 2027",
  title: "Presenting our work at ICRA",
  excerpt: "A quick update from the conference.",
  image: "assets/icra-photo.jpg",
  imageAlt: "Photo of our robotics presentation",
  imageCaption: "Our conference presentation.",
  content: [
    "Our team presented research on autonomous navigation.",
    "We discussed new experiments and next steps with other researchers."
  ],
  gallery: [
    {
      src: "assets/icra-photo-2.jpg",
      alt: "Poster session",
      caption: "Poster presentation."
    },
    {
      src: "assets/icra-photo-3.jpg",
      alt: "Group photograph",
      caption: "Group photo."
    }
  ],
  links: [
    { label: "Paper", url: "https://example.com/paper" }
  ]
},
```

- `id`는 게시물별로 고유해야 하며, 공유한 이후에는 변경하지 않는 것이 좋습니다.
- `image`는 목록에서 작은 썸네일로 표시되고, 상세 글에서 대표 이미지로 크게 표시됩니다.
- `content` 배열의 각 문자열이 하나의 문단입니다. HTML을 몰라도 글을 작성할 수 있습니다.
- `gallery`는 추가 사진이 여러 장일 때 사용합니다. 필요 없으면 `gallery: []`로 설정하세요.
- 사진 파일(`.jpg`, `.png`, `.webp` 등)을 `assets/` 폴더에 넣고 경로를 설정하세요.
- 사진 없이 글만 표시하려면 `image: ""`를 사용하세요.
- 처음 들어 있는 SVG 뉴스 이미지와 글은 **사용 방법을 보여 주는 데모**입니다. 실제 연구 사진·글로 교체하세요.
- 이전 형식인 `{ date: "...", text: "...", emphasis: "..." }`도 계속 표시됩니다. 다만 클릭해 상세 페이지로 이동하려면 고유 `id`와 본문을 추가하세요.

## 빠르게 테스트하기

1. `index.html`을 더블클릭해 웹사이트를 여세요.
2. News 항목의 사진 또는 제목을 클릭해 상세 페이지를 열어보세요.
3. "← Back to news"로 목록으로 돌아오세요.
4. 링크 주소를 복사하면 해당 상세 글에 바로 접근할 수 있습니다.

**단일 HTML 파일 버전**은 CSS·JS·데모 사진을 포함한 별도 파일로 함께 제공됩니다. 여러 사진을 본인의 사진으로 교체하며 계속 운영하려면 ZIP 안의 수정형 버전을 사용하세요.
