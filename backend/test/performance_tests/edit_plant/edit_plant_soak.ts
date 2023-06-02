import http from 'k6/http';

export const options = {
  stages: [
    { duration: '20s', target: 15 },
    { duration: '10s', target: 25 },
    { duration: '4m', target: 25 },
    { duration: '20s', target: 0 },
  ],
};

const addr = 'https://anton.sch.bme.hu/iet/api/graphql//:3001/graphql';

/**
 * The id must be a valid id of a plant in the database.
 */
const query = `
 mutation editPlant{
    editPlant(id: "${__ENV.PLANT_ID}", plant: { name: "perf_test_modified", waterFrequency: 2 }) {
        id,
            name
    }
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
