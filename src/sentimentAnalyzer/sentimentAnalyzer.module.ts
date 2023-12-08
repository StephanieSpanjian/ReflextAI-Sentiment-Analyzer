import { Module } from '@nestjs/common'
import { AnalyzeSentimentController } from './sentimentAnalyzer.controller'
import { AnalyzeSentimentService } from './sentimentAnalyzer.service'

@Module({
  imports: [],
  controllers: [AnalyzeSentimentController],
  providers: [AnalyzeSentimentService],
})
export class AnalyzeSentimentModule {}
