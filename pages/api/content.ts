import Content from '../../src/assets/mocks/Content.mock.json';

const contentApi = (req, res) => {
  const { section, id } = req.query
  const sectionContent = Content?.[section];
  if (!sectionContent) {
    res.status(404).json({ message: 'Content not found' });
    return;
  }
  if (!id) {
    res.status(200).json(sectionContent);
    return;
  }
  const content = sectionContent?.find((item) => item.id === id);
  if (!content) {
    res.status(404).json({ message: 'Content not found' });
    return;
  }
  res.status(200).json(content);
}
export default contentApi;