import React from "react";

import DraggableRecipe from "./DraggableRecipe";
import RecipeCard from "../RecipeList/RecipeCard";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";

const DroppableColumn = ({ id, columnName, recipes }) => {
  return (
    <div>
      <h2>{columnName}</h2>
      <div style={{ margin: 8 }}>
        <Droppable droppableId={id} key={id}>
          {(provided, snapshot) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",
                  padding: 4,
                  width: 250,
                  minHeight: 500,
                }}
              >
                {recipes.map((recipe, index) => {
                  return (
                    <DraggableRecipe
                      provided={provided}
                      snapshot={snapshot}
                      recipe={recipe}
                      draggableId={recipe.id}
                      key={recipe.id}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
    </div>
  );
};
export default DroppableColumn;
