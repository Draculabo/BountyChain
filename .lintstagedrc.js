module.exports = {
  // 对所有 JS/TS 文件运行 ESLint
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix'],

  // 对所有文件运行 Prettier
  '**/*.{js,jsx,ts,tsx,json,md}': ['prettier --write'],

  // 对 package.json 特殊处理
  'package.json': ['prettier --write'],
};
