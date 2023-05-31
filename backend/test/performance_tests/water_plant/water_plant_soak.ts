import http from 'k6/http';

export const options = {
  stages: [
    { duration: '20s', target: 15 },
    { duration: '10s', target: 25 },
    { duration: '4ms', target: 25 },
    { duration: '20s', target: 0 },
  ],
};

const addr = 'https://anton.sch.bme.hu/iet/api/graphql//:3001/graphql';

/**
 * The id must be a valid id of a plant in the database.
 */
const query = `
  mutation waterPlant {
    waterPlant(id: "53576c55-2072-482f-8a95-2eebb1553ca4")
}
`;

const headers = {
  'Content-Type': 'application/json',
};

export default function () {
  http.post(
    addr,
    JSON.stringify({
      query,
    }),
    { headers },
  );
}
