import http from 'k6/http';
import { sleep } from 'k6';
import  exec from "k6/execution";

export const options = {
  stages : [
    {//ramp-up
      duration: '10s',
      target: 10
    },
    {//hold
      duration: '30s',
      target: 10
    },
    {//ramp-down
      duration: '10s',
      target: 0
    }
  ]
};

export function setup() {
  let res = http.get('https://quickpizza.grafana.vn/test.k6.io/error');
  if (res.error) {
    exec.test.abort('The application failed.');
  }
}

export default function () {
  http.get('https://quickpizza.grafana.com/test.k6.io/');
  http.get('https://quickpizza.grafana.com/contacts.php');
}