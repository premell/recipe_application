import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import {
	showEdit as showEditAtom,
	currentlyEdited as currentlyEditedAtom,
	editSaved as editSavedAtom,
} from '../atoms';

const RecipeCard = ({ recipe }) => {
	const [currentlyEdited, setCurrentlyEdited] = useRecoilState(
		currentlyEditedAtom
	);
	const [showEdit, setShowEdit] = useRecoilState(showEditAtom);
	const [editSaved, setEditSaved] = useRecoilState(editSavedAtom);

	const setEdited = () => {
		if (!editSaved && showEdit) return
		setShowEdit(true);
		setCurrentlyEdited(recipe);
	};

	const goToDetails = () => {};

	return (
		<>
			<Link to={`/recipe/${recipe.id}`}>details</Link>
			<div onClick={goToDetails}>{recipe.name}</div>
			<div></div>
			<button onClick={setEdited}>Edit</button>
		</>
	);
};

export default RecipeCard;
