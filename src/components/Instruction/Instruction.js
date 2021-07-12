import InstructionCss from "./Instruction.module.css";

const Instruction = ({
  index,
  value,
  handleChangeTextarea,
  addInstruction,
  deleteInstruction,
  listLength,
}) => {
  const isLastItem = index === listLength - 1 ? true : false;
  const isSecondLastItem = index === listLength - 2 ? true : false;
  const isOnlyItem = listLength === 1 ? true : false;
  return (
    <div className={InstructionCss.main_container}>
      <div className={InstructionCss.container}>
        <p>{index + 1}.</p>
        <textarea
          value={value}
          onChange={(e) => handleChangeTextarea(e, index)}
          placeholder={
            isOnlyItem ? "e.g. Pour the milk into ..." : "Add another step"
          }
        />
      </div>
      <div className={InstructionCss.buttons}>
        {!isLastItem && (
          <>
            <div
              className={`${InstructionCss.button} ${InstructionCss.delete_button}`}
              onClick={() => deleteInstruction(index)}
            >
              Delete
            </div>
            {!isSecondLastItem && (
              <div
                className={`${InstructionCss.button} ${InstructionCss.add_button}`}
                onClick={() => addInstruction(index)}
              >
                Insert
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Instruction;
