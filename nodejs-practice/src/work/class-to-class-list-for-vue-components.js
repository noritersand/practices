const fs = require('fs');
const path = require('path');

// 폴더명 입력 받기
const folderPath = process.argv[2];

// 주어진 폴더 내의 모든 JS 파일 처리
const processFiles = (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading folder:', err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(folderPath, file);

      console.debug('filePath:', filePath);

      // 파일이 JavaScript 파일인지 확인
      if (path.extname(file) !== '.js' && path.extname(file) !== '.jsp') {
        return;
      }

      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        // <button> 태그 내의 class="..." 패턴 찾기
        const updatedData = data.replace(/<conditional-button[^>]*class="([^"]+)"[^>]*>/g, (match, p1) => {
          const classes = p1.split(' ').map(cls => `'${cls}'`);
          return match.replace(`class="${p1}"`, `:class-list="[${classes.join(', ')}]"`);
        });

        // 파일 업데이트
        fs.writeFile(filePath, updatedData, 'utf8', (err) => {
          if (err) {
            console.error('Error writing file:', err);
          } else {
            console.log(`Updated file: ${filePath}`);
          }
        });
      });
    });
  });
};

processFiles(folderPath);
