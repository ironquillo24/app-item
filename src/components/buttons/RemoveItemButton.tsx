type RemoveItemButtonProps = {
  id: string;
  modalRef: React.RefObject<HTMLDialogElement>;
  setter: React.Dispatch<React.SetStateAction<string>>;
};
const RemoveItemButton = ({ id, modalRef, setter }: RemoveItemButtonProps) => {
  const onRemove = () => {
    modalRef.current?.showModal();
    setter(id);
  };

  return (
    <button
      type="button"
      className="text-red-500 hover:underline"
      onClick={onRemove}
    >
      remove
    </button>
  );
};

export default RemoveItemButton;
