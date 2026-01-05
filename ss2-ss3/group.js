import http from 'k6/http';
import { sleep, group } from 'k6';

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
  ],
  thresholds: {
    'http_req_duration{group:::Main page}': ['p(90) < 300'],
  }
};

export default function () {
  group('Main page', function() {
    http.get('https://quickpizza.grafana.com/test.k6.io/');
    http.get('https://quickpizza.grafana.com/contacts.php');
  });

  group('Sub page', function() {
    http.get('https://quickpizza.grafana.com/test.k6.io/');
    http.get('https://quickpizza.grafana.com/contacts.php');
  });
}