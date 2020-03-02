import request from 'request';
import csv from 'csvtojson';

export default async path => {
  const data = await csv().fromStream(request.get(path));
  return data;
};
