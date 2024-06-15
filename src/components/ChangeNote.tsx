import { CircleX } from "lucide-react";
export type ChangeNoteProps = {
  isInputActive: {
    state: boolean;
    count: number;
  };
  setIsInputActive: React.Dispatch<
    React.SetStateAction<{
      state: boolean;
      count: number;
    }>
  >;
};

const ChangeNote = ({ isInputActive, setIsInputActive }: ChangeNoteProps) => {
  console.log(isInputActive.state);
  return (
    <>
      {isInputActive.state ? (
        <div className="flex italic items-center text-sm p-0 bg-white ease-in-out duration-500 ">
          <span className="font-medium">Note: &nbsp;</span>Changes are saved
          automatically. &nbsp;
          <button
            type="button"
            onClick={() => {
              setIsInputActive({ ...isInputActive, state: false });
            }}
          >
            <CircleX color="#e00000" size={20} />
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ChangeNote;
