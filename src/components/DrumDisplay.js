const DrumDisplay = ({ drum }) => {
  return (
    <div
      id="display"
      class="border-solid border-2 border-slate-400 p-2 mx-auto w-full text-center"
    >
      {drum}
    </div>
  );
};

export default DrumDisplay;
