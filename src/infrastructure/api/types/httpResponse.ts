/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpStatusCode } from 'axios'

export interface HttpResponse {
  statusCode: HttpStatusCode
  message: string
  data?: any
}
