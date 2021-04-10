import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Joao Lopes",
      email: "joaorfclopes@gmail.com",
      password: bcrypt.hashSync("123", 8),
    },
  ],
};

export default data;
