import { S3 } from 'aws-sdk'
import axios from 'axios'

const s3 = new S3();

const baseUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`

export const handler = async (event) => {

  const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
  const bucket = event.Records[0].s3.bucket.name;

  const params = {
    Bucket: bucket,
    Key: key
  }

  const data = await s3.getObject(params).promise();
  console.log(data);

  await axios
    .post(baseUrl, {
      chat_id: process.env.CHAT_ID,
      text: "Houve mais um upload no seu bucket s3"
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.error(error)
    })

  console.log("mais um arquivo baixado");
}