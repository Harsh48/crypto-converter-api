const getFiatList = async (req, res) => {
	try {
		const response = await axios.get(
			"https://pro-api.coinmarketcap.com/v1/fiat/map",
			{
				params: {
					limit: 100,
					sort: "id",
				},
				headers: {
					"X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY,
				},
			}
		);

		res.json({
			data: response.data,
		});
	} catch (error) {
		console.log(error);
	}
};

const getCryptoList = async (req, res) => {};

const convertCryptoToFiat = async (req, res) => {};

module.exports = {
	getFiatList,
	getCryptoList,
	convertCryptoToFiat,
};
