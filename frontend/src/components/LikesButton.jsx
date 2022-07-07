import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const LikesButton = ({ itinerary, handleReload }) => {
	console.log(itinerary._id);

	const dispatch = useDispatch();
	const [reload, setReload] = useState(false);
	const [likes, setLikes] = useState([]);
	const [oneItinerary, setOneItinerary] = useState([]);
	// const [click, setClick] = useState(true);
	const user = useSelector((store) => store.usersReducer.user);
	console.log(user);

	useEffect(() => {
		dispatch(itinerariesActions.getOneItinerary(itinerary._id)) //aca le tengo que pasar la accion
			.then((res) => setLikes(res.data.response.likes));

		//eslint-disable-next-line
	}, [!reload]);

	useEffect(() => {
		dispatch(itinerariesActions.getOneItinerary(itinerary._id)) //aca le tengo que pasar la accion
			.then((res) => setOneItinerary(res.data.response));

		//eslint-disable-next-line
	}, [!reload]);

	console.log(oneItinerary);

	async function likesDislikes() {
		let res = await dispatch(
			itinerariesActions.likeDislikeAction(itinerary._id)
		);
		console.log(res);
		setReload(!reload);
		// setClick(!click);
		if (user) {
			if (res.data.message) {
				toast.success("Thank you for your like");
			} else {
				toast.error("Ohh you dislike😭");
			}
		} else {
			toast.error("Log in to like! if not please sign up!😊");
		}
	}

	return (
		<>
			{user ? (
				<h5 className="text-center" onClick={likesDislikes}>
					{likes?.includes(user.userData.id) ? (
						<AiFillHeart size={30} />
					) : (
						<AiOutlineHeart size={30} />
					)}
					:{likes?.length} likes
				</h5>
			) : (
				<h5 className="text-center" onClick={likesDislikes}>
					<AiOutlineHeart size={30} />:{likes?.length} likes
				</h5>
			)}
		</>
	);
};

export default LikesButton;
