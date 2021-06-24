import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const DraggableRecipe = ({ snapshot, provided, recipe, index }) => {
  console.log("hejsan");
  return (
    <Draggable key={recipe.id} draggableId={recipe.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              userSelect: "none",
              padding: 16,
              margin: "0 0 8px 0",
              minHeight: "50px",
              backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
              color: "white",
              ...provided.draggableProps.style,
            }}
          >
            {recipe.name}
          </div>
        );
      }}
    </Draggable>
  );
};
export default DraggableRecipe;
