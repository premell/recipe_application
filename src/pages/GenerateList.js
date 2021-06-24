import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { randomizeList } from "../utils/randomizedList";
import DroppableColumn from "../components/DroppableColumn";

import { useRecoilState } from "recoil";
import { recipes as recipesAtom } from "../atoms";
import { useEffect } from "react";

import uuid from "uuid/v4";

const originalColumns = {
  totalColumn: {
    id: "totalColumn",
    title: "My Recipes",
    recipes: [],
  },
  weeklyColumn: {
    id: "weeklyColumn",
    title: "Weekly List",
    recipes: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceRecipes = [...sourceColumn.recipes];
    const destRecipes = [...destColumn.recipes];
    const [removed] = sourceRecipes.splice(source.index, 1);
    destRecipes.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        recipes: sourceRecipes,
      },
      [destination.droppableId]: {
        ...destColumn,
        recipes: destRecipes,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedRecipes = [...column.recipes];
    const [removed] = copiedRecipes.splice(source.index, 1);
    copiedRecipes.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        recipes: copiedRecipes,
      },
    });
  }
};
let localTotalRecipes;
let localWeeklyRecipes;

const GenerateList = () => {
  const [columns, setColumns] = useState(originalColumns);
  const [recipes, setRecipes] = useRecoilState(recipesAtom);

  useEffect(() => {
    localTotalRecipes = [...recipes];
    localWeeklyRecipes = [];
  }, [recipes]);

  useEffect(() => {
    if (localTotalRecipes === "undefined" || localTotalRecipes === "undefined")
      return;
    const newColumns = { ...columns };
    newColumns.totalColumn.recipes = [...localTotalRecipes];
    newColumns.weeklyColumn.recipes = [...localWeeklyRecipes];
    console.log(newColumns);
    setColumns(newColumns);
  }, [localTotalRecipes, localWeeklyRecipes]);

  return (
    <>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <DroppableColumn
          columnName={"My Recipes"}
          id={columns.totalColumn.id}
          recipes={columns.totalColumn.recipes}
        />
        <DroppableColumn
          columnName={"Weekly List"}
          id={columns.weeklyColumn.id}
          recipes={columns.weeklyColumn.recipes}
        />
      </DragDropContext>
    </>
  );
};

export default GenerateList;

// const [recipes, setRecipes] = useRecoilState(recipesAtom);
// const [totalColumn, setTotalColumn] = useState({
//   id: "totalColumn",
//   recipes: [],
// });
// const [weeklyColumn, setWeeklyColumn] = useState({
//   id: "weeklyColumnl",
//   recipes: [],
// });
//
// const randomizeTotal = () => {
//   const randomizedRecipes = randomizeList(totalColumn.recipes);
//   setTotalColumn(randomizedRecipes);
// };
// const randomizeWeekly = () => {
//   const randomizedRecipes = randomizeList(weeklyColumn.recipes);
//   setWeeklyColumn(randomizedRecipes);
// };
//
// useEffect(() => {
//   setTotalColumn({ ...totalColumn, recipes: localTotalRecipes });
//   setWeeklyColumn({ ...weeklyColumn, recipes: localWeeklyRecipes });
// }, [localTotalRecipes, localWeeklyRecipes]);
//
// useEffect(() => {
//   localTotalRecipes = [...recipes];
// }, [recipes]);
