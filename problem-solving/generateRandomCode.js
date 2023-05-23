function generateRandomCode(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
  
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
      console.log(randomIndex)
    }
  
    return code;
  }
  
  // สร้างรหัสที่มีความยาว 8 ตัวอักษร
  let randomCode = generateRandomCode(8);
  console.log(randomCode);