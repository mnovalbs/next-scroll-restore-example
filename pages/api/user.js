function generateUser(id) {
  const image = `https://picsum.photos/id/${id}/300/300`;
  const name = `User ${id}`;
  return { id, image, name };
}

export default (req, res) => {
  const page = req.query.page || 1;
  const limit = parseInt(req.query.limit || 20, 10);
  const start = page * limit + 1;

  const users = [...new Array(limit)].map((_, i) => generateUser(i + start));
  return res.status(200).json({ data: users });
};
