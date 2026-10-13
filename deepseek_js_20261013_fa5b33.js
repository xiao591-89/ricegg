// 复制服务器地址
const copyBtn = document.getElementById('copy-btn');
const copyMsg = document.getElementById('copy-msg');
const serverIP = document.getElementById('server-ip').textContent;

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(serverIP).then(() => {
    copyMsg.textContent = '已复制！';
    setTimeout(() => {
      copyMsg.textContent = '';
    }, 2000);
  }).catch(() => {
    copyMsg.textContent = '复制失败，请手动复制';
  });
});