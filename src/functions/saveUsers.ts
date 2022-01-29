import { APIGatewayProxyHandler } from 'aws-lambda'
import { document } from '../utils/dynamodbClient'

interface ICreateUser {
  id: string;
  name: string;
}

export const handler: APIGatewayProxyHandler = async (event) => {
  const { id, name } = JSON.parse(event.body) as ICreateUser

  await document.put({
    TableName: "users",
    Item: {
      id,
      name,
      created_at: new Date()
    }
  }).promise();

  const response = await document.query({
    TableName: "users",
    KeyConditionExpression: "id = :id",
    ExpressionAttributeValues: {
      ":id": id
    }
  }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify(response.Items[0])
  }
}