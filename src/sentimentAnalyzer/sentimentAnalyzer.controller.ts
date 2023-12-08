import { Body, Controller, Post } from '@nestjs/common'
import { ApiBody, ApiResponse, ApiTags, ApiProperty } from '@nestjs/swagger'
import { AnalyzeSentimentService } from './sentimentAnalyzer.service'

export class MessageDto {
  @ApiProperty()
  text: string
}

export class SentimentAnalysis {
  @ApiProperty()
  score: number

  @ApiProperty()
  magnitude: number
}

@ApiTags('analyzeSentiment')
@Controller('analyzeSentiment')
export class AnalyzeSentimentController {
  constructor(private readonly analyzeSentimentService: AnalyzeSentimentService) {}

  @Post()
  @ApiBody({
    description: 'Text to analyze sentiment.',
    type: MessageDto,
  })
  @ApiResponse({
    description: 'The record has been successfully analyzed.',
    type: SentimentAnalysis,
  })
  async analyzeSentiment(@Body() messageDto: MessageDto) {
    return this.analyzeSentimentService.analyzeSentiment(messageDto)
  }
}
