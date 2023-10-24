import { app } from '@/infra/http';

app.use('/', (req, res) => {
  res.send('Hello, Docker!');
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
