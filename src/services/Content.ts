import Content from '../assets/mocks/Content.mock.json';

const GetContent = async (section:string, id?: string) => {
  const sectionContent = Content?.[section];
  if (!sectionContent) {
    return { message: 'Content not found' };
  }
  if (!id) {
    return sectionContent;
  }
  const content = sectionContent?.find((item) => item.id === id);
  if (!content) {
    return { message: 'Content not found' };
  }
  return content;
}
export default GetContent;