const LayoutDoingTestPage = ({ children }) => {
  return (
    <div className="background-website-admin">
      <div className="bg-white w-11/12 mx-auto	my-20 rounded-3xl py-5 max-h-[950px] ">
        <div className="px-20 pt-14 pb-10"> {children}</div>
      </div>
    </div>
  );
};

export default LayoutDoingTestPage;
