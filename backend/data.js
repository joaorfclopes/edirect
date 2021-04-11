import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Joao Lopes",
      email: "joaorfclopes@gmail.com",
      password: bcrypt.hashSync("123", 8),
    },
    {
      _id: "6071e2310b48ac27cf26d30b",
      name: "Test User",
      email: "testuser@gmail.com",
      password: bcrypt.hashSync("test123", 8),
    },
  ],
  projects: [
    {
      name: "Test Project",
      tasks: [
        {
          title: "Lorem ipsum dolor sit amet",
          done: false,
        },
        {
          title: "Lorem ipsum",
          done: true,
        },
        {
          title: "Dolor sit amet",
          done: true,
        },
      ],
      user: "6071e2310b48ac27cf26d30b",
    },
  ],
};

export default data;
