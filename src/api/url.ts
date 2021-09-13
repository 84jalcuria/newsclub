const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const Metadata = async (url: string) => {
  const params = new URLSearchParams({ url });
  const res = await fetch('/api/scraper?' + params, {
    method: 'GET',
    headers,
  });
  return res;
};

const Url = { Metadata };

export default Url;
