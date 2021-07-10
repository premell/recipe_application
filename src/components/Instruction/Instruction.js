import InstructionCss from "./Instruction.module.css";

const Instruction = ({
  index,
  value,
  handleChangeTextarea,
  addInstruction,
  deleteInstruction,
  isSecondLastItem,
  isLastItem,
}) => {
  return (
    <>
      <div>{isSecondLastItem}</div>
      <div className={InstructionCss.container}>
        <p>{index + 1}.</p>
        <textarea
          value={value}
          onChange={(e) => handleChangeTextarea(e, index)}
          placeholder="Add another step"
        />{" "}
        <div className={InstructionCss.buttons}>
          {!isLastItem && (
            <>
              <button
                className={InstructionCss.delete_button}
                onClick={() => deleteInstruction(index)}
              >
                Delete
              </button>
              {!isSecondLastItem && (
                <button
                  className={InstructionCss.add_button}
                  onClick={() => addInstruction(index)}
                >
                  Insert Instruction
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Instruction;
