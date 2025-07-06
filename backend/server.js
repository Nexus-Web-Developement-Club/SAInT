import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const userEmail = "abc@as.com";
const userPassword = "1234";
const specialCode = "saint";

app.post('/admin-login', (req, res) => {
  const { email, password } = req.body;
  console.log("Received Data:", req.body);

  if (email === userEmail && password === userPassword) {
    return res.status(200).json({ success: true, message: "Login successful" });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.post('/admin-signup', (req, res) => {
  const { fullName, email, password, confirmPassword, adminCode } = req.body;
  console.log("Received Data:", req.body);

  if (adminCode === specialCode) {
    if (password === confirmPassword) {
      return res.status(200).json({ success: true, message: "Registration successful" });
    } else {
      return res.status(400).json({ success: false, message: "Passwords do not match" });
    }
  } else {
    return res.status(401).json({ success: false, message: "Invalid secret code" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
