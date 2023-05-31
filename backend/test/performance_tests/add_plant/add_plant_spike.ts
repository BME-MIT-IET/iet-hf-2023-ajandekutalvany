import http from 'k6/http';

export const options = {
  stages: [
    { duration: '10s', target: 100 },
    { duration: '10s', target: 200 },
    { duration: '10s', target: 1600 },
    { duration: '10s', target: 1600 },
    { duration: '10s', target: 400 },
    { duration: '10s', target: 400 },
    { duration: '10s', target: 0 },
  ],
};

const addr = 'https://anton.sch.bme.hu/iet/api/graphql//:3001/graphql';

const query = `
 mutation addPlant{
    addPlant(plant: { name: "perf_test_plant", waterFrequency: 1 }) {
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
