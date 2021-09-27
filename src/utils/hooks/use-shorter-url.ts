import * as React from "react";
import url from "@/api/url";
import {
	ShortenerUrlData,
	ShortenerUrlResponse,
} from "@/utils/models/shortener";

type Action =
	| { type: "shortening" }
	| { type: "failed" }
	| { type: "success"; payload: { msg: "Created" | "Found" | "" } };

type State = {
	shortening: boolean;
	success: {
		success: boolean;
		msg: "Created" | "Found" | "";
	};
	failed: boolean;
};

type Dispatch = (action: Action) => void;

const shortenerReducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "shortening":
			return {
				shortening: true,
				success: { success: false, msg: "" },
				failed: false,
			};
		case "success":
			return {
				shortening: false,
				success: { success: true, msg: action.payload.msg },
				failed: false,
			};
		case "failed":
			return {
				shortening: false,
				success: { success: false, msg: "" },
				failed: true,
			};
	}
};

const Short = async (dispatch: Dispatch, shorterUrlData: ShortenerUrlData) => {
	try {
		dispatch({ type: "shortening" });

		const res = await url.Shorter(shorterUrlData);
		if (res.status !== 200) {
			throw new Error("Network Error");
		}

		const resData: ShortenerUrlResponse = await res.json();

		let payload: { msg: "Created" | "Found" | "" };
		if (resData.statusCode.value === 201) {
			//The url has been created
			payload = { msg: resData.statusCode.description };
		} else if (resData.statusCode.value === 302) {
			//The shorter url exits
			payload = { msg: resData.statusCode.description };
		}

		dispatch({ type: "success", payload });
	} catch (error) {
		dispatch({ type: "failed" });
	}
};

export const useShorterUrl = () => {
	const [state, dispatch] = React.useReducer(shortenerReducer, {
		shortening: false,
		success: { success: false, msg: "" },
		failed: false,
	});
	const value = {
		state,
		dispatch,
		Short,
	};
	return value;
};
