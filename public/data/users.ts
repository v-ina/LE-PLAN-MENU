const users = [
    {
      id: 101,
      email: "user101@example.com",
      password: "hashedpassword1", // 비밀번호는 해시 처리되어야 함
      isValid: true,
      role: "user"
    },
    {
      id: 102,
      email: "user102@example.com",
      password: "hashedpassword2",
      isValid: true,
      role: "admin"
    }
  ];
  
  export default users;
  