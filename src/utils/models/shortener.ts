export type ShortenerUrlData = {
	url: string;
	description: string;
	userId: string;
	monetize: boolean;
};

export type ShortenerUrlResponse = {
	statusCode: {
		value: 201 | 302;
		description: "Created" | "Found";
	};
	data: string;
};
