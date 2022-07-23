var fileName = 'README.md';
var repName = 'es6-notes';
var basePath = `https://github.com/ShenBao/${repName}/blob/master`;
basePath = '';

var desc = `
ES Next 学习笔记

- [tc39 Finished Proposals with ECMA262](https://github.com/tc39/proposals/blob/master/finished-proposals.md)
- [tc39 Finished Proposals with ECMA402](https://github.com/tc39/proposals/blob/main/ecma402/finished-proposals.md)
`;

var endDesc = `
## More links

- [GitHub Home](https://github.com/ShenBao)
- [Blog Home](https://shenbao.github.io)
- [About Me](https://shenbao.github.io/about/)
`;

var fs = require('fs');
var path = require('path');

const cwd = process.cwd();

function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
    var fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      var nextPath = path.join(dir, item);
      if (
        nextPath.includes('oldDocs') ||
        nextPath.includes('code') ||
        nextPath.includes('img') ||
        nextPath.includes('.git') ||
        nextPath.includes('scripts') ||
        nextPath.includes('node_modules')
      ) {
      } else {
        filesList.push(
          {},
          {
            name: item,
            path:
              fullPath.replace(cwd, '').replace(/\\/g, '/') +
              '/README.md',
          }
        );
        readFileList(path.join(dir, item), filesList);
      }
    } else {
      var extname = path.extname(item);
      if (
        !item.includes('Features') &&
        extname == '.md' &&
        item != 'README.md'
      ) {
        var name = item.replace('.md', '');
        var arr = name.split('.');
        if (/^[0-9]+[\s\S]*$/.test(item)) {
          arr.shift();
        }
        name = arr.join().replace(/(^\s*)|(\s*$)/g, '');
        var itemPath = fullPath.replace(cwd, '').replace(/\\/g, '/');
        var obj = {
          name: name,
          path: itemPath,
        };
        filesList.push(obj);
      }
    }
  });
  return filesList;
}

var filesList = [];
readFileList(cwd, filesList);

console.log(`----------------JSON.stringify(filesList, null, 4)`);
console.log(JSON.stringify(filesList, null, 4));
console.log(`----- end -----------JSON.stringify(filesList, null, 4)`);

var str = '';
filesList.forEach((item, index) => {
  var {name, path} = item;
  if (!name) {
    str += `\n`;
    return;
  }
  var enPath = encodeURIComponent(path);
  if (item.path.includes('README.md')) {
    console.log(``);
    var sl = item.path.split('/').length - 1;
    if (sl === 2) {
      str += `## [${name}](${basePath}${enPath})\n\n`;
    } else if (sl === 3) {
      str += `### ${name}\n\n`;
    } else if (sl === 4) {
      str += `#### ${name}\n\n`;
    }
  } else {
    str += `1. [${new String(name).replace(
      new RegExp(',', 'gm'),
      '.'
    )}](${basePath}${enPath})\n`;
  }
  console.log(
    `[${new String(name).replace(
      new RegExp(',', 'gm'),
      '.'
    )}](${basePath}${path})`
  );
});

if (!basePath.startsWith('http')) {
  str += endDesc;
}

var content = `# ${repName}\n`;
if (!basePath.startsWith('http')) {
  content += desc;
}
fs.writeFileSync(`./${fileName}`, content);
fs.writeFile(
  `./${fileName}`,
  str,
  {flag: 'a', encoding: 'utf-8', mode: '0666'},
  function (err) {
    if (err) {
      console.log('\n======== error ========');
      throw err;
    }
    console.log('\n======== success ========');
  }
);
