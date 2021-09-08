import metaFetcher from 'meta-fetcher';

const handler = async (req, res) => {
  try {
    const url = req.query.url;
    if (!url) {
      throw new Error('query param not found');
    }
    const result = await metaFetcher(url);
    const { metadata } = result;
    res.status(200).json(metadata);
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

export default handler;
