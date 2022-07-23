'use strict';

import './style.css';

import React, {useState} from 'react';
import ReactDOM from 'react-dom';

console.log('ECMAScript Next 学习笔记');
console.log('author: ShenBao');
console.log('es6-notes: https://github.com/ShenBao/es6-notes');

const App = () => {
  let list = window.esPageList || [];
  let listObj = {};
  list.forEach((item) => {
    let [group, ...title] = item.title.split('-');
    group = group.trimEnd();
    title = title.join('-').trimStart();
    if (listObj[group]) {
      listObj[group].push({
        ...item,
        title,
      });
    } else {
      listObj[group] = [
        {
          ...item,
          title,
        },
      ];
    }
  });

  const hash = (location.hash || '').split('#')[1] || '';
  const hashObj = list.find(item => item.url === decodeURIComponent(hash)) || {};
  const [subUrl, setSubUrl] = useState(hashObj.url || '');
  const handlerItem = (item) => {
    location.hash = item.url;
    setSubUrl(item.url);
  };

  return (
    <div className="app">
      <div className="list">
        {Object.keys(listObj).map((key) => {
          return (
            <div key={key}>
              <h4>{key}</h4>
              <ul>
                {listObj[key].map((item) => {
                  const liStyle = {};
                  if (subUrl == item.url) {
                    liStyle.color = 'blue';
                  }
                  return (
                    <li key={item.url} style={liStyle}>
                      <div onClick={() => handlerItem(item)}>{item.title}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      {subUrl && (
        <div className="sub-page">
          <iframe src={'./' + subUrl} />
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
