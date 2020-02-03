const GET_METHOD_MOCK_VALUE = {
  data: {
    id: "MY MOCK AXIOS GET DATA!!!",
    status: 200,
    results: [{ question: "Am I mock data?" }]
  }
};

const get = jest.fn(() => Promise.resolve(GET_METHOD_MOCK_VALUE));

const createReturnValue = jest.fn(() => {});
createReturnValue.get = get;

const create = jest.fn(() => createReturnValue);
const axios = { create };

export default axios;
