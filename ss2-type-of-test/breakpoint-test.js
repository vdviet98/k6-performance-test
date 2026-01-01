import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages : [
    {//ramp-up
      duration: '2h',
      target: 10000
    },
  ]
};

export default function () {
  http.get('https://quickpizza.grafana.com/test.k6.io/');
  sleep(1);
}