const form = document.getElementById('userForm');
const message = document.getElementById('message');

// Thay YOUR_BACKEND_URL bằng URL backend deploy trên Render
// chạ localhost hoặc URL của backend đã deploy
// const API_URL = 'https://YOUR_BACKEND.onrender.com/api/users';
const API_URL = 'https://something-testdeploy.onrender.com/api/users';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
  };

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result.success) {
      message.innerText = `Đã lưu: ${result.user.name} (${result.user.email})`;
      form.reset();
    } else {
      message.innerText = 'Lỗi lưu dữ liệu';
    }
  } catch (err) {
    message.innerText = 'Lỗi kết nối đến server';
  }
});
