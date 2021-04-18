yarn init # private root
yarn create @vitejs/app vite-react-wasm-app --template react-ts
npx lerna init
yarn

npx lerna create --access private component-name packages
