import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages : [
    {//ramp-up
      duration: '3s',
      target: 10
    },
    {//ramp-down
      duration: '2s',
      target: 0
    }
  ]
};

export default function () {
  http.get('https://quickpizza.grafana.com/test.k6.io/');
  sleep(1);
}