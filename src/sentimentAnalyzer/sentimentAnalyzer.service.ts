import { Injectable } from '@nestjs/common'
import { MessageDto, SentimentAnalysis } from './sentimentAnalyzer.controller'

@Injectable()
export class AnalyzeSentimentService {
  async analyzeSentiment(messageDto: MessageDto): Promise<SentimentAnalysis> {
    const GCP_API_KEY = process.env.GCP_API_KEY
    const gcpSentimentAnalyzerURL = `https://language.googleapis.com/v2/documents:analyzeSentiment?key=${GCP_API_KEY}`

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const requestBody = {
      document: {
        type: 'PLAIN_TEXT',
        content: messageDto.text,
      },
      encodingType: 'UTF8',
    }

    const resp = await fetch(gcpSentimentAnalyzerURL, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers,
      body: JSON.stringify(requestBody),
    })
    const decodedResp = await resp.json()

    const sentimentAnalysis: SentimentAnalysis = decodedResp.documentSentiment

    return sentimentAnalysis
  }
}
