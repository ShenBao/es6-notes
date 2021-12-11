const fs = require('fs');
const path = require('path');
const glob = require('glob');
const axios = require('axios');

const isDev = process.env.NODE_ENV === 'development';

const CONFIG = {
  pageTitle: 'ES6+ 学习笔记 - ShenBao',
  yuyanDocConfig: {
    GITHUB_USERNAME: 'ShenBao',
    REPOSITORY_NAME: 'es6-notes',
    pageTitle: 'ES6+ 学习笔记',
    pageList: [],
    pageMap: {},
    contentType: 0,
    isDev,
  },
};

const findIsIgnoreFile = (match) => {
  const filePath = match[0];
  return (
    filePath.endsWith('README.md') ||
    filePath.includes('node_modules') ||
    filePath.includes('oldDocs')
  );
};

const buildPageList = () => {
  const mdFiles = glob.sync(path.join(process.cwd(), './**/*.md'));
  const pageList = [];
  const pageMap = {};
  Object.keys(mdFiles).map((index) => {
    const entryFile = mdFiles[index];
    const match = entryFile.match(/\/es6-notes\/(.*)\/*\.md/);
    const isIgnoreFile = findIsIgnoreFile(match);
    if (!(match && isIgnoreFile)) {
      const arr = match[1].split('/');
      !pageMap[arr[0]] ? (pageMap[arr[0]] = []) : '';
      const item = {
        title: arr[1],
        url: isDev
          ? match[0].replace(`/${CONFIG.yuyanDocConfig.REPOSITORY_NAME}`, '')
          : match[0],
      };
      pageList.push(item);
      pageMap[arr[0]].push(item);
    }
  });

  CONFIG.yuyanDocConfig.pageList = pageList;
  CONFIG.yuyanDocConfig.pageMap = pageMap;
  return CONFIG;
};

const url = 'https://shenbao.github.io/yuyan-doc-template/dist/template.html';

buildPageList();

function buildIndexHtml(tmpHtml = '') {
  console.log('---- input:');
  console.log(tmpHtml);
  let tmp = tmpHtml.toString();
  tmp = tmp
    .replace('----pageTitle----', CONFIG.pageTitle)
    .replace(
      '"---YUYAN_DOC_CONFIG----"',
      JSON.stringify(CONFIG.yuyanDocConfig)
    );

  let fd = fs.openSync('index.html', 'w');
  fs.writeFileSync(fd, tmp);
  fs.closeSync(fd);
  console.log('---- output:');
  console.log(tmp);
  console.info('index.html success ...');
}

axios
  .get(url)
  .then((res) => {
    if (res.status === 200) {
      buildIndexHtml(res.data);
    } else {
      console.error(res);
    }
  })
  .catch((err) => {
    console.log(err);
  });
