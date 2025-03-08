export default async function handler(req, res) {
  // const response = await fetch(`http://${process.env.flaskApi}/deleteBlog/${req.body}`,{
  const response = await fetch(`/deleteBlog/${req.body}`,{
    method: "POST"
  });
  const data = await response.json();
  res.status(200).json({ data });
}
