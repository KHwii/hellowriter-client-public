# README

### 기본적인 셋팅이 끝났습니다. 
- App.js, Root.js는 서비스에 대한 내용을 담지 않습니다.
- src/pages는 라우터에서 처리할 컴포넌트 단위입니다. 유저가 UI가 아니라 URL를 통해 행동할때를 고려해주세요.
- src/compnents는 중복적으로 사용되는 컴포넌트를 재활용하기 위해 만들었습니다. pages에서 계속 사용되는 컴포넌트가 있다면 props만 다르게 지정해주면 재활용할 수 있도록 만들어주세요.
- src/client가 굳이 있는 이유는 서버렌더링을 고려한 준비입니다.
- [안트디자인](https://ant.design/)  을 적극활용해주세요.

- - -

### 코드 규칙 통일을 위해 VS Code Extension 내 ESLint 및 Prettier 설치가 필요합니다
- 이후 settings(Cmd+) 진입, 우측 상단의 '{}' 버튼을 눌러 json 파일을 오픈합니다

- 아래 설정 내용을 추가합니다

- { ..., "editor.formatOnSave": true, "javascript.format.enable": false, "prettier.eslintIntegration": true }

- - -

- 프로젝트에 대한 설명을 문서로 잘 기록하고 잘 리뷰하고
- 투두카드와 스프린트 진행 질서를 잘 준수해서
- 더 큰 프로젝트를 위한 기본적인 팀워크 습관과
- 작지만 단단한 서비스를 만들어봅시다.




- - -
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
