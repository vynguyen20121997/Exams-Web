export const pageContainer =
  " bg-white container xl mx-auto rounded-3xl px-20 py-10";

function PageContainer({ children }) {
  return <div className="background-website">{children}</div>;
}

export default PageContainer;
