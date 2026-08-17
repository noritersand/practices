export function generateToc(dropZone) {
  let $dropZone = document.querySelector(dropZone);
  if (!$dropZone) {
    console.warn('TOC를 생성할 dropZone이 음슴');
    return;
  }

  let $h4 = document.createElement('h4');
  $dropZone.appendChild($h4);
  $h4.innerHTML = '📌 목차';

  let $topUl = document.createElement('ul');
  $dropZone.appendChild($topUl);

  let usedIds = new Set();
  let $subUl = null;

  let $nodeList = document.querySelectorAll('h2, h3');
  $nodeList.forEach($ele => {
    let baseId = $ele.innerText.replace(/\s/g, '-');
    let newId = baseId;
    let suffix = 2;
    while (usedIds.has(newId)) {
      newId = `${baseId}-${suffix++}`;
    }
    usedIds.add(newId);

    $ele.setAttribute('id', newId);

    let $li = document.createElement('li');
    $li.innerHTML = `<a href="#${newId}">${$ele.innerText}</a>`;

    if ($ele.tagName == 'H2') {
      $topUl.appendChild($li);
      $subUl = null;
    } else {
      if (!$subUl) {
        $subUl = document.createElement('ul');
        let $parentLi = $topUl.lastElementChild || $topUl.appendChild(document.createElement('li'));
        $parentLi.appendChild($subUl);
      }
      $subUl.appendChild($li);
    }
  });
}
