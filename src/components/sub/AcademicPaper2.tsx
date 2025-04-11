const AcademicPaper2 = () => {
    return (
      <div className="w-full h-screen px-4 py-6 my-4  bg-black flex justify-center">
        <object
          data="/downloads/20230714_ChainSight.pdf#toolbar=0&scrollbar=1&navpanes=0"
          type="application/pdf"
          width="90%"
          height="100%"
          className="rounded-xl border overflow-auto border-neutral-800 shadow-lg"
        >
          <p className="text-white">
            PDF cannot be displayed. <a href="/downloads/20230714_ChainSight.pdf" target="_blank">Download it here.</a>
          </p>
        </object>
      </div>
    );
  };
  
  export default AcademicPaper2;
  