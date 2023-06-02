import http from 'k6/http';

export const options = {
  stages: [
    { duration: '20s', target: 75 },
    { duration: '20s', target: 150 },
    { duration: '20s', target: 75 },
    { duration: '20s', target: 0 },
  ],
};

const addr = 'https://anton.sch.bme.hu/iet/api/graphql//:3001/graphql';

const query = `
   query plants {
    plants {
        id
        name
        lastWatered
        waterFrequency
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
