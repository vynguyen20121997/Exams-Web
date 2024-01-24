export const SubjecGenerator = (subjectData, idSubject) => {
  const subjectDetail =
    subjectData && subjectData.data.data.find((e) => e._id === idSubject);
  const subjectName = subjectDetail && subjectDetail.title;
  return subjectName;
};
