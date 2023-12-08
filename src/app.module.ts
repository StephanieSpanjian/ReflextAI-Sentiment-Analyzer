import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AnalyzeSentimentController } from './sentimentAnalyzer/sentimentAnalyzer.controller'
import { AnalyzeSentimentService } from './sentimentAnalyzer/sentimentAnalyzer.service'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, AnalyzeSentimentController],
  providers: [AppService, AnalyzeSentimentService],
})
export class AppModule {}
