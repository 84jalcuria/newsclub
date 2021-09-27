import { ShortenerUrlData } from "@/utils/models/shortener";

const baseUrl = process.env.NEXT_PUBLIC_END_POINT;

const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

const Metadata = async (url: string) => {
	const params = new URLSearchParams({ url });
	const res = await fetch("/api/scraper?" + params, {
		method: "GET",
		headers,
	});
	return res;
};

const Shorter = async (shortenerUrlData: ShortenerUrlData) => {
	const url = baseUrl + "/api/shorten-url";
	const res = fetch(url, {
		method: "POST",
		headers,
		body: JSON.stringify(shortenerUrlData),
	});
	return res;
};

const url = { Metadata, Shorter };

export default url;
