/*
https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/331
字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
示例一: 'abc' --> {value: 'abc'}
示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
*/

interface NestedObj {
  value?: string;
  children?: NestedObj;
}

/**
 * @param {string} str
 * @returns {NestedObj}
 */
function normalizeStringToObject(str: string): NestedObj {
  const arr: string[] = str.split(/[\[\]]/g).filter(Boolean);

  let i = 0, obj = <NestedObj>{}, cur = obj;
  while (i < arr.length) {
    if (i > 0) {
      cur = cur.children = {};
    }

    cur.value = arr[i];
    i++;
  }

  return obj;
}
