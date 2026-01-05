import http from 'k6/http';
import {sleep} from "k6";

export const options = {
    duration: '1s',
};

export function setup() {
    console.log('-----setup------');
};

export default function () {
    console.log('-----VUs Stage------');
    sleep(1);
};

export function teardown() {
    console.log('-----teardown------');
};
