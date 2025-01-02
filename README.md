# Node JS project setup

## Topics

1. Initilize project
2. Husky
3. Typescript
4. Folder structure
5. Commit lint
6. Eslint fot typescript
7. Prettier
8. Project Environment

## Initilize project

    npm init -y

## Husky - used for pre commit hook

To install husky

    npm i husky lint-staged -D
    npx husky init

## Typescript

    npm i typescript -D
    npx tsc --init

uncomment few lines from tsconfig.json

    npm i @types/node -D
    npm i -D nodemon -> so that server restsrt automatically
    npm i -D ts-node

## Commit lint

    npm i @commitlint/cli @commitlint/config-conventional -D

## Eslint fot typescript

    npm install --save-dev eslint @eslint/js typescript-eslint

## Prettier

    npm i -D --save-exact prettier

## Project Environment

    npm i dotenv-flow
    npm i cross-env
