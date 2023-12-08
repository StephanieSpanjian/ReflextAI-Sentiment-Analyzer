import { Injectable } from '@nestjs/common'
import { MessageDto, SentimentAnalysis } from './sentimentAnalyzer.controller'

@Injectable()
export class AnalyzeSentimentService {
  async analyzeSentiment(messageDto: MessageDto): Promise<SentimentAnalysis> {
    const gcpSentimentAnalyzerURL =
      'https://language.googleapis.com/v2/documents:analyzeSentiment?key=AIzaSyD0D9asKmg9JAuLJE72iuT-XXL5-VhrM6s'

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
