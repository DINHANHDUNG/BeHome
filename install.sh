yarn remove eslint eslint-loader eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier husky lint-staged @typescript-eslint/eslint-plugin @typescript-eslint/parser
yarn add --dev eslint eslint-loader eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier husky lint-staged @typescript-eslint/eslint-plugin @typescript-eslint/parser @commitlint/{config-conventional,cli}

npx husky install
npx husky add .husky/pre-commit "yarn lint-staged"
npx husky add .husky/commit-msg ""

echo "npx --no-install commitlint --edit "$1"" >> ./.husky/commit-msg