/**
 * @file
 *   dynamic-module-loading.html에서 쓰는 메인 스크립트
 * @author fixalot
 * @since 2023-10-24
 */

let btn = document.querySelector('button#btn');

btn.addEventListener('click', () => {
  import('./messages.js').then(module => {
    console.log('module:', module);
    console.log('module.default:', module.default);
    console.log('module.default.wassup:', module.default.wassup);
    console.log('module.foo.bar:', module.foo.bar);
  });
});
