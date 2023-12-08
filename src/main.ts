import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
// import { AnalyzeSentimentModule } from './sentimentAnalyzer/sentimentAnalyzer.module'

// import { authenticateImplicitWithAdc } from './sentimentAnalyzer/gcp'

async function bootstrap() {
  // await authenticateImplicitWithAdc()

  const app = await NestFactory.create(AppModule)
  // const app = await NestFactory.create(AnalyzeSentimentModule)

  const config = new DocumentBuilder()
    .setTitle('Reflext.AI Sentiment Analyzer')
    .setDescription('Analyzes text posted and returns ')
    .setVersion('1.0')
    .addTag('sentimentAnalyzer')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}
bootstrap()
