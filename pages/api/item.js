function generateItem(id) {
  const image = `https://picsum.photos/id/${id}/300/300`;
  const name = `Item ${id}`;
  return { id, image, name };
}

export default (req, res) => {
  const page = req.query.page || 1;
  const limit = parseInt(req.query.limit || 20, 10);
  const start = page * limit + 1;

  const items = [...new Array(limit)].map((_, i) => generateItem(i + start));
  return res.status(200).json({ data: items });
};
