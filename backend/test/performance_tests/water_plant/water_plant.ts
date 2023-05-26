import http from 'k6/http';

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
    'https://127.0.0.1:3001/graphql',
    JSON.stringify({
      query,
    }),
    { headers },
  );
}
