import { CircleX } from "lucide-react";
export type ChangeNoteProps = {
  notifyChange: {
    notify: boolean;
    isNotified: boolean;
  };
  setNotifyChange: React.Dispatch<
    React.SetStateAction<{
      notify: boolean;
      isNotified: boolean;
    }>
  >;
};

const ChangeNote = ({ notifyChange, setNotifyChange }: ChangeNoteProps) => {
  return (
    <>
      {notifyChange.notify ? (
        <div className="flex italic items-center text-sm p-0 bg-white ease-in-out duration-500 ">
          <span className="font-medium">Note: &nbsp;</span>Changes are saved
          automatically. &nbsp;
          <button
            type="button"
            onClick={() => {
              setNotifyChange({ ...notifyChange, notify: false });
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
